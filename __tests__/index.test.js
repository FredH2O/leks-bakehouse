// practice with Jest first time
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "@/components/Hero/HeroSection";

describe("Hero Section", () => {
  it("renders the heading and buttons", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /sweet & buttery indulgence/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /order now/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /view cakes/i })
    ).toBeInTheDocument();
  });
});
