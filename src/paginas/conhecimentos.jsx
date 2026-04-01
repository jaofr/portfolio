import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi";
import { DiAndroid, DiApple, DiCss3, DiJsBadge, DiNpm, DiGithubBadge } from "react-icons/di";
import { FaReact, FaPython, FaPhp, FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoHardwareChip } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export default () => {
   

    
    let todosIcones = () => {
        return <>
        <motion.div className="icones"
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: .5 }} >
                    <DiAndroid className="icon" />
                    <SiTypescript className="icon" />
                    <GrMysql className="icon" />
                    <DiNpm className="icon" />
                    <DiGithubBadge className="icon" />
                    <FaReact className="icon" />

                </motion.div>

                <motion.div className="icones"
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: .5 }} >
                    <FaPython className="icon" />
                    <FaPhp className="icon" />
                    <FaHtml5 className="icon" />
                    <DiCss3 className="icon" />
                    <DiJsBadge className="icon" />
                    <IoHardwareChip className="icon" />
                </motion.div></>
    }
    let [paginatraducao, settraducao] = useState()
    let definirATraducaoDaPagina = () => {
        if (document.querySelector("body").classList.toString().includes("english2")) {
            settraducao(
                <>
                    <h1>My knowledge</h1>
                    {todosIcones()}
                    <Link to='/projetos'><button>Projects <ion-icon name="arrow-forward-outline"></ion-icon> </button></Link>
                </>
            )
            
        } else {
            settraducao(
                
                <>
                <h1>Meus Conhecimentos</h1>
                {todosIcones()}
                <Link to='/projetos'><button>Projetos <ion-icon name="arrow-forward-outline"></ion-icon> </button></Link>
            </>
            )
        }
    }


    useEffect(()=>{
        // definir como os botoes vao ficar de acordo com a traducao da pagina
        if (document.querySelector("body").classList.toString().includes("english2")) {
            document.querySelector("#btnportandenglish").classList.toggle("english")
            document.querySelector("#btnportandenglish").checked = true
        }
        definirBotoesHeader()
        definirATraducaoDaPagina()
    },[])
    return (
        <>
            <div id="responsividade" onClick={()=>{
                if (respAux)
                {
                    document.querySelector("#meuHeader").style.marginLeft = "10px"
                    respAux = false
                } else {
                    document.querySelector("#meuHeader").style.marginLeft = "-100%"
                    respAux = true
                }
            }}><GiHamburgerMenu id="iconres"/></div>
            {header()}

            <section>


                {paginatraducao}

                
               

            </section>




        </>
    )
}


