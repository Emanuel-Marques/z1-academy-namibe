'use client';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.css';
import Logo from '../Logo';
import { barlowBold } from '@/app/lib/utils';

export default function Navbar() {
  return (
    <header className={ styles['main'] }>
      <Logo />
      <div className={ styles['nav'] }>
                <Nav variant='underline' defaultActiveKey='/'>
                  <Nav.Item>
                      <Nav.Link 
                        className={` ${barlowBold.className} text-black`}
                        href="/"
                      >
                        Home
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link
                        className={` ${barlowBold.className} text-black`}
                        eventKey="atletas"
                      >
                        Nossos atletas
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link
                        className={` ${barlowBold.className} text-black`}
                        eventKey="contatos"
                      >
                          Contatos
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link
                        className={`${barlowBold.className} text-black`}
                        eventKey="inscricao"
                      >
                          Inscreva-se
                      </Nav.Link>
                  </Nav.Item>
              </Nav>
      </div>
    </header>
  );
}