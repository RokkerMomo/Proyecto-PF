import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import SignInSide from "../src/sign-in-side/SignInSide";
import Test from './Pages/Test';

function App() {

  return (
<Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignIn" element={<SignInSide/>}/>
      <Route path="/test" element={<Test/>}/>
    </Routes>
  </Router>
  )
}

export default App
