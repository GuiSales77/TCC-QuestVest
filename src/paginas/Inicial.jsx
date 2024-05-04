import estilos from './Inicial.module.css'
import {Cabecalho} from '../cabecalho/Cabecalho'
import { Lateral } from '../lateral/Lateral'

export function Inicial() {
  return (
    <div className={estilos.gridConteiner}>
      <Cabecalho />
      <Lateral/>
    </div>
  )
}
