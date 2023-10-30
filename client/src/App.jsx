import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import TaskFormPage from "./pages/TaskFormPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <AuthProvider>
            <TaskProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />

                        <Route element={<ProtectedRoute />}>
                            <Route path="/tasks" element={<TaskPage />} />
                            <Route
                                path="/add-task"
                                element={<TaskFormPage />}
                            />
                            <Route
                                path="/tasks/:id"
                                element={<TaskFormPage />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </TaskProvider>
        </AuthProvider>
    );
};

export default App;
