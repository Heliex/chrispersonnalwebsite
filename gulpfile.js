var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('copy', function() {
    return gulp.src(['front/index.html','front/bower_components/webcomponentsjs/webcomponent-lite.js'])
           .pipe(gulp.dest('dist'));
});
gulp.task('vulcanize',function() {
    return gulp.src([	'front/src/my-app.html','front/src/my-diploma.html',
                     	'front/src/my-experiences.html',
                     	'front/src/my-history.html',
                     	'front/src/my-icons.html',
                     	'front/src/my-projects.html',
                     	'front/src/my-skills',
                     	'front/src/my-svg'])
        .pipe(vulcanize({
        stripeComments : true,
        inlineScripts : true,
        inlineCss : true
    }))
        .pipe(gulp.dest('dist/src'));
});

gulp.task('image', function() { 
    return gulp.src([
            'front/public/images/background.gif',
			'front/public/images/backgroundDrawer.jpg',
			'front/public/images/backgroundDrawer.svg',
			'front/public/images/cardbackground.svg',
			'front/public/images/header.jpg',
			'front/public/images/moiCartoonSvg.svg',
			'front/public/images/siteperso.svg'])
        .pipe(vulcanize({
        stripeComments : true,
        inlineScripts : true,
        inlineCss : true
    }))
        .pipe(gulp.dest('dist/public/images'))
});

gulp.task('default',['vulcanize']);
