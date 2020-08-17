exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
   
    //SELENIUM_PROMISE_MANAGER: 'false',
 // Capabilities to be passed to the webdriver instance.
 
//  multiCapabilities: [
//   {'browserName': 'chrome'},
//   {'browserName': 'firefox'},
  
// ],



    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
   
    // require feature files
    specs: [
      '..//Features//Home.feature' // accepts a glob //Home
    ],
   
    cucumberOpts: {
      // require step definitions
      require: [
        '..//StepDefinitions//Home_steps.js' ,// accepts a glob //Home_steps
        '..//env.js'
      ],

     // format: 'json: results.json',
    },

  //    plugins: [{
  //     package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
  //      options:{
  //         // read the options part for more options
  //         automaticallyGenerateReport: true,
  //          removeExistingJsonReportFile: true
  //      }
  // }],

  // onPrepare: function(){

  //   browser.driver.manage().window().maximize();
  // },


  };