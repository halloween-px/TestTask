import { useMainContext } from "../context/MainContext"

const Hero = () => {
    const { hero } = useMainContext();
    return (
        <section className="hero">
            <div className="hero-balls">
                <img src="./img/balls/ball-middle.png" className="midle" alt="" />
                <img src="./img/balls/ball-small.png" className="small" alt="" />
                <img src="./img/balls/ball.png" className="ball" alt="" />
            </div>
            {hero.map((el, index) => {
                return (
                    <div className="hero-wrapper" key={`hero${index}`}>
                        <div className="container">
                            <div className="hero-item">
                                <div className="row justify-content-between">
                                    <div className="col-lg-4">
                                        <div className="hero-content">
                                            <h2 className="title">
                                                {el.title.split('|')[0]}
                                                <span className="text-gradient">{el.title.split('|')[1]}</span>
                                            </h2>
                                            <div className="text">
                                                {el.text}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="hero-infoblock">
                                            <h6 className="title">
                                                {/* {el.infoblock.title.split('|')[0]}
                                                <span className="text-gradient">{el.infoblock.title.split('|')[1]}</span>
                                                {el.infoblock.title.split('|')[2]} */}
                                                Вместе c <span className="text-gradient">бесплатной</span> <span className="text-gradient">консультацией </span> мы дарим:
                                            </h6>
                                            <div className="row justify-content-lg-end">
                                                {el.infoblock.content.map((info, index) => {
                                                    return (

                                                        <div className="col-lg-auto col-md-5 col-sm-6 d-sm-block d-none" key={`info${index}`}>
                                                            <h4 className="title-info">{info.title}</h4>
                                                            <p className="text">{info.text}</p>
                                                        </div>
                                                    )
                                                })}
                                                {el.infoblock.content.map((info, index) => {
                                                    return (
                                                        <div key={`ino${index}`} className={`d-sm-none d-block ${index % 2 === 0 ? 'col-5' : 'col-6'}`}>
                                                            <h4 className="title-info">{info.title}</h4>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="d-md-block d-none">
                                            <a href="#" className="btn btn--primary">Получить консультацию</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Hero;