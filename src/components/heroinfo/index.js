import React from 'react'
import { useData } from '../../context/use-data'
import style from './style.module.scss'
import { useNavigate } from "react-router-dom";

function Heroinfo() {

    let goBack = useNavigate() // =====> addition useNavigate() hook  to new variable
    const { heroName, heroImage, heroComics, description, setAllHero } = useData()
    // =====>  get context data 
    const backClick = () => {
        goBack("/", { replace: false }) // =====> go back main page
        setAllHero([])
    }
    return (
        <div className={style.container}>
            <div className={style.contents}>
                <div className={style.card_info}>
                    <img className={style.image} src={heroImage + ".jpg"} alt={heroName}></img>
                    <h1 className={style.title_name}>{heroName}</h1>
                    <h2 className={style.title}>Description</h2>
                    <p className={style.desc}>{description || "My lawyer will make the necessary explanation."}</p>
                </div>
                <div className={style.comics_info}>
                    <h2 className={style.title}>Comics</h2>
                    <ul className={style.list}>
                        {
                            heroComics.map((item, index) =>
                                <li className={style.li} key={"comics" + index}>
                                    <h3 className={style.title}>{item.title}</h3>
                                    <div className={style.creator_content}>
                                        <img alt={item.title} className={style.comics_img} src={item.thumbnail.path + "." + item.thumbnail.extension}></img>
                                        <ul>
                                            <h3 className={style.title} >Creators</h3>
                                            {item.creators.items.map((creator) =>
                                                <li>{creator.name}</li>
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <button className={style.button} onClick={backClick}>Back</button>
        </div>
    )
}

export default Heroinfo