'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
  allowMultiple?: boolean;
}

export default function FAQ({
  items,
  className = '',
  allowMultiple = false,
}: FAQProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  function toggle(index: number) {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndices((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  }

  function isOpen(index: number) {
    return openIndices.includes(index);
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, i) => {
        const open = isOpen(i);

        return (
          <motion.div
            key={i}
            initial={false}
            animate={{
              borderColor: open
                ? 'rgba(255, 107, 0, 0.3)'
                : 'rgba(38, 38, 38, 1)',
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl border border-border bg-background-card/80 backdrop-blur-xl"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-border/30"
            >
              <span className="text-lg font-medium text-text-primary pr-4">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                {open ? (
                  <Minus className="h-5 w-5 text-accent-primary" />
                ) : (
                  <Plus className="h-5 w-5 text-accent-primary" />
                )}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.25, delay: 0.1 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.2 },
                    },
                  }}
                >
                  <div className="px-6 pb-5 text-text-secondary leading-relaxed border-t border-border/50 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
