import { Sparkles, Brain, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">About Asset Shield</h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Revolutionizing French vocabulary learning with artificial intelligence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Mission</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Asset Shield is developed by Autochatic SAS, a Paris-based company dedicated to making language learning more
              effective and engaging. We combine cutting-edge AI technology with proven language learning methodologies
              to help learners master French vocabulary naturally and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Powered by AI</h2>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Asset Shield uses ChatGPT to generate personalized learning content including word definitions, example
              sentences, images, and practice phrases tailored to your CEFR level (A1-C2).
            </p>
            <ul className="space-y-3">
              {[
                "Automatic word content generation",
                "CEFR-level appropriate practice phrases",
                "AI-generated images for visual learning",
                "Intelligent crossword puzzle creation",
                "Adaptive difficulty adjustment",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Methodology Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Science-Backed Learning</h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our spaced repetition system ensures optimal retention by scheduling word reviews based on your
              performance. Words you find difficult appear more frequently, while mastered words are reviewed at
              increasing intervals.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Company Information</h2>
            <Card>
              <CardContent className="p-6">
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground">Company</dt>
                    <dd className="mt-1 text-lg">Autochatic SAS</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground">SIRET Number</dt>
                    <dd className="mt-1 text-lg font-mono">842 111 833 00021</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground">Address</dt>
                    <dd className="mt-1 text-lg">25 Allée Rose Dieng-Kuntz, 75019 Paris, France</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground">Contact</dt>
                    <dd className="mt-1">
                      <a href="mailto:support@autochatic.com" className="text-lg text-primary hover:underline">
                        support@autochatic.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Built with Passion in Paris</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our team is dedicated to creating the best French learning experience possible, combining expertise in
              language education, AI technology, and user experience design.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
