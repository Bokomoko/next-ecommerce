import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button>", () => {
  it("should render button", () => {
    render(<Button>test_button</Button>);
    screen.getByText("test_button");
  });
});
