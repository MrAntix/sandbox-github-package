import { Component } from '@stencil/core';
import { GreetService } from './GreetService';
import { provideGreetService } from './provideGreetService';

@Component({
    tag: 'sgp-greet',
    styleUrl: 'GreetComponent.scss',
    shadow: true
})
export class GreetComponent {

    service: GreetService = provideGreetService();

    render() {

        return this.service.hello();
    }
}