import React from 'react';
import {  render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router';

function MockApp(){
  return <BrowserRouter><App/></BrowserRouter>
}

describe("App Tests",()=>{

  test('Expect App to match snapshot', () => {
  render(<MockApp />);
  expect(screen).toMatchSnapshot();
});

  test('Page Renders Routes', async() => {
    render(<MockApp/>);
    //let login = screen.queryByText("Sign In");

    /*
    Add matchers for the various buttons/links that exist for the app page
     */
    //expect(login).toBe(null);

    let heading = await screen.findByText("What did you learn today?");
    let links = await screen.findAllByRole("link");

    expect(heading).toBeInTheDocument();// heading in document
    expect(links.length).toEqual(7);// 7 links in total
    
    // we click a link to change routes 
    act(()=>{
      fireEvent.click(links[1]);
    });


    let logForm = await screen.findByText("Making a log of your sessions will help you to:");
    //confirm new element in document
    expect(logForm).toBeInTheDocument();
    // confirm old element is not in the document
    expect(heading).not.toBeInTheDocument();

    // fire second click to return to the homepage
    act(()=>{
      fireEvent.click(links[3]);
    })
    
    // previous element is not in the document
    expect(logForm).not.toBeInTheDocument();
    heading = await screen.findByText("What did you learn today?");
    // original element is in document
    expect(heading).toBeInTheDocument();
  })

  /* Additonal test suits to confirm page changes & returns */
})


