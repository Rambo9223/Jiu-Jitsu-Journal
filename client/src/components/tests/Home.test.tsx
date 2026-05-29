import React from "react";
import Home from "../Home";
import {  render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';

function MockHome(){
    return<BrowserRouter><Home/></BrowserRouter>
}

describe("Home Tests",()=>{

    test("Page matches snapshot",()=>{
        render(<MockHome/>);
        expect(screen).toMatchSnapshot();
    });

    test("Page renders components",async()=>{
        render(<MockHome/>);

        let calendar = await screen.findByText("fri",{exact:false});// is in doc
        let images = await screen.findAllByRole("img");// has length 4
        let heading = await screen.findByText("What did you learn today?");

        expect(calendar).toBeInTheDocument();
        expect(images.length).toEqual(4);
        expect(heading).toBeInTheDocument();

    })

    /* Ensure that all links are rendered, the calendar component is rendered, use the days
    
    in future expect recent entries to be an array of things length 0 as no login */
})

