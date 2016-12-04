/**
 * @author Bilal Cinarli
 */

var watch = function(gulp, options, plugins) {
    gulp.task('watch', function() {
        // --------------------------
        // watch:sass
        // --------------------------
        gulp.watch(options.config.paths.scss + '**/*.scss', ['reload:styles']);

        // --------------------------
        // watch:scripts
        // --------------------------
        gulp.watch('package.json', ['bundle:lib']);
        gulp.watch(options.config.paths.js + '**/*.{js,jsx}', ['bundle:app']);
        gulp.watch(options.config.paths.scripts + '**/*.{js,jsx}', ['reload:scripts']);

        // --------------------------
        // watch:icons
        // --------------------------
        gulp.watch([options.config.paths.svg + '**/*.svg'], ['icons', 'reload:styles']);
    });
};

module.exports = watch;