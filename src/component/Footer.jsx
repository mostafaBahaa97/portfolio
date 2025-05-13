import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
return (
    <footer className="bg-dark text-white py-4">
        <div className="container mx-auto text-center">
            <a
                href="tel:+201208108242"
                className="btn btn-outline-primary my-4 fs-5 fw-bold"
                >
                Contact Me
            </a>
            <p>All rights reserved. &copy; 2025 Mostafa Bahaa </p>
            <p>
                Follow us on{' '}
                <a href="https://twitter.com/yourcompany" className="text-blue-400">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>{' '}
                and{' '}
                <a href="https://facebook.com/yourcompany" className="text-blue-400">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </p>
        </div>
    </footer>
);
}

export default Footer;