import Button from "components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { potsSliceActions, potsSliceSelectors } from "store/redux/pots/potsSlice";
import { PotContainer } from "./styles";

function Pot() {
const dispatch = useAppDispatch();
const navigate = useNavigate();
const { id }  = useParams();
const pots = useAppSelector(potsSliceSelectors.potData)

const pot = pots.find((p)=> p.id === id?.toString())


const deActivatePot = (id: string) => {
  console.log(pot);
  
  
    dispatch(potsSliceActions.deActivatePot(id))
    console.log(pot);
     navigate("/mypots")
  
    
}

    return (
      <PotContainer>
        <Button name="Refresh Topf" bgColorIsRed onButtonClick={()=> id && deActivatePot(id)}/>      
      </PotContainer>
    );
  }
  
  export default Pot;