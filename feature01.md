feature01 chào các bạn



product

id int AI PK 
name varchar(255) 
description varchar(255) 
image varchar(255) 
price double 
created_at datetime



user

id int AI PK 
username varchar(45) 
password varchar(45) 
email varchar(255) 
birthday datetime 
role varchar(45) 
created_at datetime 
updated_at datetime




```
 <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="header__container">
                <div className="header__logo"></div>
                <nav className="header__menu"></nav>
                <div className="header__auth"></div>
            </div>
          </div>
        </header>

        <main>
          <section className="new">
            <div className="container">
              <div className="new__container">
                <div className="new__list">
                  <h1 className="new__heading"></h1>
                  <div className="new__item">
                    <div className="new__image">
                     <img srcset="./images/new.png 2x" alt="" />
                    </div>
                    <div className="new__content">
                        <h1 className="new__title">Nha may nuoc</h1>
                        <p className="new__desc">Do la mot noi tuyet voi doi voi tat ca chung ta</p>
                        <span className="new__text"></span>
                        <i className="new__icon"></i>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="hero">
            <div className="container">
              <div className="hero__container">
                <div className="hero__content"></div>
                <div className="hero__image"></div>
              </div>
            </div>
          </section>

          <section className="common"></section>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer__container">
              <div className="footer__column"></div>
              <div className="footer__column"></div>
              <div className="footer__column"></div>
            </div>
          </div>
        </footer>
```
