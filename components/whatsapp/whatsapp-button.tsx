"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MessageSquare, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Company WhatsApp number - replace with your actual number
  const whatsappNumber = "+919723738044";

  // Pre-defined query options
  const queryOptions = [
    {
      id: "pricing",
      label: "Pricing Information",
      message:
        "Hello! I'd like to know more about your pricing for laser machines.",
    },
    {
      id: "products",
      label: "Product Details",
      message:
        "Hello! I'm interested in learning more about your laser machine specifications.",
    },
    {
      id: "delivery",
      label: "Delivery Timeline",
      message:
        "Hello! I'd like to know about your delivery timelines for laser machines.",
    },
    {
      id: "support",
      label: "Technical Support",
      message: "Hello! I need technical support for my laser machine.",
    },
    {
      id: "custom",
      label: "Other Query",
      message: "Hello! I have a question about your laser machines.",
    },
  ];

  const openWhatsApp = (message = "") => {
    const text = encodeURIComponent(
      message || "Hello! I'm interested in your laser machines."
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    const option = queryOptions.find((opt) => opt.id === optionId);
    if (option) {
      openWhatsApp(option.message);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.button
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <div className="flex items-center justify-center">
            <Image
              src="/whatsapp-icon.svg"
              alt="WhatsApp"
              width={22}
              height={22}
            />
          </div>
        )}
      </motion.button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Chat with us on WhatsApp</DialogTitle>
            <DialogDescription>
              Select a topic to start your conversation or choose "Other Query"
              for custom questions.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3 py-4">
            {queryOptions.map((option) => (
              <Button
                key={option.id}
                variant={"outline"}
                className={`justify-start text-left border-2 ${
                  selectedOption === option.id ? " " : "hover:bg-blue-100"
                }`}
                onClick={() => handleOptionSelect(option.id)}
              >
                {option.label}
              </Button>
            ))}
          </div>

          <DialogFooter className="sm:justify-between">
            <Button
              variant="ghost"
              className="bg-blue-200"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600"
              onClick={() => {
                openWhatsApp();
                setIsOpen(false);
              }}
            >
              Chat Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* Popup card */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className=" fixed bottom-4 right-4  z-50 w-72 overflow-hidden rounded-xl bg-white shadow-2xl"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-lg font-semibold">WhatsApp Chat</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white"
                  aria-label="Close WhatsApp popup"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="text-sm text-green-100">
                Quick responses during business hours
              </p>
            </div>

            <div className="p-4">
              <p className="mb-4 text-sm text-gray-600">
                Select a topic to start your conversation or choose "Other
                Query" for custom questions.
              </p>

              <button
                onClick={() => {
                  openWhatsApp();
                  setIsOpen(false);
                }}
                className="mb-4 flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-green-500 to-green-600 py-3 text-center text-sm font-medium text-white transition-all hover:from-green-600 hover:to-green-700"
              >
                <MessageSquare className="h-4 w-4" />
                Start Chat Now
              </button>

              <div>
                <p className="mb-2 text-xs font-medium text-gray-500">
                  SELECT A TOPIC
                </p>
                <div className="space-y-1">
                  {queryOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        openWhatsApp(option.message);
                        setIsOpen(false);
                      }}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-green-50"
                    >
                      <span>{option.label}</span>
                      <ArrowRight className="h-3 w-3 text-green-500" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
}
