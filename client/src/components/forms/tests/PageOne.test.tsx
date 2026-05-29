import PageOne from "../new-log-form/PageOne";
import { render,screen } from "@testing-library/react";

describe('PageOne Tests', () => {

    test('Page Matches Snapshot', () => {
        render(<PageOne/>)
        expect(screen).toMatchSnapshot();
    });

    test('Elements Render', async () => { 
        render(<PageOne/>)
        let heading = await screen.findByText("Making a log of your sessions will help you to:");
        let ul = await screen.findByRole("list");
        let li = await screen.findAllByRole("listitem");
        let footer = await screen.findByRole("paragraph");

        expect(heading).toBeInTheDocument();
        expect(ul).toBeInTheDocument();
        expect(li.length).toEqual(4);
        expect(footer).toBeInTheDocument();
    })
})