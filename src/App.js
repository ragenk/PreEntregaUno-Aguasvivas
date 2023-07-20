import NavBar from './components/NavBar/NavBar'
import ProductCard from './components/ProductCard/ProductCard'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import "bulma/css/bulma.css"
import HeartImg from "./img/heart.jpg"
import MaskImg from "./img/mascara.jpg"
import MonoImg from "./img/mono.jpg"

function App() {
    return (
        <div>

            <section className="hero is-info">
                <div className="hero-body">
                    <h1 className="title has-text-centered">JairolArt Shop</h1>
                </div>
            </section>
            <div>
                <NavBar />
            </div>

            <div className="container">
                
                <div>
                    <ItemListContainer greeting="¡Bienvenidos a mi tienda!" />
                </div>

                <div className="section">
                    <div className="columns">                        
                        <div className="column is-4">
                            <ProductCard title="Heart Replica" description="Replica de corazon hecho con resina." image={HeartImg}/>
                        </div>
                        <div className="column is-4">
                            <ProductCard title="The Mask" description="Replica de La Mascara" image={MaskImg}/>
                        </div>
                        <div className="column is-4">
                            <ProductCard title="Mono NFT" description="Escultura en tamaño real de Mono NFT" image={MonoImg}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );    
}

export default App;