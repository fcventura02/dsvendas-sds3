import Link from "next/link";

export default function NavBar() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src="/ds_dark.svg" alt="DevSuperior" width="120" />
                        </a>
                    </Link>
                </nav>
            </div>
        </div>
    )
}