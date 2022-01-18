import react from "react";
import { Container, Inner } from "./styles/jumbo";
export default function Jumbo({ children, direction = "row", ...restProps }) {
  return (
    <Inner direction={direction}>
      <p>Hello I'm Jumbo</p>
    </Inner>
  );
}

Jumbo.Container = function JumboContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
