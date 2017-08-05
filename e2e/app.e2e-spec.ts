import { FlickrFashionCloudPage } from './app.po';

describe('flickr-fashion-cloud App', () => {
  let page: FlickrFashionCloudPage;

  beforeEach(() => {
    page = new FlickrFashionCloudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
