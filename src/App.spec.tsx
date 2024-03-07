import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

const renderApp = () => render(<App />);

describe("App", () => {
  it('should open SeeAllReadingsModal modal', () => {
    renderApp();

    fireEvent.click(screen.getByRole('button', { name: 'See all' }));

    expect(screen.getByTestId('modal-Previous meter readings')).toBeInTheDocument();
  });
  it('should open WarningModal modal', () => {
    renderApp();

    fireEvent.click(screen.getByRole('button', { name: 'Add predicted reading' }));

    expect(screen.getByText('Are you sure you want to add')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Accept' })).toBeInTheDocument();
  });
});
