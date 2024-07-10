import { render,screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"


test("component should be",()=>{
    render( < Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeIntheDocument();
});




test("component button should be",()=>{
    render( < Contact />);

    const button = screen.getByRole("button");
     //Assertion
    expect(button).toBeIntheDocument();
});