'use client'

import React, { useState, useRef } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBriefcase,
  IconFileText,
  IconMail,
  IconLayoutNavbarCollapse,
} from "@tabler/icons-react";
import { Logo } from '@/components/Logo';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export function FloatingNavigation() {

  const baseLinks = [
    {
      title: "MyBuilder.ca",
      icon: (
        <Logo size="sm" className="text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Services",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },
    {
      title: "Case Studies",
      icon: (
        <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/case-studies",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
  ];

  const allLinks = baseLinks;

  // Custom FloatingDock component that handles onClick events
  const CustomFloatingDock = ({ items, ...props }: any) => {
    return (
      <>
        <FloatingDockDesktop items={items} {...props} />
        <FloatingDockMobile items={items} {...props} />
      </>
    );
  };

  const FloatingDockDesktop = ({ items, className }: any) => {
    const mouseX = useMotionValue(Infinity);
    
    return (
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`mx-auto hidden h-14 sm:h-16 items-end gap-2 sm:gap-4 rounded-2xl bg-white/80 backdrop-blur-md px-3 sm:px-4 pb-2 sm:pb-3 md:flex shadow-lg border border-gray-200/50 ${className}`}
      >
        {items.map((item: any) => (
          <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </motion.div>
    );
  };

  const FloatingDockMobile = ({ items, className }: any) => {
    const [open, setOpen] = useState(false);
    
    return (
      <div className={`relative block md:hidden ${className}`}>
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2 max-h-80 overflow-y-auto"
            >
              {items.map((item: any, idx: number) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <button
                    onClick={() => {
                      if (item.onClick) {
                        item.onClick();
                      } else if (item.href !== "#") {
                        window.location.href = item.href;
                      }
                      setOpen(false);
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/50 active:scale-95 transition-transform"
                  >
                    <div className="h-5 w-5">{item.icon}</div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/50 active:scale-95 transition-transform"
        >
          <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
        </button>
      </div>
    );
  };

  function IconContainer({
    mouseX,
    title,
    icon,
    href,
    onClick,
  }: {
    mouseX: any;
    title: string;
    icon: React.ReactNode;
    href: string;
    onClick?: () => void;
  }) {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const distance = useTransform(mouseX, (val: number) => {
      const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

    const width = useSpring(widthTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
    const height = useSpring(heightTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
    const widthIcon = useSpring(widthTransformIcon, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });
    const heightIcon = useSpring(heightTransformIcon, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });

    const handleClick = () => {
      if (onClick) {
        onClick();
      } else if (href !== "#") {
        window.location.href = href;
      }
    };

    return (
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
        className="relative flex aspect-square items-center justify-center rounded-full bg-white/60 backdrop-blur-sm cursor-pointer hover:bg-white/80 transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-white/90 backdrop-blur-md px-2 py-0.5 text-xs whitespace-pre text-neutral-700 shadow-lg"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <CustomFloatingDock
        items={allLinks}
        mobileClassName="translate-y-0"
      />
    </div>
  );
}
