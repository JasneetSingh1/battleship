import { Ship } from "./ship";


describe("Ship Function", () => {

    it("Create object", () =>{
        const boat = Ship(2);
        expect(boat).toBeDefined();
    })
})