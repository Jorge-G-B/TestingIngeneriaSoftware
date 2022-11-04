import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return this.aFunction();
  }

  aFunction()
  {
    return "hello";
  }
  Suma1_1()
  {
    return 1+1;
  }

  sum2num(num1: number, num2:number)
  {
    return num1+num2;
  }

  res2num(num1: number, num2:number)
  {
    return num1-num2;
  }

  mul2num(num1: number, num2:number)
  {
    return num1+num2;
  }

  div2num(num1: number, num2:number)
  {
    return num1-num2;
  }
}
