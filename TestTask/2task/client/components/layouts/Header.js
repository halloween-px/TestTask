import { useEffect } from "react";
import { useMainContext } from "../context/MainContext";
import Link from 'next/link';

const Header = () => {
    const { navigation, params } = useMainContext();
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-3 d-md-block d-none">
                            <Link href="/" >
                                <a className="logo">
                                    <img src="./img/logo/logo_welbex.svg" alt="welbex" />
                                    <span className="text">крупный интегратор CRM в Росcии и ещё 8 странах</span>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-auto ms-lg-0 ms-auto">
                            <nav className="navigation">
                                <ul className="list">
                                    {navigation.map((nav) => {
                                        return (
                                            <li className="list-item" key={nav.link}>
                                                <Link href={nav.link}>
                                                    <a>{nav.title}</a>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-auto ms-auto d-lg-block d-none">
                            <div className="phone-area">
                                {params.phones.filter((el, index) => index === 0).map((phone, index) => {
                                    return (
                                        <a key={`phone${index}`} href={phone.link}>{phone.phone}</a>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-auto d-xl-block d-none">
                            <ul className="list list-social">
                                {params.socials.map((el, index) => {
                                    return (
                                        <li key={`social${index}`} className="list-item">
                                            <a href={el.link} target='_blank'>
                                                <img src={el.icon} alt="#" />
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;