import React from 'react'
import style from './style.module.scss'
import { useData } from '../../context/use-data'
import { useNavigate } from "react-router-dom";
import { BASE_URL, PUBLIC_KEY, HASH, CLIENT } from '../../constants/config'
import axios from 'axios'

function Herocard(props) {

  let goInfo = useNavigate(); // =====> addition useNavigate() hook  to new variable
  const { setHeroName, setHeroImage, setHeroComics, setDescription } = useData() // get context data

  const handleclick = async (e) => { // =====> after click set States and get comics
    
    const comicsResult = await axios(`${BASE_URL}characters/${e.id}/comics?${CLIENT.timestamp}&limit=10&apikey=${PUBLIC_KEY}&hash=${HASH}`) 
    setHeroComics(comicsResult.data.data.results.slice(0,10)) //====> setHeroComics after response comics Data

    setHeroName(e.name)  // =====>  set hero name
    setHeroImage(e.thumbnail.path)  // =====> set hero image
    setDescription(e.description)  // =====>  set hero desc
    goInfo("./Info", { replace: false }) // =====>  go to info page
  }
  
  return ( // =====> render card elements
      <div onClick={() => handleclick(props.item)} className={style.card}>
        <img className={style.card_image} src={props.item.thumbnail.path + "/portrait_uncanny." + props.item.thumbnail.extension} alt={props.item.name} ></img>
        <h2 className={style.name}>{props.item.name}</h2>
      </div>
  )
}

export default Herocard
