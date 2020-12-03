# Unofficial Link Amputator API
An NPM package to fetch the canonical links from websites just enter the link and get the canonical link,

# Why use `amputator`?
A lot of links especially AMP (Accelerated Mobile Pages) links are taking over the internet. For example, Google mobile Search’s Top Stories carousel has a premium position above of all other results, which is only accessible for cached AMP pages. This has the effect of further reinforcing Google’s dominance of the Web. (Source: [Amputatorbot](https://www.amputatorbot.com/)). This package will help you get the canonical links without being dependent on a website.  

## How To Use

```js
var Amp = require('amputator');

(async function() {
var amp = new Amp();
var canonical = await amp.canon("https://www.google.com/amp/s/electrek.co/2018/06/19/tesla-model-3-assembly-line-inside-tent-elon-musk/amp/");
console.log(canonical);
})();
```

Which gives the following result,

```js
{
  "success": true,
  "title": "Tesla's new Model 3 assembly line inside a 'tent' is 'way better' and cheaper than other line, says Elon Musk - Electrek",
  "canonical": 'https://electrek.co/2018/06/19/tesla-model-3-assembly-line-inside-tent-elon-musk/'
}
```

## Installation

`npm i amputator --save`

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios
* Cheerio
* JsDOM

## Contact and Contributions

Add a pull request or raise an issue if you wish to contribute.

## License

This project is licensed under GNU General Public License, See [LICENSE](/LICENSE) for more information