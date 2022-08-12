/**
 * a greeting on hello
 */
export class GreetService {
    /** The message */
    public static MESSAGE = 'hello there, how are you doing?';

    /** return the greeting */
    hello() {
        return GreetService.MESSAGE;
    }
}
