"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageModalProps {
  image: {
    src: string;
    alt: string;
  };
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-contain"
            unoptimized={image.src.startsWith("http")}
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-medium text-slate-900">{image.alt}</h3>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
