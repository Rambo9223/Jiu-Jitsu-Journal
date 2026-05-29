import WeekView from "../WeekView";
import { render,screen } from "@testing-library/react";

describe("WeekView Page Tests",()=>{

    test("Page matches snapshot",()=>{
        render(<WeekView/>);
        expect(screen).toMatchSnapshot();
    });

    test("Page renders elements",async()=>{
        render(<WeekView/>);
        let date = await screen.findByText("Mon",{exact:false});// find an element in the array by text 
        let dates = date.parentElement?.parentElement?.children; //the parent elements children
        expect(dates?.length).toEqual(7);
    });

})