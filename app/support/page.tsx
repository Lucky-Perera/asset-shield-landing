import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  MessageCircle,
  Book,
  HelpCircle,
  Bug,
  Star,
  Trash2,
} from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Need Help?
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            We're here to help you make the most of your French learning journey
            with Asset Shield
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* FAQ */}
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find quick answers to common questions about using Asset Shield
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">How do I reset my progress?</h4>
                  <p className="text-sm text-muted-foreground">
                    Go to Settings → Account → Reset Progress to start fresh.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Can I use Asset Shield offline?</h4>
                  <p className="text-sm text-muted-foreground">
                    Some features work offline, but AI-powered features require
                    an internet connection.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">
                    How do I change my subscription?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Manage your subscription through your App Store or Google
                    Play account settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>
                Get personalized help from our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full" asChild>
                  <a href="mailto:support@lexigram.ai">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Support
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Account Deletion */}
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Delete Account</CardTitle>
              <CardDescription>
                Permanently delete your Asset Shield account and data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="destructive" className="w-full" asChild>
                  <Link href="/support/delete-account">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Account
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Learn about our account deletion process and data retention
                  policy.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bug Reports */}
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Bug className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Report a Bug</CardTitle>
              <CardDescription>
                Help us improve Asset Shield by reporting issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:bugs@lexigram.ai?subject=Bug Report">
                    <Bug className="mr-2 h-4 w-4" />
                    Report Bug
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Please include device info and steps to reproduce the issue.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature Requests */}
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Feature Requests</CardTitle>
              <CardDescription>
                Suggest new features to make Asset Shield even better
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:feedback@lexigram.ai?subject=Feature Request">
                    <Star className="mr-2 h-4 w-4" />
                    Request Feature
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  We love hearing your ideas for improving the learning
                  experience.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Learning Resources */}
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Learning Tips</CardTitle>
              <CardDescription>
                Get the most out of your French learning experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Study Daily</h4>
                  <p className="text-sm text-muted-foreground">
                    Consistent daily practice, even 10 minutes, is more
                    effective than long sessions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Use Spaced Repetition</h4>
                  <p className="text-sm text-muted-foreground">
                    Review words at increasing intervals to strengthen long-term
                    memory.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community */}
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Community</CardTitle>
              <CardDescription>
                Connect with other French learners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Join our community forums and social media groups to share
                  tips, ask questions, and celebrate your progress with fellow
                  learners.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:community@lexigram.ai">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Join Community
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Still Need Help?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our support team is always ready to assist you
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="mailto:support@lexigram.ai">
                <Mail className="mr-2 h-5 w-5" />
                Contact Support
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
