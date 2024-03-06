import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("includes the header", () => {
    const app = render(<App />);
    app.getByText("Meter Readings");
  });
});
