const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss")({
    content: [
        "./src/**/*.html",
        "./src/**/*.jsx",
    ],

    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
    plugins: [
        tailwindcss("./tailwind.config.js"),
        cssnano({ preset: "default" }),
        purgecss,
        autoprefixer,
    ],
};
