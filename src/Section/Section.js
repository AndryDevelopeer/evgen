import React from 'react'
import s from "./Section.module.css"
import logo from "../img/14.jpg"
import wokr from "../img/2.jpg"
import work from "../img/1.jpg"
import work1 from "../img/3.jpg"
import work5 from "../img/9.jpg"
import work2 from "../img/5.jpg"
import work3 from "../img/6.jpg"
import work4 from "../img/7.jpg"
import work6 from "../img/8.jpg"
import work7 from "../img/10.jpg"
import work8 from "../img/11.jpg"


function Section() {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img className={s.img} src={logo} alt="logo"/>
                </div>

                <div className={s.about}>
                    <h1>Евгений Кудрявцев</h1>
                    <div className={s.about_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                        consequatur corporis esse est,
                        ipsum, laboriosam mollitia nostrum placeat praesentium quidem sit suscipit vel voluptatem.
                        Expedita
                        facilis repellendus sed vel voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A
                        amet architecto deleniti error eum fugit, maxime nemo nesciunt qui quod ratione, rem
                        reprehenderit
                        saepe sunt, voluptates? Alias delectus inventore non?
                    </div>
                </div>
            </div>
            <div className={s.myWork}>
                <div>
                    <h2>Work</h2>
                </div>
                <div className={s.desctop}>
                    <div className={s.work}>
                        <img className={s.img_work} src={wokr} alt="wokr"/>
                        <img className={s.img_work} src={work2} alt="work2"/>
                        <img className={s.img_work} src={work1} alt="work1"/>

                    </div>

                </div>
                <div className={s.work_hidden}>
                    <img className={s.img_work} src={work} alt="work"/>

                </div>
                <div className={s.desctop}>
                    <div className={s.work}>
                        <img className={s.img_work} src={work3} alt="work3"/>
                        <img className={s.img_work} src={work4} alt="work4"/>

                    </div>
                    <div className={s.work}>
                        <img className={s.img_work} src={work5} alt="work5"/>
                        <img className={s.img_work} src={work2} alt="work2"/>

                    </div>

                </div>
                <div className={s.desctop}>
                    <div className={s.work}>
                        <img className={s.img_work} src={work6} alt="work6"/>
                        <img className={s.img_work} src={work7} alt="work7"/>
                        <img className={s.img_work} src={work8} alt="work8"/>

                    </div>

                </div>


            </div>
            <div>
                <h2>About</h2>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aperiam assumenda, autem
                    blanditiis eaque et fugit laborum maiores necessitatibus nesciunt nostrum pariatur provident quaerat
                    quia tempora tempore tenetur voluptate.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus eaque expedita itaque
                    nemo nesciunt quisquam rerum. Aliquam dolore doloremque, error eum maiores recusandae tenetur totam.
                    Adipisci assumenda dolores quisquam.
                </div>
            </div>
        </div>

    )
}

export default Section;