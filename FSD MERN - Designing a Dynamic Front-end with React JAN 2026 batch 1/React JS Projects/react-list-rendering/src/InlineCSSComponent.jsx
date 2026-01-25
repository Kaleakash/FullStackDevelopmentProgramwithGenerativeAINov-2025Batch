let styleObj = {
    "color":"red",
    "backgroundColor":"yellow"
}
function InlineCSSComponent() {

    return(
        <div>
            <p style={{"color":"red","backgroundColor":"yellow"}}>Apply style using inline CSS</p>
            <p style={styleObj}>Apply style using inline CSS with JS Object</p>
        </div>
    )
}

export default InlineCSSComponent;