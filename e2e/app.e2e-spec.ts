import { Citibike2Page } from './app.po';

describe('citibike2 App', function() {
  let page: Citibike2Page;

  beforeEach(() => {
    page = new Citibike2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
