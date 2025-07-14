export default function Price({oldPrice, newPrice}) {
    let OldStyle = {
        textDecorationLine: "line-through",
    }

    let newStyle = {
        fontWeight: "bold",
    }

    let Styles = {
        backgroundColor: "#d4ab36",
        width: "100%",
        height: "30px",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px"
    }
    return (
        <div style={ Styles }>
          <span style={ OldStyle }>{oldPrice}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style={ newStyle }>{newPrice}</span>
        </div>
    )
}

