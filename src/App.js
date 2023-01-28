import Header from "./component/header";
import ChatPage from "./pages/ChatPage"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./pages/MainPage";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/box" element={<ChatPage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
