const { I } = inject();

module.exports = {

  _name : '#login_field',
  _password : '#password',
  _submit : {xpath: '//input[@name="commit"]'},
  _url : "https://github.com/login",
  _username : "01x01",
  _userpassword : "xxxx",

  // insert your locators and methods here
  login() {
    I.amOnPage(this._url);
    I.fillField(this._name, this._username);
    I.fillField(this._password, this._userpassword);
    I.click(this._submit);
    I.see("xx");
  }
  
}
