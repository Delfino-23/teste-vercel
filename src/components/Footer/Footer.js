import React from 'react'
import './footer_styles.css'
import logo from '../../images/logo-branca3.png'
import conta from '../../images/contribua.png'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa' 
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='rodape'>

      <footer className='content'>
        <div className='logo-rodape'>
          <img src={logo} id='logo-rodape' alt='logo'/>
        </div>

        <div className='info'>
          <div id='fale-conosco'>
            <h1>Fale Conosco</h1>
            
            <div id='local'>
              <p>
                Rua. Profª Nely B. Fernandes, 165<br/> Jardim do Lago - Mogi Mirim SP
              </p>

              <p id='referencia'>
                (Próximo à Praça da Caixa d'agua)
              </p>
            </div>

            <div id='email'>
              <p>admogianasede17@gmail.com</p>
            </div>

            <div id='icons'>
              <Link to='https://www.facebook.com/ad.mogiana.1' target='_blanck'> 
                <FaFacebook id='icon_face'/>
              </Link>

              <Link to='https://www.youtube.com/@pastornelioalvesdasilva6229' target='_blanck'>
                <FaYoutube id='icon_tube'/>
              </Link>
              
              <Link to='https://www.instagram.com/admogiana/' target='_blanck'>
                <FaInstagram id='icon_insta'/>
              </Link>
            </div>
          </div>

          <div id='ministerio'>
            <h1>Ministério Mogiana</h1>

            <div id='content-ministerio'>
              <div id='sobre'>
                <p>
                  A Assembléia de Deus Mogiana é parte<br/> da CIEADISPEL - Convenção
                  Estadual<br/> das Assembléias de Deus e Estados<br/> Limítrofes
                </p>
              </div>

              <div id='hierarquia'>
                <p>UNIDADE - HIERARQUIA - DISCIPLINA</p>
              </div>
            </div>
          </div>

          <div id='contribua'>
            <h1>Contribua com esta obra</h1>

            <div id='imagem'>
              <img src={conta} id='img' alt='contribua'/>
            </div>
          </div>

        </div>
      </footer>
      <div className='copyright'>
        <p id='text'>Copyright © 2023 - Todos os direitos reservados - Desenvolvido por Du Arts</p>
      </div>


    </div>
  )
}

export default Footer