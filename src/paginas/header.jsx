import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import SwitchButton from "../common/switchButton";

export default () => {


    // false: Portugues
    // true: Ingles
    let [languageSessionStorage, setLanguageSessionStorage] = useState(()=>{
        return sessionStorage.getItem("language") == true
    })

    const startData = ["Home", "Sobre", "Conhecimentos", "Projetos", "Contato"]
    let [language, setLanguage] = useState(startData)

    useEffect(()=>{

        if (sessionStorage.getItem("language") == "true"){
            setLanguage(["Home", "About", "Knowledge", "Projects", "Contact"])
        } else {
            setLanguage(startData)
        }
    }, languageSessionStorage)

    return (
        <>
            {/* <button onClick={(it)=>{

                sessionStorage.setItem("language", !(sessionStorage.getItem("language") == "true"))
                setLanguageSessionStorage(sessionStorage.getItem("language") == "true")

            }}>TESTES</button>
            <div>
                <Link to='/'><h3>{language[0]}</h3></Link>
                <Link to='/sobre'><h3>{language[1]}</h3></Link>
                <Link to='/conhecimentos'><h3>{language[2]}</h3></Link>
                <Link to='/projetos'><h3>{language[3]}</h3></Link>
                <Link to='/contato'><h3>{language[4]}</h3></Link>
            </div> */}

            <SwitchButton action={()=>{
                console.log("testes do botao")
            }}></SwitchButton>
        </>
    )
}

