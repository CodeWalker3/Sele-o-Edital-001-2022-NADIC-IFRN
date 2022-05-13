import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
const desc_pleito= () =>{
    return (
        <div>
        <Head>
        <title>WebDev</title>
        <meta name='keywords' content='web development, programing'/>
      </Head>
        <body>
            <section className="container">
        <h1 className="central">Descrição do pleito: Gremio estudantil</h1>
        <div className="grid-container">
            <div className="item1">
        <h4>Gremio Estudantil 2</h4>
        <Image src="/images/gremio.png" width={390} height={230}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse et aliquam tellus. 
            In finibus felis urna, at venenatis augue gravida id. 
            Donec id mattis lectus, sed eleifend diam. 
            Vivamus libero urna, facilisis quis erat nec, maximus ultricies elit. 
            Pellentesque finibus rutrum velit, quis lobortis massa pharetra et. 
            Vivamus ut elit eros. Duis nec arcu tellus. 
            Quisque feugiat elit eget arcu vehicula varius. 
            Ut lectus eros, congue ullamcorper nibh id, molestie mollis massa. 
            Mauris non ex porta elit consequat pulvinar molestie quis est.
             Aliquam erat volutpat.
        </p>
        </div>
            <div className="item2">
            <h4>Escola 4</h4>
        <Image src="/images/sindico.jpg" width={200} height={160}/>
        <p>João carvalho
        </p>
        <div className="button">
        <Link href='/reg_candidato'>Votar</Link>
    </div>
        </div><div className="item2">
            <h4>Escola 4</h4>
        <Image src="/images/sindico.jpg" width={200} height={160}/>
        <p>João carvalho
        </p>
        <div className="button">
        <Link href='/reg_candidato'>Votar</Link>
    </div>
        </div><div className="item2">
            <h4>Escola 4</h4>
        <Image src="/images/sindico.jpg" width={200} height={160}/>
        <p>João carvalho
        </p>
        <div className="button">
        <Link href='/reg_candidato'>Votar</Link>
    </div>
        </div><div className="item2">
            <h4>Escola 4</h4>
        <Image src="/images/sindico.jpg" width={200} height={160}/>
        <p>João carvalho
        </p>
        <div className="button">
        <Link href='/reg_candidato'>Votar</Link>
    </div>
        </div><div className="item2">
            <h4>Escola 4</h4>
        <Image src="/images/sindico.jpg" width={200} height={160}/>
        <p>João carvalho
        </p>
        <div className="button">
        <Link href='/reg_candidato'>Votar</Link>
    </div>
        </div><div className="item2">
            <h4>Escola 4</h4>
        <Image src="/images/sindico.jpg" width={200} height={160}/>
        <p>João carvalho
        </p>
        <div className="button">
        <Link href='/reg_candidato'>Votar</Link>
    </div>
        </div>
        
        </div></section>
        </body>
        </div>
    )
}
export default desc_pleito