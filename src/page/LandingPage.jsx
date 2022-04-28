import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import illustrationMockups from '../assets/illustration-mockups.svg';

import facebook from '../assets/icon-facebook.svg';
import facebookHover from '../assets/icon-facebookHover.svg';

import twitter from '../assets/icon-twitter.svg';
import twitterHover from '../assets/icon-twitterHover.svg';

import instagram from '../assets/icon-instagram.svg';
import instagramHover from '../assets/icon-instagramHover.svg';

import '../scss/main.scss';


export function LandingPage() {
    const [iconFacebook, setIconFacebook] = useState(true);
    const [iconTwitter, setIconTwitter] = useState(true);
    const [iconInstagram, setIconInstagram] = useState(true);

    return(
        <div className='container'>
            <div className='page'>
                <header>
                    <img src={logo} alt="Imagem da logo da Huddle - Descrição: caixa de mensagem com o nome Huddle ao lado e a cor é toda branca." />
                </header>

                <main>
                    <img src={illustrationMockups} alt="Imagem de conversas no modo desktop e o modo mobile está em cima de uma parte do modo desktop." />

                    <div className='infos'>
                        <h1>Build The Community Your Fans Will Love</h1>

                        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>

                        <button type='button'>Register</button>
                    </div>
                </main>

                <footer>
                    <div className='attribution'>
                        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.</p>
                    </div>

                    <div className='socialMedias'>
                        <div
                            onMouseOver = {() => setIconFacebook(false)}
                            onMouseOut = {() => setIconFacebook(true)}
                        >
                            {iconFacebook ?  <img src={facebook} alt="Ícone do Facebook - Descrição: Letra F com a cor de fundo do body(roxo) e a letra F está sobre um círculo branco." />
                            : 
                            <img src={facebookHover} alt="Ícone do Facebook - Descrição: Letra F com a cor de fundo do body(roxo) e a letra F está sobre um círculo rosa." />}
                           
                        </div>

                        <div 
                            onMouseOver = {() => setIconTwitter(false)}
                            onMouseOut = {() => setIconTwitter(true)}
                        >
                            {iconTwitter ? <img src={twitter} alt="Ícone do Twitter - Descrição: Passáro branco." />
                            :
                            <img src={twitterHover} alt="Ícone do Twitter - Descrição: Passáro rosa." />}
                            
                        </div>

                        <div
                            onMouseOver = {() => setIconInstagram(false)}
                            onMouseOut = {() => setIconInstagram(true)}
                        >
                            {iconInstagram ? <img src={instagram} alt="Ícone do Instagram - Descrição: Câmera da cor branca." />
                            :
                            <img src={instagramHover} alt="Ícone do Instagram - Descrição: Câmera da cor rosa." />} 
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}