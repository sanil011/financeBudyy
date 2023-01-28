import ChatPage from "./pages/ChatPage"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import MainPage from "./pages/MainPage";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Loader from "./component/Loader";
function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <AuthProvider>
          <div style={{ position: "absolute", zIndex: "999", top: "40%", left: "45%" }}>
            <Loader />
          </div>
          <Routes>
            <Route path="/box" element={<AuthRoute><ChatPage /></AuthRoute>} />
            <Route path="/login" element={<ProtectRoute><Login /></ProtectRoute>} />
            <Route path="/signup" element={<ProtectRoute><SignUp /></ProtectRoute>} />
            <Route path="/" element={<MainPage />} />
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;

const AuthRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  if (!user) {
    return <Navigate to="/" replace />
  }
  return children;
}
const ProtectRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to="/box" replace />
  }
  return children;
}
