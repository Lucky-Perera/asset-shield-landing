export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
          <p className="mb-8 text-muted-foreground">Last updated: October 13, 2025</p>

          <div className="mb-8 rounded-lg border border-border bg-card p-6">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-muted-foreground">Company</dt>
                <dd className="mt-1">Autochatic SAS</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-muted-foreground">SIRET Number</dt>
                <dd className="mt-1 font-mono">842 111 833 00021</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-semibold text-muted-foreground">Address</dt>
                <dd className="mt-1">25 Allée Rose Dieng-Kuntz, 75019 Paris, France</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-muted-foreground">Contact</dt>
                <dd className="mt-1">
                  <a href="mailto:support@autochatic.com" className="text-primary hover:underline">
                    support@autochatic.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="mb-4 mt-8 text-2xl font-bold">1. Eligibility and Account</h2>
            <p className="leading-relaxed text-muted-foreground">
              You must be at least 13 years old (or 16 where required by local law) to use Asset Shield. Sign-in is
              mandatory. You must register and maintain a valid account using an email address or third-party
              authentication (Apple, Google, etc.). You are responsible for safeguarding your login credentials and for
              all activity under your account.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">2. Purpose of the App</h2>
            <p className="leading-relaxed text-muted-foreground">
              Asset Shield helps users practice and expand their French vocabulary through exercises, word lists, and
              interactive tools.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">3. Plans and Access Limits</h2>
            <p className="leading-relaxed text-muted-foreground">Asset Shield offers three tiers of service:</p>
            <div className="my-6 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-3 text-left font-semibold">Tier</th>
                    <th className="p-3 text-left font-semibold">Description</th>
                    <th className="p-3 text-left font-semibold">Access</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="p-3">Free</td>
                    <td className="p-3">Limited vocabulary practice</td>
                    <td className="p-3">Up to 25 words</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Premium Monthly</td>
                    <td className="p-3">Full access, billed monthly</td>
                    <td className="p-3">Unlimited words & advanced features</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Premium Annual</td>
                    <td className="p-3">Full access, billed yearly</td>
                    <td className="p-3">Unlimited words & advanced features at discounted rate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mb-4 mt-8 text-2xl font-bold">4. Subscriptions, Billing, and Cancellation</h2>
            <p className="leading-relaxed text-muted-foreground">
              Subscriptions are managed via the App Store or Google Play Store. Payments are charged to your account at
              confirmation of purchase. Auto-renewal: subscriptions renew automatically unless cancelled at least 24
              hours before the end of the current period. You can manage or cancel your subscription anytime through
              your store account settings. Refunds are handled according to Apple or Google policies, depending on where
              you purchased.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">5. User Responsibilities</h2>
            <p className="leading-relaxed text-muted-foreground">
              You agree not to share, resell, or exploit the App's content commercially; reverse-engineer or modify the
              App; or use the App unlawfully.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">6. Intellectual Property</h2>
            <p className="leading-relaxed text-muted-foreground">
              All content, code, and design within Asset Shield are the exclusive property of Autochatic SAS or its
              licensors. You receive a limited, non-transferable, revocable license to use the App for personal,
              non-commercial purposes.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">7. Termination</h2>
            <p className="leading-relaxed text-muted-foreground">
              We may suspend or terminate access to your account if you breach these Terms or misuse the App. You may
              stop using the App at any time by deleting your account.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">8. Disclaimer of Warranties</h2>
            <p className="leading-relaxed text-muted-foreground">
              Asset Shield is provided "as is". We make no warranties about uninterrupted or error-free service or about the
              accuracy of vocabulary or translations.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">9. Limitation of Liability</h2>
            <p className="leading-relaxed text-muted-foreground">
              To the maximum extent permitted by law, Autochatic SAS shall not be liable for any indirect, incidental,
              or consequential damages arising from your use of the App.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">10. Data Protection and Privacy</h2>
            <p className="leading-relaxed text-muted-foreground">
              Our handling of your data is governed by our Privacy Policy, available in the App and at{" "}
              <a href="/privacy" className="text-primary hover:underline">
                https://autochatic.com/privacy
              </a>
              . We comply with the EU GDPR and French data-protection regulations (CNIL).
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">11. Changes to These Terms</h2>
            <p className="leading-relaxed text-muted-foreground">
              We may modify these Terms at any time. The latest version will be available within the App. Continued use
              after changes constitutes acceptance.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">12. Governing Law and Jurisdiction</h2>
            <p className="leading-relaxed text-muted-foreground">
              These Terms are governed by French law. Any dispute shall be subject to the exclusive jurisdiction of the
              courts of Paris, France.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">13. Contact</h2>
            <p className="leading-relaxed text-muted-foreground">
              For questions about these Terms or your account, please contact:
              <br />
              Autochatic SAS
              <br />
              25 Allée Rose Dieng-Kuntz
              <br />
              75019 Paris, France
              <br />
              Email:{" "}
              <a href="mailto:support@autochatic.com" className="text-primary hover:underline">
                support@autochatic.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
