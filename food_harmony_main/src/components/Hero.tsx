import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

// Small slideshow image set (external images so we don't need extra local files)
const imageSources = [
  "https://images.unsplash.com/photo-1546069901-eacef0df6022?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1600&q=80&auto=format&fit=crop",
];

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % imageSources.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* <img id="site-logo" src="./public/logo.png" alt="Food MED logo" /> */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary">Food MED</span>
              <br />
              Your Personal Food Safety Analyzer
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Upload your meal, get instant analysis on food combinations that
              could harm you based on your medical conditions, religion, and
              lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center">
              <Button
                size="lg"
                onClick={onGetStarted}
                className="bg-gradient-hero hover:opacity-90 transition-all shadow-strong text-lg px-8"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Rating control (replaces Donate button) */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const starIndex = i + 1;
                    return (
                      <button
                        key={starIndex}
                        type="button"
                        aria-label={`Rate ${starIndex} star${
                          starIndex > 1 ? "s" : ""
                        }`}
                        onClick={() => setRating(starIndex)}
                        className={`transition-colors focus:outline-none ${
                          rating >= starIndex
                            ? "text-amber-400"
                            : "text-muted-foreground hover:text-amber-300"
                        }`}
                      >
                        {rating >= starIndex ? (
                          // Filled star (solid) using inline SVG so we can use fill-current
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 fill-current"
                            aria-hidden="true"
                          >
                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.166L12 18.897l-7.336 3.866 1.402-8.166L.132 9.21l8.2-1.192L12 .587z" />
                          </svg>
                        ) : (
                          <Star className="h-6 w-6" />
                        )}
                      </button>
                    );
                  })}
                </div>
                <div className="text-sm text-muted-foreground">
                  {rating > 0 ? `Thanks for rating ${rating}/5` : "Rate us"}
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20" />
            <img
              src={imageSources[index]}
              alt="Healthy colorful food in a bowl"
              className="relative rounded-3xl shadow-strong w-full h-auto animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
