export const Item = (product) => {
    return (
        <div>
            <div className="container">
                <div className="item-image">
                    <img src={product.image} alt={product.title}/>
                </div>
                <div className="item-info">
                    <h3>{product.title}</h3>
                    <h3>{product.price}원</h3>
                </div>
                <button>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}