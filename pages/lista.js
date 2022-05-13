import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
const lista = () =>{
    return (
        <div>
            <Head>
        <title>WebDev</title>
        <meta name='keywords' content='web development, programing'/>
      </Head>
            <body>
        <section className="container">
        <h1 className="central">
            Pleitos disponíveis:
        </h1>
    <div className ="row">
    <div className ="col">
        <Image src="/images/sindico.jpg" width={270} height={230}/>
        <p>Síndico do condomínio: 
Example 1</p>
<div className="button">
    <Link href='/desc_pleito'>Eleições</Link>
    </div>
    </div>
<div className ="col">
        <Image src="/images/sindico.jpg" width={270} height={230}/>
        <p>Síndico do condomínio: 
Example 1</p>
<div className="button">
    <Link href='/desc_pleito'>Eleições</Link>
    </div>
</div>
<div className ="col">
        <Image src="/images/sindico.jpg" width={270} height={230}/>
        <p>Síndico do condomínio: 
Example 1</p>
<div className="button">
    <Link href='/desc_pleito'>Eleições</Link></div>
</div><div className ="col">
        <Image src="/images/sindico.jpg" width={270} height={230}/>
        <p>Síndico do condomínio: 
Example 1</p>
<div className="button">
    <Link href='/desc_pleito'>Eleições</Link></div>
</div><div className ="col">
        <Image src="/images/sindico.jpg" width={270} height={230}/>
        <p>Síndico do condomínio: 
Example 1</p>
<div className="button">
    <Link href='/desc_pleito'>Eleições</Link></div>
</div><div className ="col">
        <Image src="/images/sindico.jpg" width={270} height={230}/>
        <p>Síndico do condomínio: 
Example 1</p>
<div className="button">
    <Link href='/desc_pleito'>Eleições</Link></div>
</div>
        </div>
        </section>
        </body>
        
        </div>
    )
}
export default lista