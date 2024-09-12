// React
import {BrowserRouter, Route, Routes} from "react-router-dom";
// Components
import Home from "./pages/home/Home.tsx";
import ContactUs from "./pages/contact/ContactUs.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={'/'} element={<Home />} />
                <Route path={'/contact'} element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
