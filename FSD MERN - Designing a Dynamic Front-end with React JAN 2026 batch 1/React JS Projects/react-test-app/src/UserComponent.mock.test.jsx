import { render ,screen} from "@testing-library/react";
import { describe, expect } from "vitest";
import { vi } from "vitest";
import axios from "axios";
import UsersComponent from "./UsersComponent";

vi.mock("axios");       // enable mock for axios module
// it is container which hold more than one test case 
describe("User Mock Rest API Testing ",()=> {
    // mock data for axios.get method

    // it is used to write single test case
    test.skip("Mock User Data Testing (Mock)", async ()=> {
        // provider 
    axios.get.mockResolvedValue({
    data:[
        {"id":100,"firstName":"John"},
        {"id":101,"firstName":"Steven"},
        {"id":102,"firstName":"Raj"},
        ]
    })

        render(<UsersComponent/>)

        let userData = await screen.findAllByRole("userInfo");
        expect(userData.length).toBe(3);
        //expect(userData[0]).toHaveTextContent("Emily");
        //let userData = await screen.queryAllByRole("userInfo");
        //expect(userData.length).toBe(3);
        //expect(userData[0]).toHaveTextContent("John");
        
    })



})