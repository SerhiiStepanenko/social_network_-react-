import React from 'react'
import s from './About.module.css'

const About = () => {
    return (
        <div className={s.about}>
            <div className={s.about__leftbar}>
                <h3 className={s.itemsAbout}>About</h3>
                <p className={s.itemAbout}><a className={s.itemAbout__item} href="#">Cite</a></p>
                <p className={s.itemAbout}><a className={s.itemAbout__item} href="#">Cite</a></p>
                <p className={s.itemAbout}><a className={s.itemAbout__item} href="#">Cite</a></p>
            </div>
        </div>
    )
}

export default About;