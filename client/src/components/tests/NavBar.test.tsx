import NavBar from "../NavBar";
import { render,screen} from "@testing-library/react";
import { BrowserRouter } from "react-router";

function MockNavBar(){
    return <BrowserRouter><NavBar/></BrowserRouter>
}

describe('NavBar Tests', () => {

    test('Page matches snapshot', () => {
        render(<MockNavBar/>);
        expect(screen).toMatchSnapshot();
    });

    test('Page renders elements', async() => {
        let {container} = render(<MockNavBar/>); 

        let links = await screen.findAllByRole("link");
        let home = container.querySelector('[class="bi bi-house-door"]') as HTMLImageElement;
        let logs = container.querySelector('[class="bi bi-journal-text"]') as HTMLImageElement;
        let media = container.querySelector('[class="bi bi-image-fill"]') as HTMLImageElement;
        let settings = container.querySelector('[class="bi bi-gear"]') as HTMLImageElement;
        expect(links.length).toEqual(4);
        expect(home).toBeInTheDocument();
        expect(logs).toBeInTheDocument();
        expect(media).toBeInTheDocument();
        expect(settings).toBeInTheDocument();

    })
})