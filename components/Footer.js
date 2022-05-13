import footerStyles from '../styles/Footer.module.css'

const Footer = () => {

    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <footer className={footerStyles.footer}>
                <div className={footerStyles.footer_content}>
                    <h4>
                        Email de contato: <br/>
                        minicik74@bizimalem-support.de
                    </h4>
                    <h4>Todos os direitos reservados | Gustavo 2022</h4>
                    <ul className="socials">
                        <h3>Redes sociais:</h3><br/>
    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
 </ul>
                </div>
                </footer>
        </div>
    )
}

export default Footer