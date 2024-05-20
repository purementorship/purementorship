import NavBar from "./NavBar";
import Footer from "./Footer";

const PageLayout = ({ children, className }) => {
  return (
    <div className={className}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
