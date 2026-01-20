'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Film, LogOut, Plus, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cookies = document.cookie;
    setIsLoggedIn(cookies.includes('isLoggedIn=true'));
  }, []);

  const handleLogout = () => {
    document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Film className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-xl text-foreground">
              Cine<span className="text-primary">Verse</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/items" className="text-muted-foreground hover:text-primary transition-colors">
              Movies
            </Link>
            {isLoggedIn && (
              <Link href="/add-item" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add Movie
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center gap-2 border-border hover:border-primary hover:text-primary bg-transparent"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            ) : (
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/login">Sign In</Link>
              </Button>
            )}
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/items"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Movies
              </Link>
              {isLoggedIn && (
                <Link
                  href="/add-item"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Add Movie
                </Link>
              )}
              {isLoggedIn ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full justify-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
