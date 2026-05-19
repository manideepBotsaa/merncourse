import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import services from './components/services'
import About from './components/About'
function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
  )
}

export default App
