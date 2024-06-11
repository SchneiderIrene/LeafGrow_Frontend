import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const LegalInfoWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 140px 50px 140px;
`
export const StyledP = styled.h3`
  text-align: left;
  font-size: 18px;
  color: #373e3a;
  font-family: "DM Sans";
`

export const StyledH4 = styled.h3`
  text-align: center;
  font-size: 22px;
  margin-top: 30px;
  font-weight: bold;
  color: #373e3a;
  font-family: "DM Sans";
`

export const StyledH5 = styled.h3`
  text-align: center;
  font-size: 18px;
  color: #373e3a;
  font-family: "DM Sans";
`

export const StyledLink = styled(Link)`
  font-size: 18px;
  font-family: "DM Sans";
  color: #ba2d00;
  margin: 0 5px;
  &:hover {
    text-decoration: underline;
  }
`