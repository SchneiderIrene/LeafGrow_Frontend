import { Link, useNavigate, useSearchParams } from "react-router-dom"
import {
  BetweenPageContainer,
  Button,
  ButtonContainer,
  CardContainer,
  MessageSuccessRegister,
  TitleByButton,
} from "./styles"
import { useEffect } from "react"
import { useAppDispatch } from "store/hooks"
import { authSliceActions } from "store/redux/auth/authSlice"
import { useQueryParam } from "use-query-params/dist/useQueryParam"
import { StringParam } from "use-query-params"

function BetweenPage() {
  const navigate = useNavigate()

  const [code, setCode] = useQueryParam("code", StringParam)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (code) {
      dispatch(authSliceActions.confirm(code))
    }
  }, [code])

  return (
    <BetweenPageContainer>
      <CardContainer>
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
          <Button onClick={() => navigate("/guide")}>Zur Anleitung</Button>
        </ButtonContainer>
      </CardContainer>
    </BetweenPageContainer>
  )
}
export default BetweenPage
