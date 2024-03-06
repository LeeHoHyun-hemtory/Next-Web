import List from "@/components/List";
import * as STC from "./board.styled";
import Txt from "@/components/Txt";
import AddButton from "./ButtonContainer";

const Board = () => {
  return (
    <STC.Container>
      <STC.Top>
        <Txt color="black" fontSize="50px">
          Board
        </Txt>

        <STC.BtnWrapper>
          <AddButton />
        </STC.BtnWrapper>
      </STC.Top>

      <List />
    </STC.Container>
  );
};

export default Board;
