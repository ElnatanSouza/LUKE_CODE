import React from 'react'

import Animation from '../../components/Animation'

import './styles.css'

import separator from '../../assets/images/separator.svg'
import yoda from '../../assets/images/characters/yoda.png'
import courseReactRedux from '../../assets/images/courses/react-redux.jpg'
import coursePHP from '../../assets/images/courses/php.jpg'
import courseFlutter from '../../assets/images/courses/flutter.jpg'
import CardCourse from '../../components/CardCourse'

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

            <div className="section-2">
                <div className="container">
                    <h2>+3 Cursos completos</h2>
                    <p>
                        Na Luke code, você tem acesso a 3 cursos gratuitos, basta se cadastrar na plataforma.
                        </p>
                    <section className="card-container">
                        <CardCourse image={courseReactRedux} description="Desenvolvimento front-end React e Redux" >
                            Desenvolvimento front-end <br />React e Redux
                        </CardCourse>
                        <CardCourse image={coursePHP} description="PHP 7 - Trabalhando com PSRs">
                            PHP 7 - Trabalhando com PSRs
                        </CardCourse>
                        <CardCourse image={courseFlutter} description="Desenvolvimento IOS e Android com Flutter">
                            Desenvolvimento IOS e Android <br /> com Flutter
                        </CardCourse>
                    </section>
                    <button>
                        INSCREVA-SE
                    </button>
                </div>
            </div>
            <div className="section-3">
                <div className="container">
                    <h2>O que oferecemos para você</h2>
                    <section className="categories-container">

                        <div className="category-card">
                            <div className="category-card-image">
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div className="category-card-content">
                                <h4>BACK-END</h4>
                                <p>22 Cursos</p>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Home