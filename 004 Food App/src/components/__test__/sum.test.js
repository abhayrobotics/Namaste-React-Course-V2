// The above code is just an example of testing and does not link the the main project 
import {sum} from "../sum";

// syntax 
// test("Descrition" ,()=>{ testcase})
// it("Descrition" ,()=>{ testcase})


test("sum function return the sum of two numbers" ,()=>{

    const result = sum(3,4)

    // Assertion
    expect(result).toBe(7)
 })

