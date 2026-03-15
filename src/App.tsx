import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "lenis/react";
import Home from "@/pages/Home";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Router, Route, Switch, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load pages
const Shop = lazy(() => import("@/pages/Shop"));
const Lookbook = lazy(() => import("@/pages/Lookbook"));
const About = lazy(() => import("@/pages/About"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

function AppContent() {
  const [location] = useLocation();
  
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <CustomCursor />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          <ScrollToTop />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-white">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-2 border-black border-t-transparent animate-spin" />
                <span className="text-[10px] font-black tracking-[0.4em] uppercase animate-pulse">LOADING...</span>
              </div>
            </div>
          }>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route path="/lookbook" component={Lookbook} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </ReactLenis>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
