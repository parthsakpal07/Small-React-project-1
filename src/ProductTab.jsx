import Product from "./Product.jsx";

function ProductTab() {
    let Style = {
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "2px",
    }
    return (
        <div style={Style}>
        <Product title="Logitech MX-Player" idx={0}/>
        <Product title="Apple pencil (2nd gen)" idx={1}/>
        <Product title="Zebronic zeb-transformer" idx={2}/>
        <Product title="Petronics Toad 23" idx={3}/>
        </div>   
    )
}

export default ProductTab;