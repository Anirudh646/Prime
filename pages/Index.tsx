import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function Index() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-primary-foreground" />
            </div>
            TaskFlow
          </Link>
          <nav className="flex items-center gap-4">
            {user ? (
              <Button asChild>
                <Link to="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign in</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium text-muted-foreground animate-fade-in">
            <span className="mr-2">✨</span>
            Simplify your workflow today
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-in-up">
            Manage Tasks with
            <span className="text-gradient block mt-2">Effortless Precision</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: "100ms" }}>
            TaskFlow helps you organize, track, and complete your tasks efficiently. 
            Stay productive with our intuitive interface and powerful features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{ animationDelay: "200ms" }}>
            <Button size="lg" asChild>
              <Link to="/signup">
                Start for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container px-4 md:px-6 py-16 border-t">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Everything you need to stay organized
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card border shadow-soft">
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Create, update, and complete tasks in seconds with our streamlined interface.
              </p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card border shadow-soft">
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Secure by Design</h3>
              <p className="text-sm text-muted-foreground">
                Your data is protected with enterprise-grade security and encryption.
              </p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card border shadow-soft">
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Personal & Private</h3>
              <p className="text-sm text-muted-foreground">
                Your tasks are yours alone. Complete privacy with user isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 md:px-6 py-16 border-t">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to boost your productivity?
          </h2>
          <p className="text-muted-foreground">
            Join thousands of users who trust TaskFlow to manage their daily tasks.
          </p>
          <Button size="lg" asChild>
            <Link to="/signup">
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4" />
            <span>TaskFlow © 2024</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built with React, TailwindCSS & Lovable Cloud
          </p>
        </div>
      </footer>
    </div>
  );
}
