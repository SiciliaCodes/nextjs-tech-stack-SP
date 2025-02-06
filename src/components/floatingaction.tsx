import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Menu, X, Home, User, Code, BookOpen, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: User, label: 'About', href: '/about' },
  { icon: Code, label: 'Projects', href: '/projects' },
  { icon: BookOpen, label: 'Publications', href: '/publications' },
  { icon: Mail, label: 'Contact', href: '/contact' },
];

export const FloatingAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button after scrolling down 100px
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 100);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className="rounded-full"
                    onClick={scrollToTop}
                  >
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Scroll to top</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-16 right-0 space-y-2"
            >
              {menuItems.map((item) => (
                <TooltipProvider key={item.href}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full"
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          size="icon"
          className="rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};