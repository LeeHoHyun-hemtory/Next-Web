import * as STC from "./home.styled";
import Txt from "@/components/Txt";

export default async function Home() {
  return (
    <STC.Container>
      <Txt content="Home" color="#000" fontSize="50px" />
    </STC.Container>
  );
}
