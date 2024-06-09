import styled from "@emotion/styled"

interface ButtonComponentProps {
  disabled: boolean
  color:"red" | "grey" | "green" | undefined,
  bgColorIsRed: boolean,
  border: boolean,
}

const getColor = (color:"red" | "grey" | "green" | undefined)=>{
  if(color === "red"){
    return "rgba(186, 45, 0, 1)"
  }
  if (color === "green"){
    return "rgba(0, 113, 50, 1)"
  }
  if (color === "grey"){
    return "rgba(255, 254, 239, 1)"
  }
  else {
    return "rgba(0,0,0,0.1)"
  }
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 60px;
  outline: none;
  border: none;
  padding: 10px;
  background: ${({ bgColorIsRed }) => (bgColorIsRed ? "rgba(186, 45, 0, 1)" : "rgba(255, 254, 239, 1)")};  
  color: ${({color})=>getColor(color)};
  border: ${({border})=>(border ? "4px solid rgba(55, 62, 58, 0.5)" : "none")};
  font-size: 20px;
  font-family: "DM Sans";
  font-weight: 900;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
