"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Send, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function EmailButton() {
  const [isOpen, setIsOpen] = useState(false);
  const companyEmail = "inquiry@dolphinlasermachine.com";

  const handleEmailClick = () => {
    // Open default email client with pre-filled recipient
    window.location.href = `mailto:${companyEmail}?subject=Inquiry about Dolphin Laser Products`;

    // Show toast notification
    toast.success("Email client opened", {
      description: "Compose your message to our team.",
    });

    // Close the popup if it's open
    setIsOpen(false);
  };

  return (
    <>
      {/* Main floating button */}
      <motion.button
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${
          !isOpen &&
          "from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-blue-500/20"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact via Email"
      >
        {!isOpen && <Mail size={20} />}
      </motion.button>

      {/* Popup card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className=" w-72 overflow-hidden rounded-xl bg-white shadow-2xl"
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Email Us</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white"
                  aria-label="Close email popup"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="text-sm text-blue-100">
                We'll respond within 24 hours
              </p>
            </div>

            <div className="p-4">
              <p className="mb-4 text-sm text-gray-600">
                Have questions about our products? Send us an email and our team
                will get back to you as soon as possible.
              </p>

              <div className="mb-4 flex items-center gap-2 rounded-md bg-blue-50 p-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-800">
                  {companyEmail}
                </span>
              </div>

              <button
                onClick={handleEmailClick}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 py-3 text-center text-sm font-medium text-white transition-all hover:from-blue-600 hover:to-indigo-700"
              >
                <Send className="h-4 w-4" />
                Compose Email
              </button>

              {/* Quick options */}
              <div className="mt-4">
                <p className="mb-2 text-xs font-medium text-gray-500">
                  QUICK INQUIRIES
                </p>
                {[
                  "Product Information",
                  "Request Quote",
                  "Technical Support",
                ].map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      window.location.href = `mailto:${companyEmail}?subject=${option} - Dolphin Laser Inquiry`;
                      toast.success("Email client opened", {
                        description: `Composing email for ${option.toLowerCase()}.`,
                      });
                      setIsOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-blue-50"
                  >
                    <span>{option}</span>
                    <ArrowRight className="h-3 w-3 text-blue-500" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
