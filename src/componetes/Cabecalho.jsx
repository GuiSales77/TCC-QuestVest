import Logo from '../assets/Logo_Escrita.png'
import {Link} from 'react-router-dom'
import estilos from './Cabecalho.module.css'


export function Cabecalho(){
    return(
        
    <header className={ estilos.conteiner }>
            
            <img src={Logo} alt="Logo" className={estilos.logo} />


        <div className={estilos.hider}>

        
            <Link className={estilos.duvidas}
            
            >                   
                    <p>
                        <a>Dúvidas Frequentes</a>
                    </p>
            </Link>

            <Link className={estilos.livro}>                   
                    <p>
                        <a>Vestibulares</a>
                    </p>
            </Link>

            <Link className={estilos.grupo}>       
                <p>
                    <a>Sobre Nós</a>
                </p>
            </Link>

            <Link className={estilos.perfil}
            to = {'/Cadastro'}
            >
                <p>
                    <a>Cadastre-se Aqui</a>
                </p>
            </Link>

           
        </div>

    </header>
 
    )
}
