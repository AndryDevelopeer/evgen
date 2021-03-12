import React from 'react'
import s from "./Section.module.css"
import logo from "../img/14.jpg"
import wokr from "../img/2.jpg"
import work from "../img/1.jpg"
import work1 from "../img/3.jpg"
import work2 from "../img/5.jpg"
import work6 from "../img/8.jpg"
import work7 from "../img/10.jpg"
import work8 from "../img/11.jpg"
import ScrollableAnchor from 'react-scrollable-anchor'


function Section() {

    return (
        <div>
            <div className={s.header}>
                <div className={s.nav}>
                    <div className={s.navName}>Zhenya Kudryavtsev</div>
                    <div className={s.navItem}><a href={'#about'}> About </a></div>
                    <div className={s.navItem}><a href={'#work'}>Work</a></div>
                    <div className={s.navItem}><a href={"#contact"}>Contact</a></div>
                </div>
            </div>

            <ScrollableAnchor id={'about'}>
                <div className={s.id_about}>
                </div>
            </ScrollableAnchor>

            <div className={s.content}>
                <div>
                    <img className={s.img} src={logo} alt="logo"/>
                </div>
                <div className={s.content_text}>
                    <h1>Zhenya Kudryavtsev, tattoo artist from Krakow, Poland.</h1> <br/>
                    <div className={s.about_text}>I was born and raised in Russia and moved to Polska at age of 28. For
                        3 years I lived and studied in Saint Petherburg, where I’ve learned the craft of tattooing
                        during an apprenticeship at Siberian Inc Tattoo. <br/>

                        In 2020 I moved to Kraków. Where I continue to tattoo and create art.<br/>

                        Main source of inspiration for me comes from figurative studies of human body and nature. I
                        enjoy to create pieces that shows conflict of topic, gestures and contrast of ideas with main
                        object of a human life in nature, society, and within.<br/>

                        When choosing next tattoo project priority always goes to ideas that are unique, to clients who
                        are open to get artistic piece and willing to sacrifice part of their body for a free reign
                        design. I would like to combine different styles of tattoos and experiment with something new.
                    </div>
                </div>
            </div>
            <ScrollableAnchor id={"work"}>
                <div>

                </div>
            </ScrollableAnchor>
            <div className={s.myWork}>
                <div>
                    <h2>Work</h2>
                </div>

                <div className={s.work}>
                    <img className={s.img_work} src={wokr} alt="wokr"/>
                    <img className={s.img_work} src={work2} alt="work2"/>
                    <img className={s.img_work} src={work1} alt="work1"/>
                </div>
                <div className={s.work}>
                    <img className={s.img_work} src={work6} alt="work6"/>
                    <img className={s.img_work} src={work7} alt="work7"/>
                    <img className={s.img_work} src={work8} alt="work8"/>
                </div>
            </div>

            <ScrollableAnchor id={"contact"}>
                <div>
                </div>
            </ScrollableAnchor>

            <div className={s.contact}>
                <h2>Contact</h2>
                <div>
                    • Kraków 🇵🇱 •<br/>
                    <br/>
                    evgeny.kd98@gmail.com <br/>
                    <br/>
                    All works can be seen in my instagram profile
                </div>
            </div>
            <footer className={s.footer}>
                <div className={s.footer_item}><a target={"_blank"}
                                                  href="https://www.instagram.com/evgeny.kd/">instagram.com</a></div>
                <div className={s.footer_item}><a target={"_blank"} href="https://vk.com/evgeny_tattoo">vk.com</a></div>

            </footer>
        </div>

    )
}

export default Section;