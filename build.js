const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');
const chokidar = require('chokidar');

const build = async () => {

    esbuild.build({
        entryPoints: ['src/js/index.js'],
        bundle: true,
        minify: true,
        outfile: 'asset/style.js',
        watch: process.argv.includes('--watch'),
        plugins: [sassPlugin()],
    }).catch((e) => console.error(e.message))
};

const watcher = chokidar.watch(["src/**/*"]);
console.log("Watching files... \n");

watcher.on("change", () => {
    build();
});
