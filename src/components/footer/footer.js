import React from 'react'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <ul>
                        <h2>Каталог</h2>
                        <li>Жіноче взуття</li>
                        <li>Чоловіче взуття</li>
                        <li>Дитяче взуття</li>
                        <li>Новинки</li>
                        <li>Sale</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <h2>Покупцеві</h2>
                        <li>Доставка і оплата</li>
                        <li>Бонусна програма</li>
                        <li>Запитання та відповіді</li>
                        <li>Гарнтії</li>
                        <li>Повернення</li>
                        <li>Доставка</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <h2>Про нас</h2>
                        <li>Магазини</li>
                        <li>Карьєра</li>
                        <li>Новини</li>
                        <li>Контакти</li>

                    </ul>
                </li>
                <li>
                    <h2>Соціальні мережі</h2>
                    <ul className="social__menu">

                        <li><i class="fab fa-facebook"></i></li>
                        <li><i class="fab fa-youtube"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-telegram"></i></li>


                    </ul>
                </li>
                <li>

                    <h2>Графік роботи</h2>
                    <p>з понеділка – суботу: <br />
                        з 9:00 до 19:00 <br />
                        неділя: <br />
                        з 9:00 до 18:00

                    </p>


                </li>
            </ul>
        </footer>
    )
}

export default Footer
