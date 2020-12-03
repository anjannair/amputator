const axios = require('axios');
const cheerio = require('cheerio');
const { JSDOM } = require("jsdom");

module.exports = class Amp {
  async canon(link) {

  //The final output
  let final;

  //Checks if the canonical links is found
  let found = false;

  //Fetching the HTML using axios
  const { data } = await axios.get(link);

  //Using cheerio to load the HTML fetched
  const $ = await cheerio.load(data);

  //Fetching the title of the site
  const title = await $('title')[0].children[0].data;

  //Gets the canonical (non-amp) link from the HTML
  const canonical = await $('link[rel = "canonical"]')[0].attribs.href;

  //Checks if canonical is present
  if (canonical) found = true;

  //If no canonical then return not found
  if (!canonical) canonical = "Not Found";

  //Pushes the final API
  final = await {
    "success": found,
    "title": title,
    "canonical": canonical,
  };
  return final;
}
}