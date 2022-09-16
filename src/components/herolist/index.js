import React from 'react'
import { useData } from '../../context/use-data'
import { BASE_URL, PUBLIC_KEY, HASH, CLIENT } from '../../constants/config'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Herocard from '../herocard'
import useFindBottom from '../../hooks/useFindBottom';


function Herolist() {

  const { allHero, setAllHero } = useData() // ====> get context useData()
  const [ isLoading, setLoading ] = useState(true)
  const [listLoading, setListLoading] = useState(false)
  const [ offset, setOffsett ] = useState(0) // ====> this state will be used for add more list elements 
  let Bottom = useFindBottom()
  
  useEffect(() => {
    const DataRequest = async () => {
      const result = await axios(`${BASE_URL}${CLIENT.content}${CLIENT.timestamp}&limit=30&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
      setAllHero(allHero.concat(result.data.data.results)) // ===> set Allhero data 
      setLoading(false)
    }
    if(Bottom === true){ // =====> if scroll end is found new list will be added and after new request on API 
      setOffsett(offset + 30)
      setListLoading(true)
      DataRequest()
    }
  },[Bottom])


  return (
    isLoading ? <h1 className={styles.loading}>Loading...</h1> :
      <div  className={styles.container}>
        {
          allHero.map(cardItem =>
            <Herocard
              key={cardItem.id}
              item={cardItem}
            />
          )
        }
        {listLoading ? <h2 className={styles.listLoading}>Loading List..</h2> : ""}
      </div>
  )
}

export default Herolist
