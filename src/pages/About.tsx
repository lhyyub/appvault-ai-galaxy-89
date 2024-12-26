import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Building, Cpu, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 fade-in">
            About AppVault
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl fade-in">
            We're revolutionizing the mobile experience through AI-powered applications.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Our Team"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded by a team of mobile AI enthusiasts, AppVault has grown into a leading force in AI-powered mobile applications. We believe in making advanced AI technology accessible to everyone through their smartphones.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">Dedicated AI specialists</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Global Reach</h3>
                    <p className="text-sm text-muted-foreground">Serving users worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Cpu className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Innovation First</h3>
                    <p className="text-sm text-muted-foreground">Cutting-edge AI tech</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Trophy className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Award Winning</h3>
                    <p className="text-sm text-muted-foreground">Industry recognized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;