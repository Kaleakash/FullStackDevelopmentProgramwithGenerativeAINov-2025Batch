import { render ,screen} from "@testing-library/react";
import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

// it is container which hold more than one test case 
describe("Login Component Testing ",()=> {

    // it is used to write single test case
    test("Login Component validation test", async ()=> {
        render(<Login />)
        await userEvent.click(
            screen.getByRole("button", { name: "Login" })
        )
        expect(screen.getByText("Please fill all the fields")).toBeInTheDocument();
        
    })

        // it is used to write single test case
    test("Invalid EmailId or Password", async ()=> {
        render(<Login />)
        
        await userEvent.type(screen.getByLabelText("Email"), "user@gmail.com");
        await userEvent.type(screen.getByLabelText("Password"), "user123");

        
        await userEvent.click(
            screen.getByRole("button", { name: "Login" })
        )
        expect(screen.getByText("Invalid email or password")).toBeInTheDocument();
        
    })

          // it is used to write single test case
    test("success test", async ()=> {
        render(<Login />)

        await userEvent.type(screen.getByLabelText("Email"), "admin@gmail.com");
        await userEvent.type(screen.getByLabelText("Password"), "admin123");        
        await userEvent.click(
            screen.getByRole("button", { name: "Login" })
        )
        expect(screen.getByText("Login successful")).toBeInTheDocument();
        //expect(screen.getByRole("")).toHaveTextContent("Login successful");
        
    })

})