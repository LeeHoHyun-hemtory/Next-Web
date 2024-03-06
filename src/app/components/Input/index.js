import * as STC from "./input.styled";

const Input = ({ val, setVal }) => {
  return (
    <STC.Input
      value={val}
      onChange={(e) => {
        setVal(e.target.value);
      }}
    />
  );
};

export default Input;
