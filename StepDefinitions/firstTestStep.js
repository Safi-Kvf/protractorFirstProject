let pageObjectFile = require('..//Pages//firstTestPage.js')

var first = function(){

this.Given("Open website", function(callback){

    browser.sleep(4000);

    pageObjectFile.OpenWebUrl();

    browser.sleep(5000);

        callback();

    })

    

this.When("User clicks on something", function(callback){

    browser.sleep(5000);

    pageObjectFile.ClickOnButton();

    browser.sleep(5000);
    
        callback();
    
    })
    
    // element(by.css("img[alt='github logo']")).click();

    // callback();


}

module.exports = first;