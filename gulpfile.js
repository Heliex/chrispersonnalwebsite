var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('copy', function() {
    return gulp.src('front/index.html')
            .pipe(vulcanize({
            abspath : '',
			stripeComments : true,
			inlineScripts : true,
			inlineCss : true,
            excludes: ['//fonts.googleapis.com/*']
    }))
            .pipe(gulp.dest('dist'));
});
gulp.task('vulcanize',function() {
    return gulp.src(['front/src/elements.html'])
        .pipe(vulcanize({
        abspath : '',
        stripeComments : true,
        inlineScripts : true,
        inlineCss : true,
        excludes : ['//fonts.googleapis.com/*']
    }))
        .pipe(gulp.dest('dist/src'));
});

gulp.task('default',['vulcanize']);
