import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const PageLayout = ({children}) => {
    return (
        <div>
            <NavBar />
            { children }
            <Footer />
        </div>
    );
}

export default PageLayout;