// React
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import Home from "./pages/home/Home.tsx";
import ContactUs from "./pages/contact/ContactUs.tsx";
import AboutUs from "./pages/sts/About.tsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/contact'} element={<ContactUs/>}/>
                    <Route path={'/about'} element={<AboutUs/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
