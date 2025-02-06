import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}><Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router></ThemeProvider>
    
  )
}

export default App
