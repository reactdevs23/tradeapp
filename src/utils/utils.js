import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrollToTop;

export const copyToClipboard = (value) => {
  // Copy deposit address to clipboard
  navigator.clipboard.writeText(value);
};
// utils.js
export function convertMBtoGB(mb) {
  return `${mb / 1024} GB`;
}
export const maskToken = (token) => {
  if (!token) return "";

  if (token.length >= 10) {
    const firstPart = token.slice(0, 5);
    const lastPart = token.slice(-5);
    return `${firstPart}**${lastPart}`;
  } else {
    const middleIndex = Math.floor(token.length / 2);
    const firstPart = token.slice(0, middleIndex);
    const lastPart = token.slice(middleIndex);
    return `${firstPart}**${lastPart}`;
  }
};

export const maskEmail = (email) => {
  if (!email) return "you****@email.com";
  const [username, domain] = email.split("@");
  return `${username.substring(0, 2)}****@${domain}`;
};
export const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};
export const maskDigits = (num) => {
  const str = String(num);
  return "****" + str.slice(-4);
};
export const getLocalStorage = (key, defaultValue) => {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Failed to save ${key} to localStorage`, e);
  }
};
export const handleKeyDown = (event) => {
  const allowedKeys = [
    "Backspace",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight",
    "ArrowLeft",
    "Tab",
  ];

  // Allow digits and allowed navigation keys
  if (/[0-9]/.test(event.key) || allowedKeys.includes(event.key)) {
    return;
  }

  if (event.key === ".") {
    // Only allow one decimal point
    if (event.target.value.includes(".")) {
      event.preventDefault();
    }
    return;
  }

  // Prevent everything else
  event.preventDefault();
};
