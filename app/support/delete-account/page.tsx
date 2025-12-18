import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Trash2, Clock, Shield, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Delete Your Asset Shield Account
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            We're sorry to see you go. Follow the steps below to permanently
            delete your Asset Shield account and associated data.
          </p>
        </div>
      </section>

      {/* Account Deletion Steps */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mx-auto max-w-4xl">
          {/* Important Notice */}
          <Card className="mb-8 border-orange-200 bg-orange-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <CardTitle className="text-orange-900">
                  Important Notice
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-orange-800">
              <p className="mb-2">
                <strong>
                  Account deletion is permanent and cannot be undone.
                </strong>{" "}
                Once your account is deleted, you will lose access to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>All your learning progress and statistics</li>
                <li>Saved vocabulary words and personal notes</li>
                <li>Premium subscription benefits</li>
                <li>Account settings and preferences</li>
              </ul>
            </CardContent>
          </Card>

          {/* Steps to Delete Account */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Trash2 className="h-6 w-6 text-red-600" />
                <CardTitle>How to Delete Your Account</CardTitle>
              </div>
              <CardDescription>
                Follow these simple steps to request account deletion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Send Deletion Request
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Send an email to our support team from the email address
                      associated with your Asset Shield account.
                    </p>
                    <Button asChild>
                      <a href="mailto:support@lexigram.ai?subject=Account Deletion Request&body=I would like to delete my Asset Shield account. Please confirm the deletion of my account and all associated data.">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Deletion Request
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Confirmation & Verification
                    </h3>
                    <p className="text-muted-foreground">
                      Our support team will confirm your identity and send you a
                      confirmation email within 24-48 hours. This ensures
                      account security and prevents unauthorized deletions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Account Deactivation</h3>
                    <p className="text-muted-foreground">
                      Once confirmed, your account will be immediately
                      deactivated and you will no longer be able to access
                      Asset Shield services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Data Deletion</h3>
                    <p className="text-muted-foreground">
                      All your personal data will be permanently deleted
                      according to our retention policy outlined below.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention Policy */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <CardTitle>Data Retention & Deletion Policy</CardTitle>
              </div>
              <CardDescription>
                What happens to your data during the deletion process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">
                    Data That Will Be Deleted
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                    <li>Personal information (name, email, profile details)</li>
                    <li>Learning progress and statistics</li>
                    <li>Vocabulary words and personal notes</li>
                    <li>Account settings and preferences</li>
                    <li>App usage analytics tied to your account</li>
                    <li>Subscription and payment history</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">
                    Data Retention Periods
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium">
                          Standard Deletion: 90 Days
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Deactivated account data is permanently deleted after
                          90 days as part of our standard data retention policy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Trash2 className="h-4 w-4 text-red-600 mt-1" />
                      <div>
                        <p className="font-medium">
                          Immediate Deletion: Upon Request
                        </p>
                        <p className="text-sm text-muted-foreground">
                          You can request immediate deletion of your data by
                          explicitly mentioning this in your deletion request
                          email.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Legal & Safety Exceptions
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Some data may be retained longer if required by law, for
                    fraud prevention, or to resolve disputes. This includes
                    anonymized transaction records and legal compliance data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alternatives */}
          <Card>
            <CardHeader>
              <CardTitle>Before You Delete Your Account</CardTitle>
              <CardDescription>
                Consider these alternatives that might address your concerns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Temporarily Deactivate</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Take a break without losing your progress. Contact support
                    to temporarily deactivate your account.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:support@lexigram.ai?subject=Temporary Account Deactivation">
                      Request Deactivation
                    </a>
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Update Preferences</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Adjust notification settings, privacy options, or learning
                    preferences in the app settings.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/support">Get Help</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Support */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Need Help or Have Questions?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our support team is here to assist you with the account deletion
            process
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="mailto:support@lexigram.ai?subject=Account Deletion Support">
                <Mail className="mr-2 h-5 w-5" />
                Contact Support
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/support">Back to Support</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
