import { useEffect } from "react";
import { Link } from "@/lib/router-compat";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Ritik Arora";
  }, []);
  return (
    <div className="min-h-dvh flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <Link to="/" className="text-primary underline">Return to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
