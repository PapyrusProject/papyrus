"use client";
// COmponents
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

export function ModeToggle() {
  const { setTheme, resolvedTheme, theme } = useTheme();
  
  return (
    <div>
      <Button
      size='sm'
      variant='ghost'
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
}
