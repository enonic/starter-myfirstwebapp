const portalLib = require('/lib/xp/portal');

exports.get = function (req) {
  const title = 'Hello Web app';
  return  {
  body: `
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" type="text/css" href="${portalLib.assetUrl({ path: 'styles.css' })}"/>
  </head>
  <body>
      <h1>Sweet, "${title}" is working!</h1>
      <img src="${portalLib.assetUrl({ path: 'html5logo.svg' })}" alt=""/>
  </body>
</html>
`
  }
};
