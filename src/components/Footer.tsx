import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary">AppVault</h3>
            <p className="mt-2 text-muted-foreground">
              Specializing in developing innovative AI applications that transform businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-foreground/80 hover:text-primary">Features</a></li>
              <li><a href="#apps" className="text-foreground/80 hover:text-primary">Our Apps</a></li>
              <li><a href="#about" className="text-foreground/80 hover:text-primary">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/80 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/80 hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/80 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AppVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};