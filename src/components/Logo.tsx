import React from 'react';
import { Plane } from 'lucide-react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, iconOnly = false }) => {
  return (
    <div className={cn("flex items-center gap-2 cursor-pointer", className)}>
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
         <span className="text-white font-bold text-xl leading-none italic">H</span>
         <div className="absolute -right-1 -top-1">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
         </div>
         {/* Minimal wings effect */}
         <div className="absolute -left-1 bottom-1 w-2 h-0.5 bg-accent/60 -rotate-45" />
         <div className="absolute -left-1.5 bottom-2 w-1.5 h-0.5 bg-accent/40 -rotate-45" />
      </div>
      {!iconOnly && (
        <span className="text-xl font-bold tracking-tight text-primary">
          Hy<span className="text-accent">Pilot</span>
        </span>
      )}
    </div>
  );
};
