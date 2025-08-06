import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, mobile, email, companyName, utm } = body;

    if (!name?.trim() || !mobile?.trim() || !email?.trim()) {
      return NextResponse.json(
        { success: false, message: "Name, mobile, and email are required" },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate mobile (Indian format)
    const cleanedMobile = mobile.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanedMobile)) {
      return NextResponse.json(
        { success: false, message: "Invalid mobile number" },
        { status: 400 }
      );
    }

    const leadData = {
      name: name.trim(),
      mobile: mobile.replace(/\D/g, ""),
      email: email.toLowerCase().trim(),
      companyName: companyName?.trim() || "",
      utm: utm || {},
      timestamp: new Date().toISOString(),
      ipAddress: request.headers.get("x-forwarded-for") || "unknown",
    };

    // Send to Google Sheets
    try {
      await sendToGoogleSheets(leadData);
      console.log("📊 Data sent to Google Sheets");
    } catch (sheetError) {
      console.error("❌ Google Sheets error:", sheetError);
      // Don't fail the request if sheets fails
    }

    // Send email notification
    try {
      await sendEmailNotification(leadData);
      console.log("📧 Email notification sent");
    } catch (emailError) {
      console.error("❌ Email notification error:", emailError);
      // Don't fail the request if email fails
    }

    const leadId = `LEAD_${Date.now()}`;

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
      leadId,
    });
  } catch (error) {
    console.error("❌ Lead submission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Function to send email notification
async function sendEmailNotification(leadData: any) {
  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail app password
    },
  });

  // Format UTM parameters for email
  const utmInfo =
    Object.entries(leadData.utm)
      .filter(([key, value]) => value)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n") || "No UTM parameters";

  // Email content
  const mailOptions = {
    from: `"Unplugged Media" <${process.env.EMAIL_USER}>`,
    to: "olioclientwebsiteleads@gmail.com",
    subject: `🚨 New Lead Unplugged Media - ${leadData.name}`,
    text: `NEW LEAD RECEIVED
  
  Name: ${leadData.name}
  Email: ${leadData.email}
  Mobile: +91 ${leadData.mobile}
  Company: ${leadData.companyName || "Not provided"}
  
  Submitted: ${new Date(leadData.timestamp).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  })}
  
  UTM: ${
    Object.entries(leadData.utm)
      .filter(([k, v]) => v)
      .map(([k, v]) => `${k}=${v}`)
      .join(", ") || "None"
  }
  
  Contact within 24 hours for best results!`,
  };

  // Send email
  await transporter.sendMail(mailOptions);
}

// Function to send data to Google Sheets
async function sendToGoogleSheets(data: any) {
  const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send data to Google Sheets");
  }

  return response.json();
}
