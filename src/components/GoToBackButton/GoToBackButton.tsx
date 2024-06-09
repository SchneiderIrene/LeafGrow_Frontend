import { useNavigate } from "react-router-dom"
import { GoBackButtonComponent } from "./styles"
import { IoArrowBack } from "react-icons/io5"

function GoToBackButton() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <GoBackButtonComponent onClick={goBack}>
      <IoArrowBack size={24} style={{ color: "rgba(186, 45, 0, 1)" }} />
      Zurück
    </GoBackButtonComponent>
  )
}

export default GoToBackButton
