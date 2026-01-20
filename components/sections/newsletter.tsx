'use client';

import React from "react"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clapperboard, Check } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background border border-border rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Clapperboard className="w-8 h-8 text-primary" />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-4">Stay in the Loop</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get weekly updates on new releases, exclusive interviews, and curated movie recommendations delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-border bg-card text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 gap-2"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4" />
                    Subscribed
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>

            {subscribed && (
              <p className="text-sm text-primary mt-4">
                Welcome to the CineVerse community! Check your inbox for a confirmation.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
