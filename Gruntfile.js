module.exports = function(grunt) {

  // All configuration goes here
  grunt.initConfig({

    jekyll: {
      build : {
        dest: '_site'
      }
    },

    watch: {
      jekyll: {
        files: [
          '_layouts/*.html',
          '_includes/*.md',
          '_posts/*.md',
          './*.html',
          'css/**/*.css',
          'css/**/*.png',
          'css/**/*.jpg',
          'css/**/*.jpeg',
          'js/**/*.js',
          'assets/**/*.png',
          'assets/**/*.jpg',
          'assets/**/*.jpeg',
          'bower_components/**/*.js'],
        tasks: ['jekyll']
      }
    },

    browserSync: {
      files: {
        src : ["_site/**.*.html", "_site/assets/**", "_site/css/**", "_site/js/**/*.js"] // FIXME: probably could be improved
      },
      options: {
        watchTask: true,
        ghostMode: { // syncs user actions across browsers
          clicks: true,
          scroll: true,
          links: true,
          forms: true
        },
        tunnel: "supracademy", // Attempt to use the URL http://supracademy.localtunnel.me
        open: "external",
        server: {
          baseDir: '_site'
        }
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Custom tasks
  grunt.registerTask('build', ['jekyll']);
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
};
