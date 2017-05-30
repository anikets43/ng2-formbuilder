import { FormSamplePage } from './app.po';

describe('form-sample App', () => {
  let page: FormSamplePage;

  beforeEach(() => {
    page = new FormSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
