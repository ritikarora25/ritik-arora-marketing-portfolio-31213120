import { useEffect, type ReactNode } from "react";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

const GA_ID = "G-BT03QGN43K";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "google-site-verification", content: "WoKpDIqj6TS6jt6Ot3w3SajcDX9JDElyl1rQKQjJDB0" },
      { name: "author", content: "Ritik Arora" },
      { title: "Ritik Arora — Growth & Marketing" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preload", as: "font", type: "font/woff2", href: "/fonts/poppins-400.woff2", crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: "/fonts/poppins-700.woff2", crossOrigin: "anonymous" },
      { rel: "preload", as: "font", type: "font/woff2", href: "/fonts/poppins-600.woff2", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        children: `(function(){if(window.portfolioAnalyticsStarted)return;window.portfolioAnalyticsStarted=true;window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config','${GA_ID}',{send_page_view:false});window.clarity=window.clarity||function(){window.clarity.q.push(arguments)};window.clarity.q=window.clarity.q||[];function load(){function start(){['https://www.googletagmanager.com/gtag/js?id=${GA_ID}','https://www.clarity.ms/tag/xlslx8dq4g'].forEach(function(src){var s=document.createElement('script');s.src=src;s.async=true;document.head.appendChild(s);});}if('requestIdleCallback' in window){window.requestIdleCallback(start,{timeout:2000});}else{setTimeout(start,1000);}}if(document.readyState==='complete'){load();}else{window.addEventListener('load',load,{once:true});}})();`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootError,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

let lastTrackedPath = "";

function usePageViewTracking() {
  const router = useRouter();
  useEffect(() => {
    const send = () => {
      // Wait a frame so the new page's <title> is in place before reporting.
      requestAnimationFrame(() => {
        const path = window.location.pathname + window.location.search;
        if (path === lastTrackedPath) return;
        lastTrackedPath = path;
        const w = window as unknown as { gtag?: (...a: unknown[]) => void };
        w.gtag?.("event", "page_view", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: path,
        });
      });
    };
    send();
    return router.subscribe("onResolved", send);
  }, [router]);
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  usePageViewTracking();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function RootError({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="min-h-dvh flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">This page didn't load</h1>
        <div className="flex gap-3 justify-center">
          <button
            className="btn btn-solid"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <Link to="/" className="btn btn-ghost">Go home</Link>
        </div>
      </div>
    </div>
  );
}
