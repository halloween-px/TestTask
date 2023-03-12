import Header from "./Header"
import Footer from "./Footer"

const MainLayout = ({ children }) => {
    return (
        <div className="main-area">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;