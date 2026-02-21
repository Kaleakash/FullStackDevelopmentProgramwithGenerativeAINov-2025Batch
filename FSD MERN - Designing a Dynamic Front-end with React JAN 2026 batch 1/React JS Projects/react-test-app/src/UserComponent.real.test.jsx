import { render ,screen} from "@testing-library/react";
import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import UsersComponent from "./UsersComponent";

// it is container which hold more than one test case 
describe("User Real Rest API Testing ",()=> {

    // it is used to write single test case
    test("Fake User Data Testing ", async ()=> {
        render(<UsersComponent/>)

        let userData = await screen.findAllByRole("userInfo");
        expect(userData.length).toBe(30);
        expect(userData[0]).toHaveTextContent("Emily");
        
    })



})