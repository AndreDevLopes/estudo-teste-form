import "@testing-library/jest-dom/extend-expect";
import singletonRouter, { useRouter } from "next/router";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Form } from "..";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Form Button", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  test("should be in the DOM", () => {
    render(<Form />);
    const button = screen.getByText(/Entrar/i);
    expect(button).toBeInTheDocument();
  });

  test("should redirect", () => {
    const { result } = renderHook(() => {
      return useRouter();
    });

    expect(result.current).toMatchObject({ asPath: "/" });
    render(<Form />);
    const skipButton = screen.getByText(/Entrar/i);

    act(() => {
      fireEvent.click(skipButton);
    });

    expect(result.current).toMatchObject({ asPath: "/dashbord" });
  });
});
