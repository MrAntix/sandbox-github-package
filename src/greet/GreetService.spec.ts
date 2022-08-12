import { GreetService } from "./GreetService";

describe('greeter', () => {

    it('say hello', () => {

        const greeter = new GreetService();

        const result = greeter.hello();

        expect(result).toBe(GreetService.MESSAGE);

    });

});