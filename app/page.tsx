import { Button } from "@/components/ui/button";
import { DownloadButtons } from "@/components/download-buttons";
import { FeatureCard } from "@/components/feature-card";
import { PricingCard } from "@/components/pricing-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { ScreenshotsSection } from "@/components/screenshots-section";
import { Sparkles, Book, Trophy, Puzzle, Target, Zap } from "lucide-react";
import AppleIcon from "@/components/apple-icon"; // Import Apple icon component

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Master French Vocabulary with AI
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Learn French smarter with personalized word practice, interactive
              quizzes, and adaptive learning powered by artificial intelligence
            </p>
            <div className="mt-8">
              <DownloadButtons />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              <img
                src="/lexigram-ss-apple/Screen 1.png"
                alt="Asset Shield App Interface"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/5 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-t border-border bg-muted/30 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Why Choose Asset Shield?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Sparkles}
              title="AI-Powered Learning"
              description="ChatGPT generates personalized content, practice phrases, and visual aids for every word"
            />
            <FeatureCard
              icon={Book}
              title="Smart Vocabulary System"
              description="Add words manually or import entire categories. Get 10 starter words matched to your CEFR level"
            />
            <FeatureCard
              icon={Trophy}
              title="Interactive Quizzes"
              description="Test your knowledge with adaptive quizzes that adjust to your learning level"
            />
            <FeatureCard
              icon={Target}
              title="Practice Phrases"
              description="Master words in context with fill-in-the-blank and listening comprehension exercises"
            />
            <FeatureCard
              icon={Puzzle}
              title="Crossword Puzzles"
              description="Solve AI-generated crossword puzzles with 10-20 words from your vocabulary"
            />
            <FeatureCard
              icon={Zap}
              title="Spaced Repetition"
              description="Never forget a word with our intelligent scheduling system based on your performance"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                <img
                  src="/learning-interface.png"
                  alt="Learning Interface"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Start Learning in 3 Simple Steps
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">
                      Sign up and choose your CEFR level
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Create your account and select your current French
                      proficiency level (A1-C2)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">
                      Add words or import curated word categories
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Build your vocabulary list manually or choose from
                      pre-made categories
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">
                      Practice with quizzes, phrases, and puzzles
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Master your vocabulary through interactive exercises and
                      AI-generated content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="border-t border-border bg-muted/30 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Choose Your Plan
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <PricingCard
              title="Free"
              price="€0"
              description="Perfect for getting started"
              features={[
                "Up to 25 words",
                "Basic vocabulary practice",
                "Quiz mode",
                "Practice phrases",
              ]}
              buttonText="Get Started Free"
              buttonVariant="outline"
            />
            <PricingCard
              title="Monthly Premium"
              price="€7.99"
              description="Full access, billed monthly"
              features={[
                "Unlimited words",
                "All learning modes",
                "AI-generated content",
                "Crossword puzzles",
                "Priority support",
              ]}
              buttonText="Subscribe Monthly"
              buttonVariant="default"
              productId="lexigram_monthly_premium"
            />
            <PricingCard
              title="Annual Premium"
              price="€49.99"
              description="Best value - Save 33%"
              features={[
                "Everything in Monthly",
                "Best value",
                "Family sharing enabled",
                "Annual billing",
                "Priority support",
              ]}
              buttonText="Subscribe Annually"
              buttonVariant="default"
              popular
              productId="lexigram_annual_premium"
            />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <ScreenshotsSection />

      {/* Testimonials Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              What Learners Say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard
              name="Sophie Martin"
              role="Language Student"
              content="Asset Shield has completely transformed how I learn French vocabulary. The AI-generated content is incredibly helpful and the spaced repetition keeps me on track!"
              avatar="SM"
            />
            <TestimonialCard
              name="Thomas Dubois"
              role="Business Professional"
              content="As someone learning French for work, I needed something efficient. The crossword puzzles and practice phrases make learning fun and effective."
              avatar="TD"
            />
            <TestimonialCard
              name="Emma Laurent"
              role="DELF Candidate"
              content="The CEFR-level matching is perfect for exam preparation. I've expanded my vocabulary significantly and feel much more confident now."
              avatar="EL"
            />
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-12 text-center text-primary-foreground">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to Master French?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed opacity-90">
              Download Asset Shield today and start your language learning journey
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Button size="lg" variant="secondary" asChild className="gap-2">
                <a href="#">
                  <AppleIcon className="h-5 w-5" />
                  Download on App Store
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild className="gap-2">
                <a href="#">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Get it on Google Play
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-75">
              Available on iOS and Android
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
