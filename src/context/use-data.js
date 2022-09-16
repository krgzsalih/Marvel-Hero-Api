import { createContext, useContext, useState } from "react";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({children}) => {
    const [allHero, setAllHero] = useState([]);
    const [heroName, setHeroName] = useState();
    const [heroImage, setHeroImage] = useState();
    const [heroComics, setHeroComics] = useState()
    const [description, setDescription] = useState()
    return (
        <DataContext.Provider
            value={{
                allHero,
                heroName,
                heroImage,
                heroComics,
                description,
                setAllHero,
                setHeroName,
                setHeroImage,
                setHeroComics,
                setDescription
            }}
        >{children}   
        </DataContext.Provider>
    )
}
export default Provider;