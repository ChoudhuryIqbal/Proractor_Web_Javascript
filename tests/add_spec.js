

let homepage=require("../pages/homepage");
let data=require("../objectHolder/cal");
let dataCopy=require("../objectHolder/cal copy");
var using = require('jasmine-data-provider');
const { browser } = require("protractor");


describe ('Common Functionality Testing', function (){

    beforeEach(function(){
        browser.driver.manage().window().maximize();
        browser.manage().deleteAllCookies();
        homepage.getURL("https://juliemr.github.io/protractor-demo/");
    })
    it ("It should add two Integers",function(){
       
        homepage.enterFirstNumber(data.firstInput);
        homepage.enterSecondNumber(data.secondInput);
        homepage.enterSubmitBtn();
        browser.sleep(3000);
        homepage.verifyResult(homepage.getResult(),data.result);
    })
    afterEach(function(){
        console.log("Finish Executing Testcases.")
        browser.driver.navigate().refresh();
    })

    using(dataCopy.dataParent, function (text,description) {
        it ("It should add two Integers"+description,function(){
       
            homepage.enterFirstNumber(text.firstInput);
            homepage.enterSecondNumber(text.secondInput);
            homepage.enterSubmitBtn();
            browser.sleep(6000);
            homepage.verifyResult(homepage.getResult(),text.result);
        })
    });
})