import LogoEscrita from '../assets/Logo_com_escrita.png'
import estilos from './Lateral.module.css'

export function Lateral(){
    return(

        <img src={LogoEscrita} alt="LogoEscrita" className={estilos.logo} />

       
    )
}
