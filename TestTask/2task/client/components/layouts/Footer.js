import { useMainContext } from "../context/MainContext";

const Footer = () => {
    const { params } = useMainContext();
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h4 className="title">О компании</h4>
                            <ul className="list list-column">
                                <li className="list-item">
                                    <a href="#">Партнерская программа</a>
                                </li>
                                <li className="list-item">
                                    <a href="#">Вакансии</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <h4 className="title">Меню</h4>
                            <div className="navigation-footer">
                                <ul className="list list-column">
                                    <li className="list-item">
                                        <a href="#">Расчёт стоимости</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Услуги</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Виджеты</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Интеграции</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Наши клиенты</a>
                                    </li>
                                </ul>
                                <ul className="list list-column">
                                    <li className="list-item">
                                        <a href="#">Кейсы</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Благодарственные письма</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Сертификаты</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Блог на Youtube</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Вопрос / Ответ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 ms-auto text-lg-end">
                            <h4 className="title">Контакты</h4>
                            <ul className="list list-column">
                                {params.phones?.map((phone, index) => {
                                    return (
                                        <li className="list-item" key={`phone${index}`} >
                                            <a key={`phone${index}`} href={phone.link}>{phone.phone}</a>
                                        </li>
                                    )
                                })}
                                <li className="list-item social-area">
                                    {params.socials.map((el, index) => {
                                        return (
                                            <a href={el.link} target='_blank' key={`social${index}`}>
                                                <img src={el.icon} alt="#" />
                                            </a>
                                        )
                                    })}
                                </li>
                                {params.contacts.map((el, index) => {
                                    return (
                                        <li key={`contacts${index}`} className="list-item">
                                            <a href="#">
                                                {el.address}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div>©WELBEX 2022. Все права защищены.</div>
                    <div><a href="#">Политика конфиденциальности</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;