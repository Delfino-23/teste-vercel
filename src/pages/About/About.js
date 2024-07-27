import React from 'react'
import Header from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
// import { FaInstagram } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import img_contibua from '../../images/contribua.png'
import assembleia_belem from '../../images/assembleia-belem.jpg'
import pioneiros from '../../images/daniel_e_gunnar.jpg'
import niverAss from '../../images/113AD.jpeg'
// import cgadb from '../../images/cgadb.png'
import convencoes from '../../images/convencoes2.png'

// IMAGENS NOSSA IGREJA
import imgIgeja1 from '../../images/img-igreja1.jpeg'
import imgIgeja2 from '../../images/img-igreja2.jpeg'
import admogNiver from '../../images/banner-niver.jpeg'
// import igrejaVazia1 from '../../images/igrejaVazia.png'
// import igrejaVazia2 from '../../images/igrejaVazia2.png'
import festa1 from '../../images/festa1.png'
import festa3 from '../../images/festa3.png'
import './about_styles.css'

const About = () => {
  return (
    <div>
      <Header/>

      <div className='igreja'>
        
        {/* IGREJA */}
        <section className='content-igreja'>

          <div className='primary-content'>
            <h1 id='title-content'>História das Assembleias de Deus</h1>

            <div id='separator'></div>

            <p id='text-content'>
              No dia 19 de novembro de 1910, dois Missionários Suecos, Daniel Berg e Gunnar Vingren, vindo dos Estado Unidos, 
              chegou no Brasil em Belém do Pará. O Estado do Pará havia sido mencionado em uma profecia, durante o Avivamento 
              Pentecostal de Chicago. 
            </p>

              <img src={assembleia_belem} id='img-assembleiaBelem' alt='Assembleia de Deus'/>
            <div>
            </div>

            <p id='text-content'>
              Apesar do Movimento Pentecostal no Brasil ter iniciado nesta data, foi somente em 18 de junho de 1911, que a igreja 
              recebeu nome de Assembleia de Deus e, assim como o fogo se alastra, a Assembleia de Deus se alastrou por todo o 
              território brasileiro.
            </p>

            <p id='text-content'>
              Hoje no Brasil existem várias Igrejas Assembleia de Deus, e em todos os Estados do Brasil. Tendo por essência o 
              Pentecostalismo.
            </p>

          </div>

          <div className='second-content'>
            <img src={pioneiros} id='img-pioneiros' alt='Pioneiros'/>
            <img src={niverAss} id='img-niverAss' alt='Pioneiros'/>
          </div>
        </section>

        {/* CONVENÇÕES */}

        <section className='container-pastor'>

          <div className='pastor-img'>
            <img src={convencoes} id='img-convencoes' alt='Convenções'/>
          </div>

          <div className='pastor-content'>
            <h1 id='title-content'>As Convenções das Igrejas Assembleia de Deus</h1>

            <div id='separator'></div>

            <p id='text-content'>
              Devido ao grande crescimento das Igrejas Assembleia de Deus, houve a necessidade de se organizarem em 
              Convenções. Cada Estado tem a sua Convenção, porém a Convenção mais importante é a CGADB - Convenção 
              Geral das Assembleias de Deus no Brasil.
            </p>

            <p id='text-content'>
              A Convenção do Estado de São Paulo, a que este Ministério pertence, é a CIEADISPEL – Convenção das Igrejas 
              Evangélicas Assembleias de Deus no Estado de São Paulo e Estados Limítrofes.
            </p>

          </div>

          
        </section>

        {/* NASCIMENTO DA AD MOG */}

        <section className='container-miss'>

          <div className='miss-img'>
            <img src={admogNiver} id='img-niverAss' alt='AD Mog'/>
            <img src={festa1} id='img-admog2' alt='AD Mog'/>
            <img src={festa3} id='img-admog2' alt='AD Mog'/>
            <img src={imgIgeja1} id='img-admog' alt='AD Mog'/>
            <img src={imgIgeja2} id='img-admog2' alt='AD Mog'/>
            {/* <img src={igrejaVazia1} id='img-vazia' alt='AD Mog'/> */}
            {/* <img src={igrejaVazia2} id='img-vazia' alt='AD Mog'/> */}
          </div>

          <div className='miss-content'>
            <h1 id='title-content'>O Nascimento da Igreja Assembleias de Deus Mogiana</h1>

            <div id='separator'></div>

            <p id='text-content'>
              Em 2006, nossos cultos eram realizados em pequenos pontos de pregação pela cidade de Mogi Mirim. Orávamos 
              pedindo um local para nos reunir e cultuarmos a Deus como igreja. O Foco do nosso Pastor sempre foi a Zona 
              Leste, região onde havia maior número de habitantes e maior necessidade de Mogi Mirim.
            </p>

            <p id='text-content'>
              Cultuando a noite enquanto durante o dia o pastor saía de moto pela cidade a procura de um local, um ponto comercial 
              acessível ao nosso pequeno grupo. Foi quando passou em frente a um galpão e, percebeu que em suas portas haviam várias 
              placas de aluga-se, local este, onde antes havia sido um supermercado de uma grande e conhecida rede de supermercados. 
              Cheio de Fé e movido pelo Espírito Santo nosso Pastor se dirigiu à imobiliária para saber detalhes do imóvel. Neste 
              momento ocorre o primeiro milagre...
            </p>

            <p id='text-content'>
              <strong>O Primeiro Milagre...</strong>
            </p>

            <p id='text-content'>
              Sabendo o valor do aluguel, e sem ter condições para arcar com as mensalidades, o pastor orando em espírito, fez uma proposta 
              três vezes menor ao atendente da imobiliária e, este, sorrindo disse que outras igrejas tentaram alugar com valores bem melhores 
              do que o apresentado, porém, o pastor insistiu para que ele apresentasse a proposta para o proprietário do imóvel e, após a 
              ligação, o atendente espantado, sem entender absolutamente nada, disse que o proprietário havia aceitado a proposta, ele não 
              entendia, mas a mão de Deus moveu o coração do proprietário do imóvel.
            </p>

            <p id='text-content'>
              O primeiro culto da nossa igreja, já denominada Assembleia de Deus Mogiana, foi realizado no dia 13 de maio 2006, e assumindo a 
              presidência do ministério, Pastor Nélio Alves. Importante ressaltar, nossas raízes sempre foram Assembleianas. Houve uma grande 
              festa, pois, um pequeno e humilde povo tinha um endereço, um local, uma igreja. O pastor anunciava “venha cultuar e traga uma 
              cadeira”, estávamos felizes, porém, não tinha nem cadeiras para nos sentarmos, foi quando ocorreu o segundo milagre...
            </p>

            <p id='text-content'>
              <strong>O segundo milagre...</strong>
            </p>

            <p id='text-content'>
              Pouco tempo depois um Pastor de outro ministério nos doou 150 cadeiras de madeira. Tudo o que acontecia era fruto de milagre, e 
              mostrava que Deus estava conosco e supria todas as nossas necessidades. Nossa igreja com mais de 150 pessoas, porém, a maior 
              provação ainda estava por vir.
            </p>

            <p id='text-content'>
              <strong>A Maior Provação</strong>
            </p>

            <p id='text-content'>
              Em novembro de 2008, o proprietário do imóvel nos avisou, ‘ou compra ou sai” e o pastor disse, “nós compramos”, em seguida foi 
              estipulado os valores da negociação, que seria pago com certa facilidade, mas, parece que se não fosse por milagre, não teria 
              valor. Já no início do pagamento das prestações houve o que talvez seria o nosso pior momento, pois, alguns irmãos dizimistas 
              fieis faleceram e muitos outros que diziam estar conosco até o fim, saíram, congregações romperam com nosso ministério nosso 
              número havia sido reduzido a trinta pessoas e o valor que era sete vezes maior que o aluguel passou a ser um valor inalcançável. 
              Quando o proprietário quis desfazer o negócio, o Senhor Deus, novamente tocou em seu coração, e baixou significativamente o valor 
              das prestações. Não foi fácil, pelo contrário, com muita dificuldade e após muitas noites em claro do nosso pastor, no dia 3 de 
              setembro de 2014 pegamos a escritura do imóvel. A batalha foi tão grande que nosso pastor, após o pagamento da última parcela, 
              dormiu por quase dois seguido.
            </p>

            <p id='text-content'>
              Este ministério tem a aprovação de Deus. Víamos o Seu agir em todo momento. No ano de 2024 comemoramos nosso décimo oitavo aniversário.
            </p>

            <p id='text-content'>
              Nossa sede conta com uma área de 1000 metros quadrados, com estacionamento fechado.
            </p>

            <p id='text-content'>
              <strong>Localização</strong> 
            </p>

            <p id='text-content'>
              Nosso templo está localizado na rua Nely Batista Fernandes, 165, Jardim do Lago Mogi Mirim SP
            </p>

            <p id='text-content'>
              <strong>Cultos</strong>
            </p>

            <p id='text-content'>
              <strong>Domingos:</strong>
            </p>

            <p id='text-content'>
              Escola Bíblica Dominical (EBD), às 8h30<br/>
              Culto da Família às 18h30.
            </p>

            <p id='text-content'>
              <strong>Terça:</strong>
            </p>

            <p id='text-content'>
              Culto de Ensino, 19h30.
            </p>

            <p id='text-content'>
              <strong>Quinta:</strong>
            </p>

            <p id='text-content'>
              Campanha de Cura e Libertação, às 19h30
            </p>

            <p id='text-content'>
              A  Ceia do Senhor  acontece no <strong>segundo sábado de cada mês às 19h00.</strong>
            </p>
          </div>

        </section>

        {/* GALERIA */}
        {/* <section className='galeria'>
          <div className='fotos foto1'></div>
          <div className='fotos foto2'></div>
          <div className='fotos foto3'></div>
        </section> */}

        {/* OFERTA */}
        <div className='container-oferta'>

          <h1 id='title-content'>Faça uma oferta de amor</h1>

          <p id='text-oferta'>
            “…porque Deus ama ao que dá com alegria.” <strong>– 2 Coríntios 9:7b</strong>
          </p>

          <img src={img_contibua} id='img-oferta' alt='Conta'/>
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default About