var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var minify = require('gulp-minify');

gulp.task('copy', function() {
    return gulp.src('front/index.html')
            .pipe(vulcanize({
            abspath : '',
			stripeComments : true,
			inlineScripts : true,
			inlineCss : true
    }))     .pipe(minify())
            .pipe(gulp.dest('dist'));
});
gulp.task('vulcanize',function() {
    return gulp.src(['front/src/my-app.html','front/src/my-history.html','front/src/my-diploma.html','front/src/my-skills.html','front/src/my-svg.html','front/src/my-projects.html','front/src/my-experiences.html'])
        .pipe(vulcanize({
        abspath : '',
        stripeComments : true,
        inlineScripts : true,
        inlineCss : true,
        stripExcludes : ['bower_components/polymer/polymer.html','my-svg.html','bower_components/paper-ripple/paper-ripple.html']
    }))
        .pipe(minify())
        .pipe(gulp.dest('dist/src'));
});

gulp.task('vulcanize-minify-polymer', function() {
    
    return gulp.src('front/bower_components/polymer/polymer.html')
    .pipe(vulcanize({
         abspath : '',
        stripeComments : true,
        inlineScripts : true,
        inlineCss : true
        
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist/bower_components/polymer/'));
})
gulp.task('default',['vulcanize']);
