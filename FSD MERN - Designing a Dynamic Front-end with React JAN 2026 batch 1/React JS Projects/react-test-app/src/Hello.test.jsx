import { render ,screen} from "@testing-library/react";
import { describe, expect } from "vitest";
import Hello from "./Hello";

// it is container which hold more than one test case 
describe("Hello Component Testing ",()=> {

    // it is used to write single test case
    test("Hello Component should render correctly", ()=> {
        render(<Hello />)
        expect(screen.getByText("Hello, Vite with JEST!")).toBeInTheDocument();
    })

})