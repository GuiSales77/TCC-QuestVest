import {Routes, Route} from 'react-router-dom'
import {Inicial} from '../paginas/Inicial'
import {Cadastro} from '../paginas/Cadastro'

export function Rotas(){
    return(
        <Routes>

            <Route path='inicial' element={<Inicial />}>
                <Route path='Cadastro' element={<Cadastro/>} />
            </Route>

        </Routes>
    )
}
