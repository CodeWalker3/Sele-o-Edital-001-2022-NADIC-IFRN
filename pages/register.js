import Head from 'next/head'

const register = () =>{
    return (
        <div>
            <Head>
        <title>WebDev</title>
        <meta name='keywords' content='web development, programing'/>
      </Head>
            <body>
                <section className="container">
                <div className="form">
      <div className="title">Criação de conta</div>
      <div className="subtitle">Vamos criar a sua conta:</div>
      <div className="input-container ic1">
        <input id="Name" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="Name" className="placeholder">Nome</label>
      </div>
      <div className="input-container ic2">
        <input id="name" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="name" className="placeholder">CPF</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="password" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">Senha</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="password" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="password" className="placeholder">Confirmar senha</label>
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
export default register
