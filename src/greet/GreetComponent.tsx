import { Component, Prop } from '@stencil/core';
import { GreetService } from './GreetService';
import { provideGreetService } from './provideGreetService';

 @Component({
    tag: 'sgp-greet',
    styleUrl: 'GreetComponent.scss',
    shadow: true
})
export class GreetComponent {

    /** Name to greet */
    @Prop() name: string = null;

    service: GreetService = provideGreetService();

    render() {

        return this.service.hello(this.name);
    }
}