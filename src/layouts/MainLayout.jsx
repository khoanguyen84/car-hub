import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Hero from "../components/hero/Hero";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar/>
            <Hero/>
            {children}
            <Footer/>
        </>
    )
}