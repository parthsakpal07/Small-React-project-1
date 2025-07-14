import "./Product.css";
import Price from "./Price.jsx"

import logitechImg from './assets/keyboard.png';
import applePencilImg from './assets/pen.png';
import zebTransformerImg from './assets/mouse.png';
import toad23Img from './assets/mouse2.png';


function Product({title, idx}) { 
  let oldPrice = ["12,495","11,900","1,599","599"];
  let newPrice = ["8,999","9,199", "899", "278"];
  let description = [
    ["8,000 DPI","5 Programmable buttons"],
    ["intuitive surface","designed for Ipad pro"],
    ["designed for Ipad","Smooth dilug surface"],
    ["wireless","optical orientation"]
  ];

  let images = [logitechImg, applePencilImg, zebTransformerImg, toad23Img];
  let style = {
    width: "150px",
    height: "auto",
    margin: "10px 0"
  }

    return (
        <div className="Product">
          <h4>{ title }</h4>
          <img style={ style }
            src={images[idx]} 
            alt={title}
            className="product-img"
          />
          <li>{ description[idx][0] }</li>
          <li>{ description[idx][1] }</li>
          <br></br>
          <Price oldPrice={ oldPrice[idx] } newPrice={ newPrice[idx] }/>
        </div>
    )
}

export default Product;