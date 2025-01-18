import { Outlet, Link } from "react-router-dom";

function Layout() {
    const getYear = new Date().getFullYear();
    return (
        <div className="d-flex flex-column min-vh-100">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">MyApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex-grow-1">
                <div className="container py-4">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-light text-center py-3 mt-auto">
                <p className="mb-0">&copy;{getYear} All Rights Reserved, data from yts.mx & omdb</p>
            </footer>
        </div>
    );
}

export default Layout;
