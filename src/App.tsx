import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Taskboard from "./pages/Taskboard";
import Login from "./pages/Login";
import ProtectRoute from "./components/common/ProtectRoute";
import AppInitilizer from "./layout/AppInitilizer";
import HomeRedirect from "./pages/HomeRedirect";

function App() {
  const queryClient = new QueryClient();

  return (
    <div dir="rtl">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppInitilizer />
          <Routes>
            <Route path="/" element={<HomeRedirect />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/taskboard"
              element={
                <ProtectRoute>
                  <Taskboard />
                </ProtectRoute>
              }
            />
          </Routes>
          {/* ------------------toaster notifications------------------ */}
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
