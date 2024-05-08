import Logo from '../assets/Logo_Escrita.png'

import estilos from './Cabecalho.module.css'


export function Cabecalho(){
    return(
        
    <header className={ estilos.conteiner }>
            
            <img src={Logo} alt="Logo" className={estilos.logo} />


        <div className={estilos.hider}>

            <div className={estilos.duvidas}>                   
                    <p>
                        <a href="">Dúvidas Frequentes</a>
                    </p>
            </div>

            <div className={estilos.livro}>                   
                    <p>
                        <a href="">Vestibulares</a>
                    </p>
            </div>

            <div className={estilos.grupo}>       
                <p>
                    <a href="">Sobre Nós</a>
                </p>
            </div>

            <div className={estilos.perfil}>
                <p>
                    <a href="">Cadastre-se Aqui</a>
                </p>
            </div>

           
        </div>

    </header>
 
    )
}
