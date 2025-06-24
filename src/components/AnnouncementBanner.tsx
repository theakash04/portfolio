"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface AnnouncementBannerProps {
  title: string;
  description?: string;
  link?: string;
  linkText?: string;
  type?: "info" | "success" | "warning";
  dismissible?: boolean;
}

export default function AnnouncementBanner({
  title,
  description,
  link,
  linkText = "Check it out",
  type = "info",
  dismissible = true,
}: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const typeStyles = {
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200",
    success:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200",
  };

  const linkStyles = {
    info: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
    success:
      "text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300",
    warning:
      "text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`border rounded-lg p-4 ${typeStyles[type]} relative overflow-hidden mb-4`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          {dismissible && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          )}

          <motion.div className="flex items-start gap-3">
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">{title}</h3>
              {description && (
                <p className="text-sm opacity-90">{description}</p>
              )}

              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-sm font-medium mt-2 hover:underline ${linkStyles[type]}`}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5, duration: 0.3 },
                  }}
                  whileHover={{
                    x: 3,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {linkText}
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
