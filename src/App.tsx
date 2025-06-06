import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TaskList } from "./components/TaskList";
import { DynamicForm } from "./components/forms/DynamicForm";
import { Navbar } from "./components/Navbar";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const handleFormSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    // اینجا می‌توانید داده‌های فرم را به سرور ارسال کنید
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <header className="app-header">
            <h1>مدیریت تسک‌های Camunda</h1>
          </header>
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
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
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
