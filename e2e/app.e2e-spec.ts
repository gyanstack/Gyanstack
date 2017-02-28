import { GyanstackPage } from './app.po';

describe('gyanstack App', function() {
  let page: GyanstackPage;

  beforeEach(() => {
    page = new GyanstackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
