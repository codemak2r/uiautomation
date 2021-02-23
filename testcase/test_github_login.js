Feature('login');

Scenario('test github login', async ({ I }) => {
    let username = process.env.name;
    let password = process.env.password;
    // 需要配置 include. 把 page 配置进去
    //page.loginPage.login(conf.url, username, password);
    
    // 把 page 配置进 I 对象中，使代码更具语义化。
    I.goto("loginPage").login(conf.url, username, password);
});
