import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import SignInSide from "../src/sign-in-side/SignInSide";
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {

  return (
<Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignIn" element={<SignInSide/>}/>
    </Routes>
  </Router>
  )
}

export default App
