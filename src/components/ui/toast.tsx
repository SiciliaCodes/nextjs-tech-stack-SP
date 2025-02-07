// components/ui/toast.tsx
import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext, useState, ReactNode } from "react";

interface ToastProps {
  title: string;
  description: string;
}

interface ToastContextType {
  toast: (options: ToastProps) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function Toast({ title, description }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="fixed bottom-4 right-4 bg-primary text-white px-4 py-3 rounded-lg shadow-md z-50"
    >
      <p className="font-semibold">{title}</p>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = (options: ToastProps) => {
    setToast(options);
    setTimeout(() => setToast(null), 3000); // Hide after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
      <AnimatePresence>
        {toast && <Toast title={toast.title} description={toast.description} />}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}