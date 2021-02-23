const { I } = inject();

module.exports = {

  _name : '#login_field',
  _password : '#password',
  _submit : {xpath: '//input[@name="commit"]'},
  
  // insert your locators and methods here
  login(url, username, password) {
    I.amOnPage(url);
    I.fillField(this._name, username);
    I.fillField(this._password, password);
    I.click(this._submit);
    I.see("xx");
  }
  
}
