import React from 'react'
import Header from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import revistaebdAdult from '../../images/revistaebd-adultos.png'
import revistaebdJovens from '../../images/revistaebd-jovens.png'
// import img_contibua from '../../images/contribua.png'
import './ebd_styles.css'

const Ebd = () => {
  return (
    <div>
        <Header />

        <div className='conteudo-ebd'>
            <h1 className='titulo-ebd'>EBD: Escola Bíblica Dominical</h1>
            <div className='container-localizar'>
                <div id='mapa'>
                    <iframe title='Mapa' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2192.763555708603!2d-46.93540572524092!3d-22.437529551079603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRua.%20Prof%C2%AA%20Nely%20B.%20Fernandes%2C%20165%20Jardim%20do%20Lago%20-%20Mogi%20Mirim%20SP!5e0!3m2!1spt-BR!2sbr!4v1720934202178!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div id='info-contactEbd'>
                    <h1>Nossa<br/> Localização</h1>

                    <div id='separator'></div>

                    <p id='title'>Horários de Atendimento Pastoral</p>
                    <p id='text'>Segunda à Sábado - 13h - 21h</p>
                    <p id='text'>Domingo - 14h - 21h</p>
        
                    <p id='title'>Informações de Contato</p>
                    <p id='text'>admogianasede17@gmail.com</p>
        
                    <p id='title'>Endereço</p>
                    <p id='text'>Rua. Profª Nely B. Fernandes, 165<br/> Jardim do Lago - Mogi Mirim SP</p>
                        
                </div>
            </div>

            <h1 className='titulo-ebd'>EBD: Lições</h1>

            <div className='container-adultos'>
                <div id='info-adulto'>
                    <h1>Lições Adultos 3º Trimestre de 2024 - CPAD</h1>

                    <div id='separator'></div>

                    <p id='title'>O que será estudado?</p>
                    <p id='text'>
                        A revista "Lições Bíblicas - Professor" para o 3º trimestre de 2024, publicada pela CPAD, 
                        traz um estudo profundo sobre os livros de Rute e Ester, com o tema "O Deus que Governa o 
                        Mundo e Cuida da Família". Este material é destinado a educadores de Escola Dominical e 
                        foca nos ensinamentos divinos que podem ser extraídos dessas histórias bíblicas. Ao longo 
                        das lições, os professores e alunos terão a oportunidade de explorar como a soberania de 
                        Deus se manifesta na vida cotidiana e como Ele cuida das famílias. As lições destacam temas 
                        como fidelidade, redenção, coragem e a importância de confiar nos planos de Deus, fornecendo 
                        aplicações práticas para a vida atual dos crentes.
                    </p>
                </div>

                <img src={revistaebdAdult} alt='Brasão AD Mog' id='img-revistaebdAdul'/>
            </div>
            
            <div className='container-jovens'>
                <img src={revistaebdJovens} alt='Brasão AD Mog' id='img-revistaebdJovens'/>

                <div id='info-jovens'>
                    <h1>Lições Jovens 3º Trimestre de 2024 - CPAD</h1>

                    <div id='separator'></div>

                    <p id='title'>O que será estudado?</p>
                    <p id='text'>
                        A revista "Lições Bíblicas - Jovens" para o 3º trimestre de 2024, publicada pela CPAD, oferece um estudo 
                        inspirador e desafiador sobre a vida de Daniel, sob o tema "Na Cova dos Leões". Este material é direcionado 
                        aos educadores de Escola Dominical que trabalham com jovens, e foca no exemplo de fé e coragem de Daniel, 
                        aplicando seus ensinamentos ao testemunho cristão nos dias atuais. As lições irão explorar como a firmeza 
                        de Daniel em sua fé, mesmo diante de adversidades extremas, pode encorajar os jovens a manterem-se fiéis a 
                        Deus em meio às pressões e desafios modernos. Cada lição busca fortalecer a fé dos jovens, incentivando-os 
                        a viver de maneira íntegra e corajosa, refletindo os valores cristãos em suas vidas cotidianas.
                    </p>
                    
                </div>
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default Ebd;