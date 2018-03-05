import { Ansyn.AngularModulePage } from './app.po';

describe('ansyn.angular-module App', () => {
  let page: Ansyn.AngularModulePage;

  beforeEach(() => {
    page = new Ansyn.AngularModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
