import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


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
                <a href="https://github.com/mostafaBahaa97" className="text-blue-400">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>{' '}
                and{' '}
                <a href="https://www.linkedin.com/in/mostafabahaa899/" className="text-blue-400">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </p>
        </div>
    </footer>
);
}

export default Footer;