import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Users } from "./pages/users/users";
import { UsersDetail } from "./pages/users/users-detail";
import { Contact } from "./pages/contact/contact";
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<UsersDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1 className="text-center text-blue-600 mt-10">Page not found!!!</h1>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
