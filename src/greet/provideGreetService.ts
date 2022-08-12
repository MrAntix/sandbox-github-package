import { GreetService } from './GreetService';

/**
 * provider for the greet service
 *
 * @returns a new greet service
 */

export function provideGreetService(): GreetService {

    return new GreetService();
}
