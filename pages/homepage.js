let homepage=function ()
{
    let firstNumber_input=element (by.model('first') );
    let secondNumber_input= element(by.model('second'));
    let submit_btn=element(by.id('gobutton'));
    let result_txt=element(by.css('.ng-binding'));

    

    this.enterFirstNumber=function (first){
        firstNumber_input.sendKeys(first);

    };
    this.getURL=function (url){
        browser . get(url);
    };

    this.enterSecondNumber=function(second){
        secondNumber_input.sendKeys(second);
    }
    this.enterSubmitBtn=function(){
        submit_btn.click();
    }

    this.getResult=function(){
        return result_txt.getText();
    }


    this.verifyResult=function(actual,expected){
        expect (actual).toBe(expected);
    }
}
module.exports=new homepage();