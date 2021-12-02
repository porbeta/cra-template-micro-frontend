import { CustomElement } from '../../main/elements/CustomElement.js';
import { expect } from 'chai';
import '../../index.js';


test('should create CustomElement with properties', () => {
    const element = new CustomElement();

    element.setAttribute('customProperty', "Success!");
    element.addEventListener('onCustomEvent', () => {});
    element.connectedCallback();

    expect(element.getElementsByTagName('p')[0].innerHTML).to.equal("Hello <strong>Success!</strong> from your friendly React component.");
    
    element.disconnectedCallback();

    expect(element.innerHTML).to.equal("");
});