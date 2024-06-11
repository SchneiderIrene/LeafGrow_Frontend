import { useNavigate} from "react-router-dom"
import {
  BetweenPageContainer,
  ButtonContainer,
  CardContainer,
  MessageErrorRegisterConfirm,
  MessageSuccessRegister,
  TitleByButton,
} from "./styles"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { authSliceActions, authSliceSelectors } from "store/redux/auth/authSlice"
import { useQueryParam } from "use-query-params/dist/useQueryParam"
import { StringParam } from "use-query-params"
import Button from "components/Button/Button";

function BetweenPage() {
  const navigate = useNavigate()

  const [code, setCode] = useQueryParam("code", StringParam)

  const dispatch = useAppDispatch()
  const errorConfirm = useAppSelector(authSliceSelectors.error)
  const status = useAppSelector(authSliceSelectors.status)

  useEffect(() => {
    if (code) {
      console.log("Dispatching confirm with code:", code);
      dispatch(authSliceActions.confirm(code))
    }
  }, [code])

  const resetEmail = () => {
    dispatch(authSliceActions.resetEmail())
  }

  return (
    <BetweenPageContainer>
      <CardContainer>
        {status === "error" && errorConfirm ? (
          <>
        <MessageErrorRegisterConfirm>{errorConfirm.message}</MessageErrorRegisterConfirm>
        <Button  name="Erneut senden" bgColorIsRed onButtonClick={resetEmail}/>
          </>) : (
          <> 
        <MessageSuccessRegister>
          Du hast dich erfolgreich registriert.
        </MessageSuccessRegister>
        <ButtonContainer>
          <TitleByButton>
            Wenn du dich zum Hanfanbau bereit fühlst,{" "}
            <span style={{ fontWeight: "bold" }}>
              dann können wir loslegen!
            </span>
          </TitleByButton>
          <Button name="Zur Anleitung" bgColorIsRed onButtonClick={() => navigate("/guide")}/>
        </ButtonContainer>  
         </>
        )}
      </CardContainer>
    </BetweenPageContainer>
  )
}
export default BetweenPage
