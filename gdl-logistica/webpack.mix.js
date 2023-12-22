const mix = require('laravel-mix');
const webpackConfig = require('./webpack.config');

mix.browserSync({
    proxy: 'http://localhost:8000',
    host: 'localhost',
    open: 'external',
    port: 3000,
    files: [
        'pages/*.htm',
        'pages/**/*.htm',
        'assets/**/*.js',
        'assets/*.css'
    ],
});

mix.webpackConfig(webpackConfig)
    .options({
        processCssUrls: false,
        manifest: false,
        terser: {
            terserOptions: {
                compress: true,
                output: {
                    comments: false
                }
            },
        },
    })
    .setPublicPath('');

mix
    .copy('node_modules/jquery/dist/jquery.min.js', 'assets/vendor/jquery.min.js')
    .copy('node_modules/owl.carousel/dist/owl.carousel.min.js', 'assets/vendor/owl.carousel.js')
    .copy('node_modules/owl.carousel/dist/assets/owl.carousel.min.css', 'assets/vendor/owl.carousel.css')
    .copy('node_modules/owl.carousel/dist/assets/owl.theme.default.min.css', 'assets/vendor/owl.theme.default.css')
    .js('assets/vendor/codeblocks/codeblocks.js', 'assets/vendor/codeblocks/codeblocks.min.js')
    .js('assets/vendor/bootstrap/bootstrap.js', 'assets/vendor/bootstrap/bootstrap.min.js')
    .sass('assets/vendor/bootstrap/bootstrap.scss', 'assets/vendor/bootstrap/bootstrap.css')
    .sass('assets/vendor/bootstrap-icons/bootstrap-icons.scss', 'assets/vendor/bootstrap-icons/bootstrap-icons.css')
    .copy('node_modules/bootstrap-icons/font/fonts/', 'assets/vendor/bootstrap-icons/fonts/')
    .copy('node_modules/photoswipe/dist/photoswipe.css', 'assets/vendor/photoswipe/photoswipe.css')
    .copy('node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js', 'assets/vendor/photoswipe/photoswipe-lightbox.esm.min.js')
    .copy('node_modules/photoswipe/dist/photoswipe.esm.min.js', 'assets/vendor/photoswipe/photoswipe.esm.min.js')
    .copy('node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js', 'assets/vendor/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js')
    .copy('node_modules/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css', 'assets/vendor/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css');
