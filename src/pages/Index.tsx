import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Bot, Cpu, Phone, Shield, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 fade-in">
                AI-Powered
                <br />
                Mobile Apps
              </h1>
              <p className="text-xl text-primary/80 mb-8 max-w-2xl fade-in">
                We specialize in developing cutting-edge mobile AI applications that transform how users interact with technology.
              </p>
              <div className="space-x-4 fade-in">
                <Button size="lg" variant="secondary">Download Now</Button>
                <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary/10">
                  View Apps
                </Button>
              </div>
            </div>
            <div className="flex-1 relative fade-in">
              <img
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
                alt="Mobile App Demo"
                className="rounded-lg shadow-xl max-w-sm mx-auto transform -rotate-6"
              />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Mobile App Interface"
                className="rounded-lg shadow-xl max-w-xs absolute top-20 right-0 transform rotate-6 hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Mobile AI Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-8 w-8 text-primary" />,
                title: "Native Mobile",
                description: "Built specifically for iOS and Android devices"
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "AI-Powered",
                description: "Advanced machine learning on your mobile device"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Fast Performance",
                description: "Optimized for quick response times"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Secure",
                description: "Enterprise-grade security for your data"
              },
              {
                icon: <Bot className="h-8 w-8 text-primary" />,
                title: "Smart Assistant",
                description: "24/7 AI assistance in your pocket"
              },
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                title: "Offline Mode",
                description: "Full functionality without internet"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg bg-gradient-to-br from-card to-secondary/50 hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                <p className="text-primary/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "1M+", label: "Mobile App Downloads" },
              { number: "50+", label: "AI Mobile Apps" },
              { number: "99%", label: "User Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-primary/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
