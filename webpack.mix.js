let mix = require('laravel-mix');

mix.js("src/js/app.js", "assets/js")
    .postCss("src/css/app.css", "assets/css", [
     require("tailwindcss"),
    ])
    .copyDirectory(
        'src/images', 'assets/images'
    )
    .disableSuccessNotifications();