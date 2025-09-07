"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconArrowRight } from "@tabler/icons-react";

interface ServiceCTAButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

export function ServiceCTAButton({ text, onClick, href, target, rel }: ServiceCTAButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      if (target === "_blank") {
        window.open(href, target, rel);
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="bg-white text-dark flex items-center space-x-2 px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-200"
      onClick={handleClick}
    >
      <span>{text}</span>
      <IconArrowRight className="h-5 w-5" />
    </HoverBorderGradient>
  );
}

