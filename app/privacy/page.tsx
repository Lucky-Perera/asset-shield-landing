export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
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
                <dt className="text-sm font-semibold text-muted-foreground">Email</dt>
                <dd className="mt-1">
                  <a href="mailto:privacy@autochatic.com" className="text-primary hover:underline">
                    privacy@autochatic.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2 className="mb-4 mt-8 text-2xl font-bold">1. No Sensitive Data Collected</h2>
            <p className="leading-relaxed text-muted-foreground">
              Asset Shield does not collect any sensitive personal data such as health information, political opinions,
              religious beliefs, sexual orientation, biometric data, or similar. The App only processes basic account
              and usage information necessary to provide its language-learning features.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">2. Information We Collect</h2>
            <p className="leading-relaxed text-muted-foreground">
              We may collect the following data when you use the App:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Account data:</strong> Email address and authentication information (via Apple ID, Google, or
                email sign-in).
              </li>
              <li>
                <strong>Usage data:</strong> Interactions within the App (e.g., practiced words, progress).
              </li>
              <li>
                <strong>Device data:</strong> Basic technical information such as device model, operating system, and
                anonymous analytics for performance improvement.
              </li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold">3. Purpose of Processing</h2>
            <p className="leading-relaxed text-muted-foreground">We process your data only to:</p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>Authenticate your account and allow you to access your personalized word lists;</li>
              <li>Save and synchronize your learning progress;</li>
              <li>Provide support and respond to user requests;</li>
              <li>Improve the App's functionality and user experience.</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold">4. Legal Basis for Processing (GDPR)</h2>
            <p className="leading-relaxed text-muted-foreground">
              Our processing of your personal data is based solely on your consent (Article 6(1)(a) GDPR). By signing up
              and using Asset Shield, you consent to this processing. You may withdraw your consent at any time by deleting
              your account or contacting us at privacy@autochatic.com.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">5. Data Retention</h2>
            <p className="leading-relaxed text-muted-foreground">
              We retain your personal data for a maximum of two (2) years from your last activity on the App. After that
              period, all personal data is securely deleted or anonymized.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">6. Data Sharing</h2>
            <p className="leading-relaxed text-muted-foreground">
              We do not sell, rent, or trade your data. Your data may be shared only with:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                Cloud service providers necessary for authentication and storage (e.g., Apple iCloud, Google Firebase),
                under strict data-processing agreements;
              </li>
              <li>Authorities, if required by law.</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold">7. International Transfers</h2>
            <p className="leading-relaxed text-muted-foreground">
              If data is transferred outside the European Union, we ensure adequate safeguards in line with GDPR
              requirements (e.g., Standard Contractual Clauses).
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">8. Your Rights</h2>
            <p className="leading-relaxed text-muted-foreground">
              You have the right to access your data, correct inaccurate data, request deletion ("right to be
              forgotten"), withdraw consent, and lodge a complaint with the CNIL (Commission Nationale de l'Informatique
              et des Libertés). To exercise these rights, email privacy@autochatic.com.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">9. Security</h2>
            <p className="leading-relaxed text-muted-foreground">
              We apply appropriate technical and organizational measures to protect your data against unauthorized
              access or misuse. However, no online system can be guaranteed 100% secure.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">10. Children's Privacy</h2>
            <p className="leading-relaxed text-muted-foreground">
              Asset Shield is not intended for children under 13 years of age (or 16 where applicable). We do not knowingly
              collect data from minors.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">11. Updates</h2>
            <p className="leading-relaxed text-muted-foreground">
              We may update this Privacy Policy to reflect new features or legal requirements. Any changes will be
              posted in the App and on our official website with the updated date.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold">12. Contact</h2>
            <p className="leading-relaxed text-muted-foreground">
              Autochatic SAS
              <br />
              25 Allée Rose Dieng-Kuntz
              <br />
              75019 Paris, France
              <br />
              Email:{" "}
              <a href="mailto:privacy@autochatic.com" className="text-primary hover:underline">
                privacy@autochatic.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
