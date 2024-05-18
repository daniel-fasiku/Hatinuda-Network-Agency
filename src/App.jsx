import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home page/homepage";
import AboutUsPage from "./pages/About Us Page/aboutus";
import ServicesPage from "./pages/Services Page/Services";
import ContactUsPage from "./pages/Contact Us Page/ContactUs";
import NotFoundPage from "./pages/Not Found/notfound";


const App = () => {
  return (
    <BrowserRouter>
      <Homepage/>
      
    </BrowserRouter>
  )
}

export default App