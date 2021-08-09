import React from 'react'
import { Link } from 'react-router-dom'
import './main-page.css'
import Slider from '../silder'
import Footer from '../footer'

const MainPage = () => {
    return (
        <div>


            <main>
                <section className="section__main">
                    <div className="section__main__item">
                        <img src={`${window.location.origin}/images/woman.jpg`} alt="" />

                        <Link to="/shop?sex=woman">Жінкам</Link>
                    </div>
                    <div className="section__main__item">
                        <img src={`${window.location.origin}/images/man.jpg`} alt="" />

                        <Link to="/shop?sex=man">Чоловікам</Link>
                    </div>
                    <div className="section__main__item">
                        <img src={`${window.location.origin}/images/children.jpg`} alt="" />

                        <Link to="/shop?sex=children">Дітям</Link>
                    </div>
                </section>

                <section className="new__sale">
                    <div className="new__sale__item">
                        <img src={`${window.location.origin}/images/new.png`} alt="" />

                        <Link to="/shop?new=1">new</Link>
                    </div>
                    <div className="new__sale__item">
                        <img src={`${window.location.origin}/images/sale.png`} alt="" />

                        <Link to="/shop?sale=1">sale</Link>
                    </div>
                </section>

                <section className="order__rigthnow">
                    <h1>Зараз обирають</h1>
                    <div className="order__rigthnow__list">
                        <Slider />
                        {/*  */}

                    </div>
                </section>
                <section className="promo">
                    <div className="subscribe__form" action="">
                        <div className="text">
                            <p className="title">Будь в курсі</p>
                            <p className="desc">Підпишіться на останні оновлення
                                та дізнавайтеся про новинки та спеціальні пропозиції першими</p>
                        </div>
                        <div className="form"><input type="text" placeholder="example@vzuttia.ua" />
                            <button>Підписатися</button></div>


                    </div>
                    <div className="your__chair__shoes">
                        <img src={`${window.location.origin}/images/lovess.png`} alt="" />
                        <div className="inside__container">
                            <p className="title">ТВОЯ ЛЮБИМА<br />ПАРА ВЗУТТЯ</p>
                            <Link to="/shop">Дивитись</Link>
                        </div>

                    </div>

                </section>

                <section className="order__rigthnow">
                    <h1>Актуальне</h1>
                    <div className="order__rigthnow__list">
                        <Slider />
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default MainPage
