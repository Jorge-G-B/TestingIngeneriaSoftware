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
  aSuma()
  {
    return 1+1;
  }

  sumar2numeros(num1: number, num2:number)
  {
    return num1+num2;
  }

  FtoC(fahrenheit:number) {
    return (5/9) * (fahrenheit-32);
  }
}
