import React from 'react';
import {
    Route,
} from "react-router-dom";
import '../../../sass/_footer.scss';
import logoFooter from '../../../img/icons/logo-footer.svg';
import logoAlt from '../../../img/icons/logoAlt.svg';

const Footer = ({isIndex}) => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__head">
                    <div className="footer__head-img">
                        <img src={logoAlt} alt=""/>
                    </div>
                    <div className="footer__head-content">
                        <nav className="nav-footer">
                            <ul className="nav-footer__list">
                                <li className="nav-footer__item active">
                                    <a className="nav-footer__link" href="/">Главная</a>
                                </li>
                                <li className="nav-footer__item">
                                    <a className="nav-footer__link" href="#">Подбор недвижимости</a>
                                </li>
                                <li className="nav-footer__item">
                                    <a className="nav-footer__link" href="#">Сообщить о неполадках</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="footer-block">
                            <div className="title">
                                Контакты
                            </div>
                            <div className="footer-block__content">
                                <address>
                                    <div className="mb-text">127106 Москва</div>
                                    Лужнецкая набережная, 2/4 с16
                                </address>
                                <a href="tel:74958220052" className="footer-block__link">
                                    <div className="mb-text">Телефон: +7 (495) 822-00-52</div>
                                </a>
                                <a href="mailto:info@acre.rent" className="footer-block__link">Email: info@acre.rent</a>
                            </div>
                            <ul className="footer-block__socials">
                                <li className="socials-item">
                                    <a className="socials-item__link" href="#">
                                        <svg className="socials-item__icon" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M24 11.687C24 14.9217 22.8522 17.687 20.5565 19.9826C18.2609 22.2783 15.4783 23.4261 12.2087 23.4261C10.2609 23.4261 8.36522 22.9391 6.52174 21.9652L0 24L2.08696 17.7391C0.973913 15.8609 0.417391 13.8435 0.417391 11.687C0.417391 8.45217 1.56522 5.69565 3.86087 3.41739C6.15652 1.13913 8.93913 0 12.2087 0C15.4783 0 18.2609 1.13913 20.5565 3.41739C22.8522 5.69565 24 8.45217 24 11.687ZM12.2087 1.82609C9.46087 1.82609 7.12174 2.7913 5.1913 4.72174C3.26087 6.65217 2.29565 8.97391 2.29565 11.687C2.29565 13.8435 2.92174 15.7739 4.17391 17.4783L2.92174 21.1304L6.78261 19.9304C8.48696 21.0087 10.2957 21.5478 12.2087 21.5478C14.9565 21.5478 17.2957 20.5826 19.2261 18.6522C21.1565 16.7217 22.1217 14.4 22.1217 11.687C22.1217 8.97391 21.1565 6.65217 19.2261 4.72174C17.2957 2.7913 14.9565 1.82609 12.2087 1.82609ZM18.1565 14.4C18.1217 14.3652 17.9478 14.2435 17.6348 14.0348C17.5304 14 17.2 13.8522 16.6435 13.5913C16.087 13.3304 15.7565 13.1826 15.6522 13.1478C15.3391 13.0435 15.113 13.0783 14.9739 13.2522C14.9391 13.3565 14.8609 13.487 14.7391 13.6435C14.6174 13.8 14.487 13.9565 14.3478 14.113C14.2087 14.2696 14.1217 14.3652 14.087 14.4C13.9478 14.6087 13.7391 14.6261 13.4609 14.4522C12.2783 13.8609 11.4957 13.3913 11.113 13.0435C10.8696 12.8 10.6348 12.5391 10.4087 12.2609C10.1826 11.9826 9.97391 11.7217 9.78261 11.4783C9.5913 11.2348 9.49565 11.0957 9.49565 11.0609C9.3913 10.8174 9.44348 10.6261 9.65217 10.487C9.7913 10.2783 9.93043 10.1043 10.0696 9.96522L10.3826 9.49565C10.4522 9.32174 10.4348 9.14783 10.3304 8.97391C10.1913 8.52174 9.89565 7.8087 9.44348 6.83478C9.33913 6.52174 9.13043 6.36522 8.81739 6.36522H8.24348C7.93043 6.36522 7.66956 6.48696 7.46087 6.73043C6.8 7.3913 6.46957 8.17391 6.46957 9.07826C6.46957 9.91304 6.85217 10.9043 7.61739 12.0522L7.72174 12.2087C7.7913 12.313 7.86956 12.4261 7.95652 12.5478C8.04348 12.6696 8.16522 12.8261 8.32174 13.0174C8.47826 13.2087 8.63478 13.3913 8.7913 13.5652C8.94783 13.7391 9.13043 13.9391 9.33913 14.1652C9.54783 14.3913 9.77391 14.6087 10.0174 14.8174C10.2609 15.0261 10.513 15.2261 10.7739 15.4174C11.0348 15.6087 11.3217 15.7826 11.6348 15.9391C11.9478 16.0957 12.2609 16.2435 12.5739 16.3826C13.1304 16.5913 13.6087 16.7652 14.0087 16.9043C14.4087 17.0435 14.7217 17.1304 14.9478 17.1652C15.1739 17.2 15.3391 17.2174 15.4435 17.2174C15.5478 17.2174 15.6696 17.2 15.8087 17.1652C15.9478 17.1304 16.0348 17.113 16.0696 17.113C16.3826 17.0783 16.7565 16.9217 17.1913 16.6435C17.6261 16.3652 17.8957 16.0696 18 15.7565C18.2783 15.0261 18.3304 14.5739 18.1565 14.4Z" fill="#DDE2FF"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="socials-item">
                                    <a className="socials-item__link" href="#">
                                        <svg className="socials-item__icon" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M20.8449 4.18334L20.8582 4.17822L20.8711 4.17237C21.1347 4.05312 21.3003 4.11657 21.3778 4.19146C21.4619 4.27281 21.591 4.512 21.4619 5.02983L21.4597 5.0384L21.4579 5.04704L18.4389 19.275L18.4385 19.2768C18.3469 19.7161 18.199 19.8379 18.1276 19.87C18.0551 19.9026 17.8772 19.9265 17.529 19.7409L12.9581 16.3646L12.6167 16.1125L12.3124 16.4084L10.1028 18.557C10.1026 18.5572 10.1024 18.5574 10.1023 18.5575C10.096 18.5636 10.0898 18.5696 10.0838 18.5754L10.3267 14.9448L17.6777 9.38151L17.6933 9.36972L17.7079 9.35674C17.8298 9.2486 18.0029 9.05674 18.013 8.78897C18.0187 8.63738 17.969 8.49105 17.8714 8.37483C17.7805 8.26652 17.6683 8.20753 17.5759 8.17579C17.3968 8.1143 17.2066 8.12399 17.0487 8.15671C16.8883 8.18994 16.7211 8.25494 16.5587 8.35075L7.22441 12.8994L2.8619 11.5385L2.8619 11.5385L2.85967 11.5378C2.67853 11.4822 2.57505 11.4218 2.52356 11.3797C2.53652 11.3641 2.55552 11.3439 2.58311 11.3195C2.68022 11.2336 2.85016 11.127 3.11825 11.019L20.8449 4.18334Z" stroke="#DDE2FF"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="socials-item">
                                    <a className="socials-item__link" href="#">
                                        <svg className="socials-item__icon" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M13.1982 12.99H12.6982V13.49V21H9.69818V13.49V12.99H9.19818H7.3544L7.65091 10.01H9.19818H9.69818V9.51V7.5C9.69818 6.30653 10.1723 5.16193 11.0162 4.31802C11.8601 3.47411 13.0047 3 14.1982 3H16.6982V6H14.1982C13.8004 6 13.4188 6.15804 13.1375 6.43934C12.8562 6.72064 12.6982 7.10217 12.6982 7.5V9.51V10.01H13.1982H16.646L16.3495 12.99H13.1982Z" stroke="#DDE2FF"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="socials-item">
                                    <a className="socials-item__link" href="#">
                                        <svg className="socials-item__icon"  width="24" height="24" viewBox="0 0 20 20">
                                            <path d="M9.99999 5.19249C7.33983 5.19249 5.19296 7.33937 5.19296 9.99953C5.19296 12.6597 7.33983 14.8066 9.99999 14.8066C12.6601 14.8066 14.807 12.6597 14.807 9.99953C14.807 7.33937 12.6601 5.19249 9.99999 5.19249ZM9.99999 13.1237C8.27968 13.1237 6.87577 11.7198 6.87577 9.99953C6.87577 8.27921 8.27968 6.87531 9.99999 6.87531C11.7203 6.87531 13.1242 8.27921 13.1242 9.99953C13.1242 11.7198 11.7203 13.1237 9.99999 13.1237ZM15.0039 3.87531C14.3828 3.87531 13.8812 4.37687 13.8812 4.99796C13.8812 5.61906 14.3828 6.12062 15.0039 6.12062C15.625 6.12062 16.1266 5.6214 16.1266 4.99796C16.1267 4.85048 16.0978 4.70441 16.0415 4.56812C15.9851 4.43183 15.9024 4.308 15.7981 4.20371C15.6939 4.09943 15.57 4.01674 15.4337 3.96039C15.2974 3.90403 15.1514 3.87512 15.0039 3.87531V3.87531ZM19.3703 9.99953C19.3703 8.70578 19.382 7.42374 19.3094 6.13234C19.2367 4.63234 18.8945 3.30109 17.7976 2.20421C16.6984 1.10499 15.3695 0.76515 13.8695 0.692494C12.5758 0.619838 11.2937 0.631557 10.0023 0.631557C8.70858 0.631557 7.42655 0.619838 6.13515 0.692494C4.63515 0.76515 3.3039 1.10734 2.20702 2.20421C1.1078 3.30343 0.767958 4.63234 0.695302 6.13234C0.622645 7.42609 0.634364 8.70812 0.634364 9.99953C0.634364 11.2909 0.622645 12.5753 0.695302 13.8667C0.767958 15.3667 1.11015 16.698 2.20702 17.7948C3.30624 18.8941 4.63515 19.2339 6.13515 19.3066C7.4289 19.3792 8.71093 19.3675 10.0023 19.3675C11.2961 19.3675 12.5781 19.3792 13.8695 19.3066C15.3695 19.2339 16.7008 18.8917 17.7976 17.7948C18.8969 16.6956 19.2367 15.3667 19.3094 13.8667C19.3844 12.5753 19.3703 11.2933 19.3703 9.99953V9.99953ZM17.3078 15.5261C17.1367 15.9526 16.9305 16.2714 16.6 16.5995C16.2695 16.93 15.9531 17.1362 15.5266 17.3073C14.2937 17.7972 11.3664 17.687 9.99999 17.687C8.63358 17.687 5.7039 17.7972 4.47108 17.3097C4.04452 17.1386 3.72577 16.9323 3.39765 16.6019C3.06718 16.2714 2.86093 15.955 2.68983 15.5284C2.20233 14.2933 2.31249 11.3659 2.31249 9.99953C2.31249 8.63312 2.20233 5.70343 2.68983 4.47062C2.86093 4.04406 3.06718 3.72531 3.39765 3.39718C3.72811 3.06906 4.04452 2.86046 4.47108 2.68937C5.7039 2.20187 8.63358 2.31203 9.99999 2.31203C11.3664 2.31203 14.2961 2.20187 15.5289 2.68937C15.9555 2.86046 16.2742 3.06671 16.6023 3.39718C16.9328 3.72765 17.1391 4.04406 17.3101 4.47062C17.7976 5.70343 17.6875 8.63312 17.6875 9.99953C17.6875 11.3659 17.7976 14.2933 17.3078 15.5261Z" fill="white"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-block">
                            <div className="title">
                                Правовая информация
                            </div>
                            <div className="footer-block__content">
                                <div className="mb-text">
                                    Информация, размещенная на сайте,<br/>
                                    не является публичной офертой.
                                </div>
                                © 2019, Все права защищены.
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isIndex ?
                        <div className="footer__form">
                            <div className="title">
                                Подберите мне недвижимость
                            </div>
                            <form action="#" className="form">
                                <div className="form-head">
                                    <label><input className="inputCommon" type="text" placeholder="ФИО"/></label>
                                    <label><input className="inputCommon" type="number" placeholder="Телефон"/></label>
                                    <label><input className="inputCommon" type="mail" placeholder="Электронная почта"/></label>
                                </div>
                                <div className="form-bottom">
                                    <label className="form-bottom__label">
                                        <input className="hidden" type="checkbox"/>
                                        <span className="form-bottom__text">
                                Я согласен<br/>
                                <a className="form-bottom__link" href="#">с политикой обработки персональных данных</a>
                            </span>
                                    </label>
                                    <button className="btnCommon form-btn">Отправить</button>
                                </div>
                            </form>
                        </div>
                        : <></>
                }
                <div className="footer__bottom">
                    <a href="/">
                        <img className="img" src={logoFooter} alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
