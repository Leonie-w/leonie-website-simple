import path from "path";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("website/main.css");
  eleventyConfig.addPassthroughCopy("website/src");


  return {
    dir: {
      input: "website",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
}
