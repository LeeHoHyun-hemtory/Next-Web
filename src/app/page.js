import * as STC from "./home.styled";
import Text from "@/component/Text";

export default async function Home() {
  return (
    <STC.Container>
      <Text color="black" fontSize="50px">
        Home
      </Text>
    </STC.Container>
  );
}
