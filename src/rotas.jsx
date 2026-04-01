import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './paginas/home'
import Sobre from './paginas/sobre'
import Conhecimentos from './paginas/conhecimentos'
import Projetos from './paginas/projetos'
import Cotanto from './paginas/contato'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/sobre" element={<Sobre />} ></Route>
                <Route path="/conhecimentos" element={<Conhecimentos />} ></Route>
                <Route path="/projetos" element={<Projetos />} ></Route>
                <Route path="/contato" element={<Cotanto />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes