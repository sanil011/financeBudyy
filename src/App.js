import Header from "./component/header";
import ChatPage from "./pages/ChatPage"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainPage from "./pages/MainPage";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/box" element={<ChatPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;

const GuestRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return <>
    {
      !user ? children : <Navigate to="/box" />
    }
  </>
}
const ProtectRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return <>
    {
      user ? children : <Navigate to="/login" />
    }
  </>
}
