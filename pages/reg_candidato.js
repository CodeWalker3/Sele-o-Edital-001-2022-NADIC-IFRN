import Head from 'next/head'

const reg_candidato = () =>{
    return (
        <div>
            <Head>
        <title>WebDev</title>
        <meta name='keywords' content='web development, programing'/>
      </Head>
        <body>
                <section className="container">
                <div className="form">
      <div className="title">Registro de candidato</div>
      <div className="subtitle">Vamos registrar o candidato:</div>
      <div className="input-container ic1">
        <input id="name" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="name" className="placeholder">Nome</label>
      </div>
      <div className="input-container ic2">
        <input id="id" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="id" className="placeholder">CPF</label>
      </div>
      <div className="input-container ic2">
        <input id="name" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="name" className="placeholder">Pleito concorrido</label>
      </div>
      <div className="input-container ic2">
        <input id="address" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="address" className="placeholder">Endereço</label>
      </div>
      <div className="input-container ic2">
        <input id="date" className="input" type="date" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="date" className="placeholder">Data de nascimento</label>
      </div>
      <button type="text" className="submit">SUBMIT</button>
    </div>
    </section>
    </body>
        </div>
    )
}
export default reg_candidato
