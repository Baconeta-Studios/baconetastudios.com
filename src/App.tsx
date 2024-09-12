// React
import {BrowserRouter, Route, Routes} from "react-router-dom";
// Components
import Home from "./pages/home/Home.tsx";
// Styling
import './App.css'

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={'/'} element={<Home />} />
                <Route path={'/about'} element={<></>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
