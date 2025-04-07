import Footer from "./footer/Footer";
import Header from "./Header/Header";
import MainContentWrapper from "./MainContentWrapper";

function MainLayout({ children }) {
  return (
    <MainContentWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </MainContentWrapper>
  );
}

export default MainLayout;
