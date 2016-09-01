var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('copy', function() {
    return gulp.src(['front/index.html','front/bower_components/webcomponentsjs/webcomponent-lite.js'])
            .pipe(vulcanize());
           .pipe(gulp.dest('dist'));
});
gulp.task('vulcanize',function() {
    return gulp.src(['front/src/my-app.html'])
        .pipe(vulcanize({
        stripeComments : true,
        inlineScripts : true,
        inlineCss : true
    }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['vulcanize']);
