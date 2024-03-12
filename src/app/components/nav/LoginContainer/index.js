import * as STC from "./loginContainer.styled";
import Button from "@/components/Button";
import Txt from "@/components/Txt";
import { useSession, signIn, signOut } from "next-auth/react";

const index = () => {
  const { data } = useSession();

  const onClickSignin = () => {
    signIn();
  };

  const onClickSignout = () => {
    signOut();
  };

  return (
    <>
      {data ? (
        <STC.Container>
          <Txt
            content={data.user.name}
            color="#000"
            fontSize="16px"
            margin="0 20px"
          />

          <Button
            content="로그아웃"
            handleOnClick={onClickSignout}
            color="#000"
            border="1px solid #000"
          />
        </STC.Container>
      ) : (
        <Button
          content="로그인"
          handleOnClick={onClickSignin}
          color="#000"
          border="1px solid #000"
        />
      )}
    </>
  );
};

export default index;
