/**
 *  Testing Scenario
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, afterEach } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import RegisterInput from "./RegisterInput";

expect.extend(matchers);

describe("RegisterInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle name typing correctly", async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText("Full Name");

    // Action
    await userEvent.type(nameInput, "nametest");

    // Assert
    expect(nameInput).toHaveValue("nametest");
  });

  it("should handle email typing correctly", async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Email Address");

    // Action
    await userEvent.type(emailInput, "emailtest");

    // Assert
    expect(emailInput).toHaveValue("emailtest");
  });

  it("should handle password typing correctly", async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText("Password");

    // Action
    await userEvent.type(passwordInput, "passwordtest");

    // Assert
    expect(passwordInput).toHaveValue("passwordtest");
  });

  it("should call register function when register button is clicked", async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText("Full Name");
    await userEvent.type(nameInput, "nametest");
    const emailInput = await screen.getByPlaceholderText("Email Address");
    await userEvent.type(emailInput, "emailtest");
    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "passwordtest");
    const registerButton = await screen.getByRole("button", {
      name: "Sign Up",
    });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: "nametest",
      email: "emailtest",
      password: "passwordtest",
    });
  });
});
