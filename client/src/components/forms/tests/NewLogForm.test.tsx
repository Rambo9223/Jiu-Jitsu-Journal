import NewLogForm from "../NewLogForm";
import { render,screen,act,fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { newLogDefaults } from "../../utils/formDefaults";
import { newLogMockValues } from "../../utils/mock_values";


function MockNewLog(){
    return <BrowserRouter><NewLogForm defaultValues={newLogMockValues}/></BrowserRouter>
}

// mock parent components allow us to pass usestate as prop
function MockFormPass(){
    //const [page,setPage] = useState<number>(8)
    return <NewLogForm defaultValues={newLogMockValues}/>
}

// page 3 test
function MockReject(){
    return <NewLogForm defaultValues={newLogDefaults}/>
}

// use this page to render the other tests to save time mocking out types etc

describe('New Log Form Page Tests', () => {

    test('Page Matches Snapshot', () => {
        render(<MockNewLog/>)
        expect(screen).toMatchSnapshot();
    });

    test('Page Renders Elements on initialise', async () => {
        
        const {container} = render(<MockNewLog/>)

        let form = container.querySelector("form");
        let chevron = container.querySelector('[class="bi bi-chevron-left"]') as HTMLImageElement ; 
        let button = await screen.findByRole("button");
        let page1 = await screen.findByText("Making a log of your sessions will help you to:");
        
        expect(form).toBeInTheDocument();
        expect(chevron).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(page1).toBeInTheDocument();
    })

    test('Page Changes', async () => {
            const {container} = render(<MockNewLog/>);
             let page1 = await screen.findByText("Making a log of your sessions will help you to:");
            
            let button = await screen.findByRole("button");
    
            // expect page 1 to be in the document
            expect(page1).toBeInTheDocument();
    
            // change page
    
            act(()=>{
                fireEvent.click(button);
            })
            // page 1 is not in the doc
            expect(page1).not.toBeInTheDocument();
            let chevron = container.querySelector('[class="bi bi-chevron-left"]') as HTMLImageElement ; 
    
            // return to page 1
            act(()=>{
                fireEvent.click(chevron);
            });
            page1 = await screen.findByText("Making a log of your sessions will help you to:")
            expect(page1).toBeInTheDocument();
    
        })
    /* Page 8 test
    test('Sucessful Submit', async () => {
        render(<MockFormPass/>)
        let buttons = await screen.findAllByRole("button");
        let label = await screen.findByText("Sparring")
        expect(buttons.length).toEqual(2);
        expect(label).toBeInTheDocument();

        // submit form
        act(()=>{
            fireEvent.click(buttons[1]);
        })
        
        let response = await screen.findByText("Thank you for logging your training.");

        expect(response).toBeInTheDocument();
        expect(label).not.toBeInTheDocument();
        expect(buttons[1]).not.toBeInTheDocument();
    })*/
})