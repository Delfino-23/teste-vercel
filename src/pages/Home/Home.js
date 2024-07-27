import React from 'react'
import './home_styles.css'
import Header from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import { Button, Card } from 'react-bootstrap'
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'
import img5 from '../../images/logo.png'
import img6 from '../../images/logo2.png'
import img7 from '../../images/9.1.png'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>

      <div className='conteudo'>
        <section className='welcome'>
          <h1>Seja bem-vindo (a)!</h1>
          <div className='text-welcome'>
            <p>
              Mesmo antes de criar o mundo, Deus nos amou e nos escolheu em Cristo. 
              O nosso objetivo é ajudar você a entender o propósito que Deus tem para 
              a sua vida.
            </p>
          </div>

          <img 
            id='logo' 
            src={img5}
            alt='logo'
          />
        </section>

        <div className='more-info'>

          <section className='canal'>
              
              <img 
               id='logo-canal'
               src={img6}
               alt='logo'
              />

              <div className="ratio video">
                <iframe src="https://www.youtube.com/embed/My5DAZ_swnc?si=sxHtdzvALHgF6egF" title="YouTube video" allowFullScreen></iframe>
              </div>
              <div className="ratio video2">
                <iframe src="https://www.youtube.com/embed/lZeoJ96vmh8?si=gOGNdJjwa-2jP3xj" title="YouTube video" allowFullScreen></iframe>
              </div>
          </section>

          {/* <section className='youtube'>

            <div className='text-channel'>
              <h1>Palavra de Vida</h1>
              <p>
                Pela graça de Deus, estamos felizes em entregar um serviço de transmissão ao 
                vivo online apenas para você. Junte-se a nós assistindo ao vivo todos os nossos cultos.
              </p>
              <Button variant="outline-success" href='https://www.youtube.com/@pastornelioalvesdasilva6229/videos' target='_blank'>
                <FaYoutube /> Inscreva-se
              </Button>
            </div>

            <div className='canal'>
              <Container className='videos'>
                <div className="ratio">
                  <iframe src="https://www.youtube.com/embed/vW806AhP4qQ?si=LrlOYAr250-VQIwW" title="YouTube video" allowFullScreen></iframe>
                </div>
              </Container>
            </div>
          </section> */}

          <section className='insta'>

            
            <div className='perfil_insta'>
              <Link to="https://www.instagram.com/admogiana/" target='_blank' className='link_insta'>
                <div id='img_perfil'></div>

                  <div id='perfil_name'>
                    <h1>admogiana</h1>
                    <p>Siga a Igreja AD Mog também no Instagram</p>
                  </div>
              </Link>
            </div>

            <div className='cards-insta'>

              <div className='linha1'>

                <Link to="https://www.instagram.com/p/C9VjG25yGXE/" target='_blank'>
                  <Card className='card-insta card1'/>
                </Link>

                <Link to="https://www.instagram.com/p/C9VlDTHSLJk/" target='_blank'>
                  <Card className='card-insta card2'/>
                </Link>

                <Link to="https://www.instagram.com/p/C9VkIMXyfON/" target='_blank'>
                  <Card className='card-insta card3'/>
                </Link>

                <Link to="https://www.instagram.com/p/C9VkXJVS6jB/?img_index=1" target='_blank'>
                  <Card className='card-insta card4'/>
                </Link>
              </div>

              <div className='linha2'>
              <Link to="https://www.instagram.com/p/C9ViFVFyHDS/" target='_blank'>
                  <Card className='card-insta card5'/>
                </Link>

                <Link to="https://www.instagram.com/p/C9VkXJVS6jB/?img_index=2" target='_blank'>
                  <Card className='card-insta card6'/>
                </Link>

                <Link to="https://www.instagram.com/p/C9Vkq4ayJ4W/" target='_blank'>
                  <Card className='card-insta card7'/>
                </Link>

                <Link to="https://www.instagram.com/p/C9VjqGcyQiw/" target='_blank'>
                  <Card className='card-insta card8'/>
                </Link>
              </div>
            </div>

            <Button variant="primary" href='https://www.instagram.com/admogiana/' target='_blank' id='btn'>
              <FaInstagram /> Siga AD Mog no Instagram
            </Button>
          </section>

          <section className='pastores'>
            <h1 id='titulo'>Nossos Pastores</h1>

            <img src={img7} alt='nossos pastores' id='img-palavra'/>
          </section>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home