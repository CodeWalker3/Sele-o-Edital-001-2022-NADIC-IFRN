import Head from 'next/head'

const reg_pleito = () =>{
    return (
        <div>
            <Head>
        <title>WebDev</title>
        <meta name='keywords' content='web development, programing'/>
      </Head>
        <body>
                <section className="container">
                <div className="form">
      <div className="title">Criação de pleito</div>
      <div className="subtitle">Vamos criar a eleição:</div>
      <div className="input-container ic1">
        <input id="name" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="name" className="placeholder">Nome do pleito</label>
      </div>
      <div className="input-container ic2">
        <input id="number" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="number" className="placeholder">Qntd.max de candidatos</label>
      </div>
      <div className="input-container ic2">
        <input id="date" className="input" type="date" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="date" className="placeholder">Data inicial</label>
      </div>
      <div className="input-container ic2">
        <input id="date" className="input" type="date" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="date" className="placeholder">Data final</label>
      </div>
      <button type="text" className="submit">SUBMIT</button>
    </div>
    </section>
    </body>
        </div>
    )
}
export default reg_pleito
