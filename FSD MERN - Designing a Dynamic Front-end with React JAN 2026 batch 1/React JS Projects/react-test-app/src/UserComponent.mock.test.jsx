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
    test("Mock User Data Testing (Mock)", async ()=> {
        // provider 
axios.get.mockResolvedValue({
  data: {
    users: [
      {"id":100,"firstName":"John", "lastName":"Doe"},
      {"id":101,"firstName":"Steven", "lastName":"Smith"},
      {"id":102,"firstName":"Raj", "lastName":"Kumar"},
    ]
  }
})

        render(<UsersComponent/>)

        let userData = await screen.findAllByRole("userInfo");
        expect(userData.length).toBe(3);
        expect(userData[0]).toHaveTextContent("John");
        expect(userData[1].firstChild).toHaveTextContent("Steven");
        
    })



})