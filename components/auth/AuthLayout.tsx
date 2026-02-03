import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Branding */}
      <div className="hidden lg:flex flex-col justify-between bg-primary p-10 text-primary-foreground">
        <div>
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="h-8 w-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
              <CheckCircle className="h-5 w-5" />
            </div>
            TaskFlow
          </Link>
        </div>
        
        <div className="space-y-6">
          <blockquote className="text-lg font-medium leading-relaxed">
            "TaskFlow has completely transformed how our team manages projects. 
            The intuitive interface and powerful features make it a joy to use every day."
          </blockquote>
          <div>
            <p className="font-semibold">Sarah Chen</p>
            <p className="text-sm text-primary-foreground/70">Product Manager at TechCorp</p>
          </div>
        </div>

        <p className="text-sm text-primary-foreground/60">
          © 2024 TaskFlow. All rights reserved.
        </p>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-6 lg:p-10 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              TaskFlow
            </Link>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
            <p className="mt-2 text-muted-foreground">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
