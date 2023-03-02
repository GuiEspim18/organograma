import "./Footer.css";

export const Footer = ({ socialMedia }) => {

    return (
        <footer className="footer">
            <div className="content">
                <div className="social-media">
                    {socialMedia.map(item => <img key={item.src} src={item.src} alt={item.name} />)}
                </div>
                <div className="logo">
                    <img src="/images/logo.png" alt="logo"/>
                </div>
                <div className="dev-name">
                    <p>Desenvolvido por Guilherme Espim</p>
                </div>
            </div>
        </footer>
    );
}