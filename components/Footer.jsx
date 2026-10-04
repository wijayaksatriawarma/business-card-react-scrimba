import FacebookIcon from '../src/assets/square-facebook-brands-solid-full.svg';
import TwitterIcon from '../src/assets/square-twitter-brands-solid-full.svg';
import InstagramIcon from '../src/assets/square-instagram-brands-solid-full.svg';
import GithubIcon from '../src/assets/square-github-brands-solid-full.svg';
import LinkedInIcon from '../src/assets/linkedin-brands-solid-full.svg';


export default function Footer() {
    return (
        <footer>
            <img src={FacebookIcon}  alt="Facebook" />
            <img src={TwitterIcon} alt="Twitter" />
            <img src={InstagramIcon} alt="Instagram" />
            <img src={GithubIcon} alt="GitHub" />
            <img src={LinkedInIcon} alt="LinkedIn" />
        </footer>
    )
}