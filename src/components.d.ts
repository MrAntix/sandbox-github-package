/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SgpGreet {
        /**
          * Name to greet
         */
        "name": string;
    }
}
declare global {
    interface HTMLSgpGreetElement extends Components.SgpGreet, HTMLStencilElement {
    }
    var HTMLSgpGreetElement: {
        prototype: HTMLSgpGreetElement;
        new (): HTMLSgpGreetElement;
    };
    interface HTMLElementTagNameMap {
        "sgp-greet": HTMLSgpGreetElement;
    }
}
declare namespace LocalJSX {
    interface SgpGreet {
        /**
          * Name to greet
         */
        "name"?: string;
    }
    interface IntrinsicElements {
        "sgp-greet": SgpGreet;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sgp-greet": LocalJSX.SgpGreet & JSXBase.HTMLAttributes<HTMLSgpGreetElement>;
        }
    }
}
