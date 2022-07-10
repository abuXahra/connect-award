import styled from "styled-components";

export const ButtonStyled = styled.button`
background-color: ${(props) => (props.variant === "outline" ? "#27053B" : "#fff")};
color: ${(props) => (props.variant === "outline" ? "white" : "#27053B")};
text-align: center;
display: inline-block;
border: none;
border-radius: 4px;
padding: 15px 32px;
text-decoration: none;
font-size: 16px;
cursor: pointer;
transition: 0.5s all ease-out;
&:hover{
        background-color: ${(props) => (props.variant !== "outline" ? "#27053B" : "#fff")};
        color: ${(props) => (props.variant !== "outline" ? "white" : "#27053B")};
        border: 2px solid #27053B;
}
`