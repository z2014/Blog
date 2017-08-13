'use strict';
var path = require('path')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/test.js'
    ],
    preprocessors: {
      'test/test.js': ['webpack']
    },
    plugins: ['karma-webpack', 'karma-mocha',, 'karma-chrome-launcher', 'karma-firefox-launcher', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['Chrome'],
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage.json',
      }, {
        type: 'lcov',
        subdir: '.'
      }, {
        type: 'text-summary'
      }]
    },
    webpack: {
      module: {
        loaders: [{
          test: /\.js/,
          loaders: ['babel-loader'],
          query: {
            presets: ["react", "stage-0", "es2015"]
          }
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};