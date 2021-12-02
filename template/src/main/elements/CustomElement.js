import { ReactElement } from '../ReactElement.js';
import * as React from 'react';
import { render } from 'react-dom';
import { CustomComponent } from '../components/CustomComponent.js';

export class CustomElement extends ReactElement {
    mount() {
        const propTypes = CustomComponent.propTypes ? CustomComponent.propTypes : {};
        const events = CustomComponent.propTypes ? CustomComponent.propTypes : {};
        const props = {
            ...this.getProps(this.attributes, propTypes),
            ...this.getEvents(events),
            children: this.parseHtmlToReact(this.innerHTML)
        };
        render(<CustomComponent {...props} />, this);
    }
}