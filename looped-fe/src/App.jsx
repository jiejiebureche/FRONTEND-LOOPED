import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogInForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Homepage from "./components/Homepage";
import ForgetPass from "./components/ForgetPass";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function SignupAndLogout() {
  localStorage.clear();
  return <SignUpForm />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
