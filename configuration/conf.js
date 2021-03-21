var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var AllureReporter = require('jasmine-allure-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: '../report/screenshots',
  filename: 'my-report.html'
});

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine2",

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ["../tests/add_spec.js"],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  },

   // Setup the report before any tests start
   beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    
    
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'htmlReport'
      })
    );
    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: '../allure-results'
    }));
  },
  suites :
  {
    smoke : ["../tests/add_spec.js"]
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
 
  
  
};
