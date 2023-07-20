function ProductCard({title, description, image, precio}){

    return (        
        <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-3by4">
                        <img src={image} alt={description} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{description}</p>
                        </div>
                    </div>
                    <div className="content has-text-right">
                        <p>Precio: <span className="content is-medium">{precio}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard