

function ProductCard({title, description, image}){

    return (
        
        <div>
            <div class="card">
                <div class="card-image">
                    <figure class="image is-3by4">
                        <img src={image} alt={description} />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{title}</p>
                            <p class="subtitle is-6">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductCard