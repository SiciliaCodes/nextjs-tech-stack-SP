import { createContext, useContext, useState, ReactNode } from "react";
import { Toast } from "@/components/ui/toast"; // Ensure this Toast component exists

interface ToastContextType {
  toast: (options: { title: string; description: string }) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<{ title: string; description: string } | null>(null);

  const toast = ({ title, description }: { title: string; description: string }) => {
    setMessage({ title, description });
    setTimeout(() => setMessage(null), 3000); // Auto-hide after 3 seconds
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {message && <Toast title={message.title} description={message.description} />}
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
