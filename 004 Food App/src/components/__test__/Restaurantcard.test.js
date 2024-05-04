import ResCard from "../ResCard";
import { isVeg } from "../ResCard";
import MOCK_rest from "../../mocks/RestaurantMock.json"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"

it("should render a restaurant card with data",()=>{

     render(<ResCard  resData={MOCK_rest} />);

     const ResCard1 = screen.getByText("Barbeque Nation")

    expect(ResCard1).toBeInTheDocument()
})

it("should render a restaurant card with veg/non-veg tag",()=>{
    const RestCardVeg = isVeg(ResCard);

    render(<RestCardVeg resData={MOCK_rest}/>)

    const checkVeg =screen.getByText("Veg");

    expect(checkVeg).toBeInTheDocument()


})

