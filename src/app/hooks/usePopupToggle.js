"use client";
// hooks/usePopupToggle.js
import { useState } from "react";

export const usePopupToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  const togglePopup = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    openPopup,
    closePopup,
    togglePopup,
  };
};
