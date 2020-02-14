import blc from 'broken-link-checker';
import should from 'should';
//
import Server from './server';

const scanForBrokenLinks = (serveUrl) => {
  const scanResult = [];
  const options = {
    excludedKeywords: [
      'https://t.me/safenetwork',
      'https://youtu.be',
      'https://www.youtube.com',
      'https://global.bittrex.com'
    ],
  };
  return new Promise((resolve, rejects) => {
    var siteChecker = new blc.SiteChecker(options, {
      robots: function (robots, customData) { },
      html: function (tree, robots, response, pageUrl, customData) { },
      junk: function (result, customData) { },
      link: function (result, customData) {
        //=> HTTP_404
        if (result.broken) {

          // Exclude safe:// url
          if (result.url.original && result.url.original.indexOf('safe://') === 0) {
            return
          }

          scanResult.push({
            url: result.url.resolved,
            reason: blc[result.brokenReason]
          })

          console.log(`${result.base.resolved} => ${result.url.resolved} :: ${blc[result.brokenReason]}`);
        } else if (result.excluded) {
          console.log(result.excludedReason);
        }
      },
      page: function (error, pageUrl, customData) {},
      site: function (error, siteUrl, customData) {},
      end: function () {
        resolve(scanResult);
      }
    });
    siteChecker.enqueue(serveUrl, {});
  });
};

describe('Site link checker', () => {
  let serve = null
  before(() => {
    serve = new Server()
    return serve.start()
  });

  after(() => {
    serve.stop()
  })

  it('should check for all broken links', function () {
    this.timeout(0);
    const siteUrl = `http://localhost:${serve.getPort()}`;
    return scanForBrokenLinks(siteUrl)
    .then((res) => {
      should(res.length === 0).be.ok()
    })
  });
});
