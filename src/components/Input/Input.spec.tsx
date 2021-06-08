import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("<Input>", () => {
  it("should render the input", () => {
    render(<Input label="test_label" />);
    screen.getByText("test_label");
  });
});
