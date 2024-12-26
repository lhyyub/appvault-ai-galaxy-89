import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">AppVault</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
            <a href="#apps" className="text-foreground/80 hover:text-primary transition-colors">Our Apps</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <Button>Contact Us</Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#features" className="block px-3 py-2 text-foreground/80 hover:text-primary">Features</a>
            <a href="#apps" className="block px-3 py-2 text-foreground/80 hover:text-primary">Our Apps</a>
            <a href="#about" className="block px-3 py-2 text-foreground/80 hover:text-primary">About</a>
            <Button className="w-full mt-2">Contact Us</Button>
          </div>
        </div>
      )}
    </nav>
  );
};