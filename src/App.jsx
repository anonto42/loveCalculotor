import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import LovePage from './Pages/Out/LovePage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/love" element={<LovePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
