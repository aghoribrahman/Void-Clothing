import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "lenis/react";
import Home from "@/pages/Home";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Router, Route, Switch, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import Shop from "@/pages/Shop";
import Lookbook from "@/pages/Lookbook";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

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
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/lookbook" component={Lookbook} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
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
