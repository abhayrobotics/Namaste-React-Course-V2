import Contact from "../Contact";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("contact us page test", () => {

   beforeAll(()=>{
    console.log("Before All (one time)");
   });

   beforeEach(()=>{
    console.log("Before Each test runs one time")
   })

   
   afterAll(()=>{
    console.log("After All (one time)");
   });

   afterEach(()=>{
    console.log("After Each test runs one time")
   })


    
  test("check the Contact heading tag loads", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("check if button in contact page loads", () => {
    render(<Contact />);

    // method-1
    // const button = screen.getByRole("button");

    // method -2
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Checking iput box in contact component", () => {
    // render
    render(<Contact />);

    // Querying
    const inputBox = screen.getAllByRole("textbox");
    // console.log(inputBox) // array of objects

    // Assertion
    expect(inputBox.length).toBe(2);
  });
});
