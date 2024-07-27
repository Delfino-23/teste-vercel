import React from 'react'
import Header from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import logo_ad from '../../images/Brasão AD MOGIANA.jpg'
import img_contibua from '../../images/contribua.png'
import './contact_styles.css'

const Contact = () => {
  return (
    <div>
        <Header />

        <div className='contact-content'>
          <section className='container-contato'>
            <div id='info-contact'>
              <h1>Fale Conosco</h1>

              <div id='separator'></div>

              <p className='title'>Horários de Atendimento Pastoral</p>
              <p className='text'>Segunda à Sábado - 13h - 21h</p>
              <p className='text'>Domingo - 14h - 21h</p>

              <p className='title'>Informações de Contato</p>
              <p className='text email'>admogianasede17@gmail.com</p>

              <p className='title'>Endereços para Correspondências</p>
              <p className='text'>Rua. Profª Nely B. Fernandes, 165<br/> Jardim do Lago - Mogi Mirim SP</p>
              
            </div>

              <img src={logo_ad} alt='Brasão AD Mog' id='img-contact'/>
          </section>
          
          <section className='container-localizar'>
            <div id='mapa'>
              <iframe title='Mapa' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2192.763555708603!2d-46.93540572524092!3d-22.437529551079603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRua.%20Prof%C2%AA%20Nely%20B.%20Fernandes%2C%20165%20Jardim%20do%20Lago%20-%20Mogi%20Mirim%20SP!5e0!3m2!1spt-BR!2sbr!4v1720934202178!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div id='info-contact'>
              <h1>Nossa<br/> Localização</h1>

              <div id='separator'></div>

              <p id='text-local'>Rua. Profª Nely B. Fernandes, 165<br/> Jardim do Lago - Mogi Mirim SP</p>
              
            </div>
          </section>
          
          <section className='container-oferta'>

            <h1>Faça uma Oferta</h1>

            <p id='text-oferta'>
              Contribua com a continuidade desta obra, ações sociais e expansão do Evangelho! 
              Faça sua oferta de amor ou devolva o seu dízimo ao Senhor!
            </p>
            <p id='text-oferta'>
              Ajude-nos a alcançar ainda mais vidas:
            </p>

            <img src={img_contibua} id='img-oferta' alt='Conta'/>
          </section>
        </div>
        
        <Footer />
    </div>
  )
}

export default Contact;