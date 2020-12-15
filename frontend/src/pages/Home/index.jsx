import React from 'react'

import Animation from '../../components/Animation'

import './styles.css'

import separator from '../../assets/images/separator.svg'
import yoda from '../../assets/images/characters/yoda.png'


const Home = () => {
    return (
        <>

            <Animation />
            <div className="section-1">
                <div className="container">
                    <header className="header">
                        <h2>Luke Code</h2>
                        <nav>
                            <button className="btn-1">
                                FAZER LOGIN
                            </button>
                            <button className="btn-2">
                                INSCREVA-SE
                            </button>
                        </nav>
                    </header>
                    <main>
                        <section>
                            <h1>Se torne um mestre <br /> da programação</h1>
                            <img src={separator} alt="" />
                            <p>
                                Dê o próximo passo para o seu futuro, <br />
                                que a força esteja com você!
                            </p>
                        </section>
                        <section>
                            <img src={yoda} alt="Yoda - Star Wars" title="Yoda - Star Wars" />
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Home