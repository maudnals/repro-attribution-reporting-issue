const express = require('express');
const port = 3000;

const html =
  `<html>` +
  // IFRAME 0 - example.com with a protocol-relative URL (no www)
  `IFRAME 0 src="//example.com/"<iframe src="//example.com/" allow="attribution-reporting" frameborder="1"></iframe><br/>` +
  // IFRAME 1 - example.com with a protocol-relative URL (with www)
  `IFRAME 1 src="//www.example.com/"<iframe src="//www.example.com/" allow="attribution-reporting" frameborder="1"></iframe><br/>` +
  // IFRAME 2 - example.com with an HTTPS URL
  `IFRAME 2 src="https://example.com/"<iframe src="https://example.com/" allow="attribution-reporting" frameborder="1"></iframe><br/>` +
  // IFRAME 3 - example.com with an HTTP URL
  `IFRAME 3 src="http://example.com/"<iframe src="http://example.com/" allow="attribution-reporting" frameborder="1"></iframe><br/>` +
  // IFRAME 4 - wikipedia.org with a protocol-relative URL (no www)
  `IFRAME 4 src="//wikipedia.org/" <iframe src="//wikipedia.org/" allow="attribution-reporting" frameborder="1"></iframe><br/>` +
  // IFRAME 5 - wikipedia.org with a protocol-relative URL (with www)
  `IFRAME 5 src="//www.wikipedia.org/"<iframe src="//www.wikipedia.org/" allow="attribution-reporting" frameborder="1"></iframe><br/>` +
  // IFRAME 6 - wikipedia.org with an HTTPS URL
  `IFRAME 6 src="https://wikipedia.org/"<iframe src="https://wikipedia.org/" allow="attribution-reporting" frameborder="1"></iframe>` +
  `</html>`;

const app = express();

app.get('/', (req, res) => {
  res.send(html);
});

app.listen(port, () => {
  console.log(`HTTP app listening. Open http://localhost:${port}/`);
});
