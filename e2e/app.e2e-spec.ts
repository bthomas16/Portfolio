import { BtcPage } from './app.po';

describe('btc App', () => {
  let page: BtcPage;

  beforeEach(() => {
    page = new BtcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
