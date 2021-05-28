module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/*.js',
        './src/*.jsx',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/components/*.js',
        './src/components/*.jsx',
        './public/index.html',
      ],
      // defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
