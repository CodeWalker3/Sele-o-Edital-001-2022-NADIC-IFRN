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
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">First name</label>
      </div>
      <div className="input-container ic2">
        <input id="id" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="id" className="placeholder">CPF</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="password" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">Password</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="password" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">Confirm Password</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">Email</label>
      </div>
      <button type="text" className="submit">SUBMIT</button>
    </div>
    </section>
    </body>
        </div>
    )
}
export default reg_candidato