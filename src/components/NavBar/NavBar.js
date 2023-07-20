import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        
        <nav class="navbar is-link" role="navigation" aria-label="main navigation">

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start ml-5">
                    <a class="navbar-item" href="/#">
                        Home
                    </a>
                    <a class="navbar-item" href="/#">
                        Pinturas
                    </a>
                    <a class="navbar-item" href="/#">
                        Esculturas
                    </a>
                    <a class="navbar-item" href="/#">
                        Fotografia
                    </a>
                </div>
                <div class="navbar-end mr-5">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar