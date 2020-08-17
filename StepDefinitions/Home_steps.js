
var home = function()
{


this.Given("Open website", function (callback) {
    // Write code here that turns the phrase above into concrete actions
    browser.get("https://dassdevarajan.github.io/demo-app/");

    //wait for 4 seconds
    browser.sleep(6000);

    //maximize the browser
    browser.manage().window().maximize();




    callback();
  });



  this.When("User click on add product button", function (callback) {
    
    element(by.cssContainingText('.menubtn',' Add Product')).click();
    browser.sleep(3000);
  

    callback();
  });



  this.When("User enter name,description,category,quantity,unit price, and supplier", function (callback) {
    
    
    element(by.id('name')).sendKeys("Samsung S1");
    browser.sleep(2000);
  
    element(by.id('desc')).sendKeys("This is Samsung phone with latest techs");
    browser.sleep(2000);

   // let alloptions = element.all(by.name('category'));
    //alloptions[0].click();

    element(by.xpath('/html/body/app-root/app-product-list/div[2]/app-product/div/form/div[3]/select/option[1]')).click();

    browser.sleep(2000);

    element(by.id('quantity')).sendKeys("20");
    browser.sleep(2000);

    element(by.id('unitprice')).sendKeys("5000");
    browser.sleep(2000);

    element(by.id('supname')).sendKeys("Saif mobile");
    browser.sleep(2000);

    element(by.id('submit')).click();
    browser.sleep(2000);

    callback();
  });



  this.Then("Verify that prouduct added successfully", function (callback) {
    
    var actual_res = element(by.xpath('/html/body/app-root/app-product-list/div[2]/app-product/div/div')).getText();

    var expected_res = "Product is successfully added!";

    if (actual_res==expected_res)
    {
      console.log("test case passed");
    }
    
    browser.sleep(2000);
  

    callback();
  });


  this.When("User click on delete icon", function (callback) {
    
    element.all(by.tagName('tr')).get(1).element(by.id('delete')).click();
    browser.sleep(2000);
  

    callback();
  });


  this.When("User click on view  icon", function (callback) {
    
     //clciking on view icon
     element.all(by.tagName('tr')).last().element(by.id('view')).click();
     browser.sleep(7000);
  

    callback();
  });



  this.Then("Verify that the product details on the previous page are same as on this page", function (callback) {
    
     //storing values in variable to veridy it on view page
     var product_name = "1001 Activities Book";
    
     var description ="Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.";
    
     var category ="Books";
    
     var quantity = "300";
    
     var unit_price = "4"; 
    
     var supplier = "ABC Publications";
    
     var returnable ="false"; 

     if (element.all(by.tagName('tr')).get(0).element(by.tagName('td')).getText() == product_name)
     {

      console.log("test case passed: correct name displayed");


     }

     if (element.all(by.tagName('tr')).get(1).element(by.tagName('td')).getText() == description)
     {

      console.log("test case passed: correct name displayed");


     }

     if (element.all(by.tagName('tr')).get(2).element(by.tagName('td')).getText() == quantity)
     {

      console.log("test case passed: correct name displayed");


     }

     if (element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText() == unit_price)
     {

      console.log("test case passed: correct name displayed");


     }
     if (element.all(by.tagName('tr')).get(4).element(by.tagName('td')).getText() == supplier)
     {

      console.log("test case passed: correct name displayed");


     }

     if (element.all(by.tagName('tr')).get(5).element(by.tagName('td')).getText() == category)
     {

      console.log("test case passed: correct name displayed");


     }

     

    callback();
  });



}
module.exports=home;