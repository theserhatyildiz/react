function Product(props)
{

    return (
        <div className="product">

            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <h4>{props.specs.ram}</h4>
            <h4>{props.category}</h4>

        </div>
    )   
}

export default Product;