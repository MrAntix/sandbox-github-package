/**
 * a greeting on hello
 */
export class GreetService {
    /** The message */
    public static MESSAGE = 'hello {name}, how are you doing?';
    public static DEFAULT_NAME = 'there';

    /**
     * return the greeting 
     * 
     * @param name greet this name
     * @returns greeting
     */
    hello(name: string = GreetService.DEFAULT_NAME) {
        return GreetService.MESSAGE.replace("{name}", name);
    }
}
