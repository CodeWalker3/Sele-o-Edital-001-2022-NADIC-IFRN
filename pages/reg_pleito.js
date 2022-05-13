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
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">Nome do pleito</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Chapa</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="password" placeholder=" " />
        <div className="cut"></div>
        <label for="password" className="placeholder">Password</label>
      </div>
      <div className="input-container ic2">
        <input id="password" className="input" type="password" placeholder=" " />
        <div className="cut"></div>
        <label for="password" className="placeholder">Confirm Password</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">Email</label>
      </div>
      <button type="text" className="submit">SUBMIT</button>
    </div>
    </section>
    </body>
        </div>
    )
}
export default reg_pleito