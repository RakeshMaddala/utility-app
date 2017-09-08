import { UtilityAppPage } from './app.po';

describe('utility-app App', () => {
  let page: UtilityAppPage;

  beforeEach(() => {
    page = new UtilityAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
