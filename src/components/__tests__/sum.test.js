import { TestEnvironment } from "jest-environment-jsdom";
import { sum } from "../sum";

  test ("",()=>{
    const result=sum(3,4);

    expect (result).tobe(7);
  })