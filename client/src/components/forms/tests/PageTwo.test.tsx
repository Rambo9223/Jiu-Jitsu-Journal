import NewLogForm from "../NewLogForm";
import { render,screen,act,fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { newLogDefaults } from "../../utils/formDefaults";
//import { newLogMockValues } from "../../utils/mock_values";

function MockPageTwo(){
    return <BrowserRouter><NewLogForm test={2} defaultValues={newLogDefaults}/></BrowserRouter>
}

describe('NewLog Page Two Tests', () => {

    test('Page matches snapshot', () => { 
        render(<MockPageTwo/>)
        expect(screen).toMatchSnapshot();
    })

    test('Elements render',() => { 
        const {container} = render(<MockPageTwo/>)
        let labels = container.querySelectorAll("label");
        let inputs = container.querySelectorAll("input");

        expect(labels.length).toEqual(4);
        expect(inputs.length).toEqual(3);
    })

    /* continue with tests on the form to establish errors on submit, different kinds of errors etc
    
    select and remove a tag from the modal
    confirm a new input is added
    
    */
})
