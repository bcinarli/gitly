/**
 * @author Bilal Cinarli
 */

var browserify = require('browserify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer');

var bundle = function(gulp, options, plugins) {
    gulp.task('bundle:lib', function() {
        var dependencies = Object.keys(options.pkg.dependencies || {});

        var b = browserify({debug: true});

        dependencies.forEach(function(item) {
            b.require(item);
        });

        b.on('error', plugins.util.log);

        b.bundle()
            .pipe(source(options.pkg.name + '.lib.js'))
            .pipe(buffer())
            .pipe(plugins.sourcemaps.init({loadMaps: true}))
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(plugins.notify({message: 'Lib Bundled', onLast: true}))
            .pipe(gulp.dest(options.config.paths.scripts))
    });

    gulp.task('bundle:app', function() {
        var dependencies = Object.keys(options.pkg.dependencies || {});
        var b            = browserify(options.config.paths.js + 'index.js', {
            debug:        true,
            extensions:   ['.js', '.jsx', '.es6'],
            path:         [options.config.paths.js],
            cache:        {},
            packageCache: {}
        });

        b.transform(babelify);

        dependencies.forEach(function(item) {
            b.external(item);
        });

        b.on('update', function() {
            plugins.util.log('-> bundling...');
            bundler();
        });

        b.on('error', plugins.util.log);

        function bundler() {
            return b.bundle()
                .pipe(source(options.pkg.name + '.js'))
                .pipe(buffer())
                .pipe(plugins.sourcemaps.init({loadMaps: true}))
                .pipe(plugins.sourcemaps.write('./'))
                .pipe(plugins.notify({message: 'App Bundled', onLast: true}))
                .pipe(gulp.dest(options.config.paths.scripts))
        }

        bundler();
    });

    gulp.task('bundle:all', ['bundle:lib', 'bundle:app']);
};

module.exports = bundle;