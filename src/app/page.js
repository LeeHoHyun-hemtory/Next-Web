import * as STC from "./home.styled";
import Text from "@/component/Text";

export default async function Home() {
  return (
    <STC.Container>
      <Text content="Home" color="#000" fontSize="50px" />
    </STC.Container>
  );
}
