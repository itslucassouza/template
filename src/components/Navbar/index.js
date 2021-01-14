import React, { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';

import './styles.scss';

const NavbarComponent = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const handleClickMobileMenu = () => setMobileMenu(!mobileMenu);

    return (
        <header className="header-container">
            <span className="logo">HUB EWZ</span>

            <div className="mobile-menu" onClick={handleClickMobileMenu}>
                {mobileMenu ? <FaTimes /> : <FaBars />}
            </div>

            <Nav
                className="nav-container"
                style={{ right: mobileMenu ? '0' : '-999px' }}
            >
                <ul>
                    <li>Home</li>
                    <li>Coldcall</li>
                    <li>Produtos</li>
                    <li>Renda Variável</li>
                    <NavDropdown title="IP" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">
                            Imobiliário
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Saúde</NavDropdown.Item>
                        <NavDropdown.Item href="#">Vida</NavDropdown.Item>
                    </NavDropdown>
                    <li>Câmbio</li>
                    <NavDropdown
                        title="Operacional"
                        id="collasible-nav-dropdown"
                    >
                        <NavDropdown.Item href="/marketing">
                            Marketing
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            Recursos Humanos
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/tech">
                            Tecnologia
                        </NavDropdown.Item>
                    </NavDropdown>
                </ul>
            </Nav>
        </header>
    );
};

export default NavbarComponent;
