import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "lenis/react";
import Home from "@/pages/Home";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <CustomCursor />
        <Nav />
        <Home />
      </ReactLenis>
    </QueryClientProvider>
  );
}

export default App;
