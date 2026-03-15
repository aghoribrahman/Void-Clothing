import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <Nav />
      <Home />
    </QueryClientProvider>
  );
}

export default App;
