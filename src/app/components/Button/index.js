import * as STC from "./Button.styled";

const Button = ({ handleOnClick, content, color, border }) => {
  return (
    <STC.Button onClick={handleOnClick} color={color} border={border}>
      {content}
    </STC.Button>
  );
};

export default Button;
