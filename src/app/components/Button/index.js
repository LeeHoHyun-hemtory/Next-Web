import * as STC from "./Button.styled";

const Button = ({
  handleOnClick,
  content,
  color,
  background,
  padding,
  border,
}) => {
  return (
    <STC.Button
      onClick={handleOnClick}
      color={color}
      background={background}
      padding={padding}
      border={border}
    >
      {content}
    </STC.Button>
  );
};

export default Button;
