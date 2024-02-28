import List from "@/component/List";
import * as STC from "./board.styled";
import { Text } from "@/component/Text/Text.styled";
import AddButton from "./ButtonContainer";

const Board = () => {
  return (
    <STC.Container>
      <STC.Top>
        <Text color="black" fontSize="50px">
          Board
        </Text>

        <STC.BtnWrapper>
          <AddButton />
        </STC.BtnWrapper>
      </STC.Top>

      <List />
    </STC.Container>
  );
};

export default Board;
