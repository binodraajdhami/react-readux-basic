
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import components
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";

import HomePage from "./components/pages/Home";
import AboutPage from "./components/pages/About.";
import ContactPage from "./components/pages/Contact";
import PageNotFoundPage from "./components/pages/404";

function AppRouting() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path="*" element={<PageNotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouting;