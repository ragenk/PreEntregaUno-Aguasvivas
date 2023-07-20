import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (        
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/#">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start ml-5">
                    <a className="navbar-item" href="/#">
                        Home
                    </a>
                    <a className="navbar-item" href="/#">
                        Pinturas
                    </a>
                    <a className="navbar-item" href="/#">
                        Esculturas
                    </a>
                    <a className="navbar-item" href="/#">
                        Fotografia
                    </a>
                </div>
                <div className="navbar-end mr-5">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar