import { render, act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mocks/restaurantListData.json";
import { BrowserRouter } from "react-router-dom";
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
});
// it("should simulate search Operation",  ()=>{

//     act(  ()=> render(<Body />) )

// })
