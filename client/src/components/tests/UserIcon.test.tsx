import UserIcon from "../UserIcon";
import { render,screen} from "@testing-library/react";

describe('UserIcon Tests', () => {  

    test("Page matches snapshot",()=>{
        render(<UserIcon/>);
        expect(screen).toMatchSnapshot();
    });

    test('Page renders image element', async() => {
        render(<UserIcon/>);
        let profilePic = await screen.findByRole("img");
        expect(profilePic).toBeInTheDocument();
    })

});