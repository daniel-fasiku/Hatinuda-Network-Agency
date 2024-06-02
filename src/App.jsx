import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Homepage from "./pages/Home page/homepage";
import AboutUsPage from "./pages/About Us Page/aboutus";
import ServicesPage from "./pages/Services Page/Services";
import ContactUsPage from "./pages/Contact Us Page/ContactUs";
import NotFoundPage from "./pages/Not Found/notfound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="about" element={<AboutUsPage/>}/>
        <Route path="services" element={<ServicesPage/>}/>
        <Route path="contact" element={<ContactUsPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
      <Analytics/>
      <SpeedInsights/>
    </BrowserRouter>
  )
}

export default App