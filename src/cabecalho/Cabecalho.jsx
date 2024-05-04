import Logo from '../assets/arara.png'
import Perfil from '../assets/icones/perfil_icon.png'
import Livro from '../assets/icones/livro_icon.png'
import Grupo from '../assets/icones/grupo_icon.png' 
import livroMudado from '../assets/icones/livrored_icon.png'

import estilos from './Cabecalho.module.css'


export function Cabecalho(){
    return(
        
    <header className={ estilos.conteiner }>
            
            <img src={Logo} alt="Logo" className={estilos.logo} />


        <div className={estilos.hider}>

            <div className={estilos.livro}>
                    <img src={Livro} alt="Livro" className={estilos.livrox}/>
                    <p>
                        <a href="">Vestibulares</a>
                    </p>
            </div>

            <div className={estilos.grupo}>
                <img src={Grupo} alt="Grupo" className={estilos.grupox}/>
                <p>
                    <a href="">Sobre Nós</a>
                </p>
            </div>

            <div className={estilos.perfil}>
                <img src={Perfil} alt="Perfil" className={estilos.perfilx} />
                <p>
                    <a href="">Cadastre-se Aqui</a>
                </p>
            </div>

           
        </div>

    </header>
 
    )
}
