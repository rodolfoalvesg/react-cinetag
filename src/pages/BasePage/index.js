import Footer from "components/Footer";

const { default: Header } = require("components/Header");
const { default: Main } = require("components/Main");
const { default: FavoriteProvider } = require("context/favorite");
const { Outlet } = require("react-router-dom");

function BasePage() {
  return (
    <>
        <Header />
            <Main >
                <FavoriteProvider>
                    <Outlet />
                </FavoriteProvider> 
            </Main>
        <Footer />
    </>
  )
};

export default BasePage;