import { E2EPage, E2EElement, newE2EPage } from '@stencil/core/testing';
import { GreetService } from './GreetService';


describe('sgp-greet', () => {
  let page: E2EPage;
  let control: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(`<sgp-greet />`);
    page.waitForChanges();

    control = await page.find('sgp-greet');
  });

  it('value selected on load', async () => {
    const text = control.innerText;

    expect(text).toBe(GreetService.MESSAGE);
  });
});  