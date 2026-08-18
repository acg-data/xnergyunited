import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Security from "@/pages/Security";
import DivisionPage from "@/pages/DivisionPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/infrastructure/">{() => <DivisionPage slug="infrastructure" />}</Route>
      <Route path="/energy/">{() => <DivisionPage slug="energy" />}</Route>
      <Route path="/technology/">{() => <DivisionPage slug="technology" />}</Route>
      <Route path="/security" component={Security} />
      <Route path="/security/" component={Security} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
