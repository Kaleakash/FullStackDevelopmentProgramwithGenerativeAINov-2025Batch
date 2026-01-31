import styled from "styled-components";
// it takes are props and return a component with styles applied to it
let Container = styled.div`
    color: blue;
    font-size: 20px;
    background-color: lightgray;
;`
let TextColor = styled.h2`  
    color: green;
`

function StyledComponentExamples() {

    return(
        <div>
            <Container>
                <h2><TextColor>Styled Component Example</TextColor></h2>
            </Container>
        </div>
    )
}

export default StyledComponentExamples;