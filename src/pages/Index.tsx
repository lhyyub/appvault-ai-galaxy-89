import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
                We specialize in developing cutting-edge consumer AI applications that enhance your daily mobile experience.
              </p>
            </div>
            <div className="flex-1 relative fade-in">
              <img
                src="https://www.dropbox.com/scl/fi/3me0rm79iw7607hidnkqv/Recipe-View.png?rlkey=2mzi9mep5yv3s431u7jyu716e&st=h7sa5lwx&dl=1"
                alt="Mobile App Demo"
                className="rounded-lg shadow-xl max-w-sm mx-auto transform -rotate-6"
              />
              <img
                src="https://www.dropbox.com/scl/fi/8t8vvthzxbrvgeaaf0vpw/Screenshot-2024-12-26-at-5.36.29-PM.jpeg?rlkey=9r4tm1m83ru5hfs74ll26bh5r&st=d2i7e025&dl=1"
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
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Cool Features for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-8 w-8 text-primary" />,
                title: "Native Mobile",
                description: "Seamlessly works on your iOS and Android devices"
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "AI-Powered",
                description: "Smart features that make your life easier"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Lightning Fast",
                description: "Instant responses when you need them"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Private & Secure",
                description: "Your data stays on your device"
              },
              {
                icon: <Bot className="h-8 w-8 text-primary" />,
                title: "Smart Assistant",
                description: "Your personal AI helper, always ready"
              },
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                title: "Works Offline",
                description: "Use your apps anywhere, anytime"
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
              { number: "1M+", label: "Happy Users" },
              { number: "50+", label: "Cool AI Apps" },
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
