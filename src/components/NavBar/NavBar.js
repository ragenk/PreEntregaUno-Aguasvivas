import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        
        <nav class="navbar is-link" role="navigation" aria-label="main navigation">

            <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>  

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