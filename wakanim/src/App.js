import { Routes, Route } from "react-router-dom";
import  Auth  from "./components/Auth";
import  Home  from "./components/Home";
import SignUp from "./components/SignUp";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}