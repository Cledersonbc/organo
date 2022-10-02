import './Footer.css'

const Footer = () => {
    return (<footer className="page-footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/images/facebook.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/images/twitter.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/images/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>
                Desenvolvido por Clederson &copy; 2022.
            </p>
        </section>
    </footer>)
}

export default Footer;