import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import isaacPhoto from "@/assets/isaac-coach.jpg";

export const CoachSection = () => {
  const coachingPoints = [
    {
      title: "Clarity first",
      description: "One End sentence that feels natural and true to your vision.",
    },
    {
      title: "Mind control",
      description: "Learn to direct your attention and energy where it matters.",
    },
    {
      title: "Identity awakening",
      description: "Discover your God nature and break free from limiting beliefs.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple to dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] via-[#1a1a2e] to-[#0f3460]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            Specialty: Law of Assumption & Mind Control
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Meet Your Coach — <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Isaac Adegbe</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Coach info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Hi, I'm Isaac.</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I coach through the lens of <span className="text-primary font-semibold">the Law of Assumption</span>—teaching you to take full responsibility for your reality and awaken to your true nature. I focus on <span className="text-primary font-semibold">mind control</span>, directing attention, and the understanding that imagination creates reality. Expect honest guidance, clarity, and steps you'll actually follow.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-foreground">How we'll work on the call:</h3>
            <ul className="space-y-4 mb-6">
              {coachingPoints.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">{point.title}:</span>{" "}
                    <span className="text-muted-foreground">{point.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Button 
              size="lg" 
              className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105 transition-all"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book with Isaac — Free 30 Minutes
            </Button>
          </div>

          {/* Coach photo */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_rgba(0,229,255,0.2)]">
              <img 
                src={isaacPhoto} 
                alt="Isaac Adegbe - Law of Assumption & Mind Control Coach" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
