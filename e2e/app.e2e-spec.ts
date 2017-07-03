import { SegundoandarPage } from './app.po';

describe('segundoandar App', function() {
  let page: SegundoandarPage;

  beforeEach(() => {
    page = new SegundoandarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
