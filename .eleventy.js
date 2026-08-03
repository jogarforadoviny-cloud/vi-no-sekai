const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Static passthroughs
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/uploads");

  // Collection: posts (sorted newest first)
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
      return b.data.date - a.data.date;
    });
  });

  // Filter: format date pt-BR
  eleventyConfig.addFilter("dataBr", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale("pt-BR").toFormat("dd 'de' LLLL 'de' yyyy");
  });

  // Filter: slugify
  eleventyConfig.addFilter("slug", (str) => {
    return String(str)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  });

  // Filter: limit array
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  // Filter: array of stars for rating
  eleventyConfig.addFilter("stars", (rating) => {
    const r = Number(rating) || 0;
    return Array.from({ length: 5 }, (_, i) => i < r);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
