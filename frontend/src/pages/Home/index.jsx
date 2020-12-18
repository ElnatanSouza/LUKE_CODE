import React from 'react'

import Animation from '../../components/Animation'

import './styles.css'

import separator from '../../assets/images/separator.svg'
import yoda from '../../assets/images/characters/yoda.png'
import courseReactRedux from '../../assets/images/courses/react-redux.jpg'
import coursePHP from '../../assets/images/courses/php.jpg'
import courseFlutter from '../../assets/images/courses/flutter.jpg'
import CardCourse from '../../components/CardCourse'
import CardCategory from '../../components/CardCategory'

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
                            <button className="btn-menu">
                                <i className="fas fa-bars"></i>
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
                        <CardCategory title="BACK-END" courses="22 cursos" color="#E31B1B" image="https://cdn3.iconfinder.com/data/icons/web-design-development-shady/48/backend_website-512.png" />
                        <CardCategory title="BANCO DE DADOS" courses="2 cursos" color="#F5E65A" image="https://img.icons8.com/nolan/2x/database.png" />
                        <CardCategory title="SEGURANÇA" courses="7 cursos" color="#9C66D1" image="https://getprivacy.com.br/wp-content/uploads/icone-lgpd-fornecedores.png" />
                        <CardCategory title="MOBILE" courses="9 cursos" color="#2159AB" image="https://icon-library.com/images/mobile-development-icon/mobile-development-icon-23.jpg" />
                        <CardCategory title="FRONT-END" courses="18 cursos" color="#59FE9B" image="https://cdn4.iconfinder.com/data/icons/technology-83/1000/app_frontend_end_front_front-end_front_end_development-512.png" />
                        <CardCategory title="CLOUD COMPUTING" courses="11 cursos" color="#E34B1B" image="https://image.flaticon.com/icons/png/512/2900/2900511.png" />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home