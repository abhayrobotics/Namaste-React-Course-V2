import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mocks/restaurantListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { act } from "react-dom/test-utils";
// import { act } from "react-dom/test-utils";

// Returns a promise just like our fetch Api of Browser
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// Interaction testing
it("should simulate search Operation", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const totalCards = screen.getByTestId("resCard");
  // expect(totalCards.length).toBe(9)

   const searchBtn = screen.getByRole("button",{name: "Search"})
  //  console.log(searchBtn);

  const searchInput = screen.getByTestId("searchInput");
  // console.log(searchInput);

  fireEvent.change(searchInput, {target :{value :"Pizza"}})

  fireEvent.click(searchBtn);

  // const cards = screen.getAllByTestId("resCard");
  
  
  //  expect(cards.length).toBe(1)
});

