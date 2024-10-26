import { render, screen } from "@testing-library/react";
import Posts from "../Posts";

test("Posts component renders correctly", () => {
  render(<Posts />);

  const bodyElement = screen.getByText("Posts");

  const titleElement = screen.getByTestId("post-title");

  expect(bodyElement).toBeInTheDocument();
  expect(titleElement).toHaveTextContent("Posts");
});

