import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from './../../assets/logo.png'
import facebook from './../../assets/facebook.svg'
import twitter from './../../assets/twitter.svg'
import insta from './../../assets/instagram.svg'


const ToggleIcon = () => {
    return (
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="tw-fill-white tw-w-6">
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
            </svg>
        </span>
    )
}

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="navbar" expand="lg">
                <Container>
                    <Link to="/">
                        <img src={logo} alt="Nifty Dogs" className="tw-w-20" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" children={<ToggleIcon />} />
                    <Navbar.Collapse id="basic-navbar-nav" className="tw-mt-10 lg:tw-mt-0">
                        <Nav className="tw-ml-auto lg:tw-space-x-3">
                            <Nav.Link className="tw-text-white tw-uppercase tw-font-Barlow tw-text-xl hover:tw-font-bold" href="#about">About</Nav.Link>
                            <Nav.Link className="tw-text-white tw-uppercase tw-font-Barlow tw-text-xl hover:tw-font-bold" href="#roadmap">Roadmap</Nav.Link>
                            <Nav.Link className="tw-text-white tw-uppercase tw-font-Barlow tw-text-xl hover:tw-font-bold" href="#artist">Artist</Nav.Link>
                            <Nav.Link className="tw-text-white tw-uppercase tw-font-Barlow tw-text-xl hover:tw-font-bold" href="#faq">FAQ</Nav.Link>
                        </Nav>
                        <Nav className="lg:tw-ml-32 tw-my-5 tw-space-x-5 tw-flex tw-items-center tw-justify-center tw-flex-row">
                            <a className="facebook tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-125" href='https://facebook.com/' target="_blank" rel='noreferrer'>
                                <img src={facebook} alt="" width={30} />
                            </a>
                            <a className="twitter tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-125" href='https://twitter.com' target="_blank" rel='noreferrer'>
                                <img src={twitter} alt="" width={30} />
                            </a>
                            <a className="instagram tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-125" href='https://instagram.com' target="_blank" rel='noreferrer'>
                                <img src={insta} alt="" width={30} />
                            </a>
                            <a href="#" className="tw-text-black tw-uppercase tw-bg-white tw-px-6 tw-py-2 tw-font-bold tw-font-Barlow tw-rounded-full tw-text-lg tw-transition-all tw-ease-in-out tw-duration-500 hover:tw-scale-110">Join our Discord</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent