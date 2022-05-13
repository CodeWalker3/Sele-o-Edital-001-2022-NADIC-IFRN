import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev</title>
        <meta name='keywords' content='web development, programing'/>
      </Head>
      <body>
        <section className="container">
        <Image src="/images/eleicao.jpg" width={1163} height={442}/>      
        <h4>Sobre o site:</h4>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non bibendum eros. 
      Cras ut arcu eu lorem ullamcorper tristique. Donec ullamcorper a turpis in ornare. 
      Praesent luctus massa vel turpis euismod congue. Nunc quis dolor dui. 
      Interdum et malesuada fames ac ante ipsum primis in faucibus. 
      Suspendisse finibus, justo aliquam tincidunt lacinia, erat erat imperdiet orci, in facilisis libero nisl id dui. 
      Phasellus tristique arcu semper imperdiet suscipit. Etiam mattis purus eget elementum dignissim. 
      Ut auctor facilisis sem, nec vehicula massa mollis in. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <h2 className="central">
        Pleitos mais acessados:
        
        
        </h2>
        <div className="organized_images">
        <Image src="/images/sindico.jpg" width={160} height={130}/>
        <Image src="/images/gremio.png" width={160} height={130}/>
        <Image src="/images/selector.png" width={160} height={130}/>
        <Image src="/images/selector.png" width={160} height={130}/>
        </div>
        <p className="central">
          Lista de eleições disponíveis:
        </p>
        <div className="button">Eleições</div>
        
        </section>
        </body>
    </div>
  )
}