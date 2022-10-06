import { E2EPage, E2EElement, newE2EPage } from '@stencil/core/testing';
import { GreetService } from './GreetService';
import { provideGreetService } from './provideGreetService';


describe('sgp-greet', () => {
  let page: E2EPage;
  let control: E2EElement;
  let greet: GreetService;

  const NAME = 'NAME';

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(`<sgp-greet name="${NAME}" />`);
    page.waitForChanges();

    control = await page.find('sgp-greet');
    greet = provideGreetService();
  });

  it('value selected on load', async () => {
    const text = control.innerText;

    expect(text).toBe(greet.hello(NAME));
  });
});  