import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Taskboard from "./pages/Taskboard";
import Login from "./pages/Login";

function App() {
  const queryClient = new QueryClient();

  return (
    <div dir="rtl">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/taskboard" element={<Taskboard />} />
          </Routes>

          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              success: {
                duration: 4000,
              },
              error: {
                duration: 4000,
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
