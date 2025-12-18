import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <img
                  src="/App_Logo.png"
                  alt="Asset Shield Logo"
                  className="h-8 w-8 rounded-lg object-contain"
                />
              </div>
              <span className="text-xl font-bold">Asset Shield</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-Powered French Learning
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Available on iOS and Android
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:support@autochatic.com"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                support@autochatic.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>© 2025 Autochatic SAS. All rights reserved.</p>
            <p>
              Powered by{" "}
              <a
                href="https://zeroonetech.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                zeroonetech.xyz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
