import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render,screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


it("shoud load Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // query
  const login = screen.getByText("Login")
  
  // assertion
  expect(login).toBeInTheDocument();

});


it("shoud load Header component 6 header items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // query
//   const login = screen.getByText("Login")
  const login = screen.getAllByRole("listitem")
  // assertion
  expect(login.length).toBe(6);
});


it("shoud change login button to log out on clik", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // query
  const login = screen.getByText("Login")

//   fireevent
  fireEvent.click(login)

  const logout =screen.getByText("Logout")
  // assertion
  expect(logout).toBeInTheDocument();
});

