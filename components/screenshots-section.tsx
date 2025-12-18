"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, TabletSmartphone } from "lucide-react";

export function ScreenshotsSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<"ios" | "android">(
    "ios"
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            See Asset Shield in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the power of AI-driven French learning across all devices
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="flex gap-2 rounded-lg bg-muted p-1">
            <Button
              variant={selectedPlatform === "ios" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedPlatform("ios")}
              className="flex items-center gap-2"
            >
              <Smartphone className="h-4 w-4" />
              iPhone
            </Button>
            <Button
              variant={selectedPlatform === "android" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedPlatform("android")}
              className="flex items-center gap-2"
            >
              <TabletSmartphone className="h-4 w-4" />
              Android
            </Button>
          </div>
        </div>

        {/* Screenshots Display */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={`${selectedPlatform}-${num}`} className="shrink-0">
              <div className="relative w-64">
                <img
                  src={`/lexigram-ss-${selectedPlatform === "ios" ? "apple" : "android"
                    }/Screen ${num}.png`}
                  alt={`${selectedPlatform === "ios" ? "iPhone" : "Android"
                    } Screenshot ${num}`}
                  className="w-full h-auto rounded-2xl shadow-xl transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Platform Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {selectedPlatform === "ios"
              ? "Optimized for iPhone with native iOS design patterns"
              : "Designed for Android with Material Design principles"}
          </p>
        </div>
      </div>
    </section>
  );
}
