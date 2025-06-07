import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaskList } from "./components/TaskList";
import { DynamicForm } from "./components/forms/DynamicForm";
import AppLayout from "./layout/AppLayout";

import "./App.css";

function App() {
  const queryClient = new QueryClient();
  const handleFormSubmit = async (data: any) => {
    console.log("Form submitted:", data);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<TaskList />} />
            <Route
              path="/contact"
              element={
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    فرم تماس
                  </h2>
                  <DynamicForm onSubmit={handleFormSubmit} />
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
