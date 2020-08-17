let pageObject = function(){

    var deferred = protractor.promise.defer();

    this.OpenWebUrl = async function(){

        await browser.get("https://www.protractortest.org/#/");
        callback();

        deferred.fulfill();
    }

    this.ClickOnButton = async function(){

     await element(by.css("img[alt='github logo']")).click();

        deferred.fulfill();
    }
    
}

module.exports = new pageObject;
