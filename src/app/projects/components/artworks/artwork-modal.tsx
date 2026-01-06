"use client";
import { useArtworkModal } from "@/store/use-artwork-modal";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const ArtworkModal = () => {
  const { isOpen, artwork, closeArtwork } = useArtworkModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeArtwork();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeArtwork]);

  if (!isOpen || !artwork) return null;

  return (
    <motion.div
      onClick={closeArtwork}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-2xl overflow-hidden inline-block" // Changed to inline-block
      >
        <motion.div className="relative">
          <motion.img
            src={artwork.thumbnail}
            alt="artwork"
            className="max-h-[85vh] w-auto max-w-[90vw] object-contain rounded-lg"
          />
          {artwork.content}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
