import  React from "react";
import Mainwelcome from "./Mainwelcome";
import Footer from "./Footer";
import ShortAboutUs from "./Short-about-us";
import Features from "./Features";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Quickcontact from "./Quickcontact";

class App extends React.Component {
    render() {
        return (
            <div>
                <Mainwelcome/>
                <ShortAboutUs/>
                <Features/>
                <Projects/>
                <Services/>
                <Testimonials/>
                <Quickcontact/>
                <Footer/>
            </div>
        )
    }
}

export default App;