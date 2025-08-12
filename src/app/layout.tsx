"use client";

import "./globals.css";
import Header from "./components/Header";
import { usePopupToggle } from "./hooks/usePopupToggle";
import FormPopup from "./components/utils/FormPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, openPopup, closePopup } = usePopupToggle();

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/unpluginfinity-favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header openPopup={openPopup} />
        <FormPopup isOpen={isOpen} onClose={closePopup} />
        {children}
      </body>
    </html>
  );
}
