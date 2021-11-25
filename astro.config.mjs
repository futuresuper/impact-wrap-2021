export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: ["@astrojs/renderer-svelte"],
  buildOptions: {
    sitemap: false,
    site: "https://www.impactwrap.futuresuper.com.au/",
  },
});
