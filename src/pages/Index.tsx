import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bot, Brain, Cpu, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in">
            Transforming Ideas into
            <br />
            Intelligent Applications
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto fade-in">
            We specialize in developing cutting-edge AI applications that help businesses innovate and grow.
          </p>
          <div className="space-x-4 fade-in">
            <Button size="lg" variant="secondary">Get Started</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AppVault?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "AI-Powered",
                description: "Cutting-edge artificial intelligence solutions"
              },
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                title: "Innovation",
                description: "Constantly pushing technological boundaries"
              },
              {
                icon: <Bot className="h-8 w-8 text-primary" />,
                title: "Automation",
                description: "Streamline your business processes"
              },
              {
                icon: <Cpu className="h-8 w-8 text-primary" />,
                title: "Scalability",
                description: "Solutions that grow with your business"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "50+", label: "AI Apps Developed" },
              { number: "1M+", label: "Users Worldwide" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
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