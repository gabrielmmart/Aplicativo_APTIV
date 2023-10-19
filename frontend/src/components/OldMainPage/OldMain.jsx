/* Main.jsx */
import Profile from '../Perfil/PerfilComponent'
import React from "react";
import './OldMain.css';

// Import the images dynamically
import HoleriteImg from '../assets/Holerite.png'
import UnimedImg from '../assets/unimedIcon.png';
import UniOdontoImg from '../assets/UniOdonto.png';
import SeguroDeVidaImg from '../assets/SeguroVidaIcon.png';
import PoliclinImg from '../assets/PoliclinIcon.png'
import SulAmericaImg from '../assets/SulAmericaIcon.png'
import RestauranteImg from '../assets/RestauranteIcon.png'
import FrotaImg from '../assets/FrotaIcon.png'
import ADCImg from '../assets/ADCIcon.png'
import FarmaciaImg from '../assets/FarmaciaIcon.png'
import BradescoImg from '../assets/BradescoIcon.png'
import ParceriasImg from '../assets/ParceriaIcon.png'
import BeneficiosImg from '../assets/BeneficiosIcon.png'
import CondutaImg from '../assets/CondutaIcon.png'
import CipaImg from '../assets/CipaIcon.png'
import ChevroletImg from '../assets/ChevroletIcon.png'

const Apps = [
    {
        id: 1,
        imgSrc: HoleriteImg,
        nomeApp: 'Holerite',
        link: 'https://br.adp.com/'
    },
    {
        id: 2,
        imgSrc: UniOdontoImg,
        nomeApp: 'UniOdonto',
        link: 'https://www.uniodonto.coop.br/'
    },
    {
        id: 3,
        imgSrc: SeguroDeVidaImg,
        nomeApp: 'Seguro de Vida',
        link: 'google.com'
    },
    {
        id: 4,
        imgSrc: UnimedImg,
        nomeApp: 'Unimed',
        link: 'https://www.unimed.coop.br/site/'
    },
    {
        id: 5,
        imgSrc: PoliclinImg,
        nomeApp: 'Policlin',
        link: 'https://policlinsaude.com.br/index.asp'
    },
    {
        id: 6,
        imgSrc: SulAmericaImg,
        nomeApp: 'Sul America',
        link: 'https://portal.sulamericaseguros.com.br/home.htm'
    },
    {
        id: 7,
        imgSrc: RestauranteImg,
        nomeApp: 'Restaurante',
        link: 'google.com'
    },
    {
        id: 8,
        imgSrc: FrotaImg,
        nomeApp: 'Frota',
        link: 'google.com'
    },
    {
        id: 9,
        imgSrc: ADCImg,
        nomeApp: 'ADC',
        link: 'google.com'
    },
    {
        id: 10,
        imgSrc: FarmaciaImg,
        nomeApp: 'Farmacia',
        link: 'google.com'
    },
    {
        id: 11,
        imgSrc: BradescoImg,
        nomeApp: 'Bradesco',
        link: 'https://banco.bradesco/html/classic/index.shtm'
    },
    {
        id: 12,
        imgSrc: ParceriasImg,
        nomeApp: 'Parcerias',
        link: 'google.com'
    },
    {
        id: 13,
        imgSrc: BeneficiosImg,
        nomeApp: 'Benefícios',
        link: 'google.com'
    },
    {
        id: 14,
        imgSrc: CondutaImg,
        nomeApp: 'Conduta',
        link: 'google.com'
    },
    {
        id: 15,
        imgSrc: CipaImg,
        nomeApp: 'Cipa',
        link: 'google.com'
    },
    {
        id: 16,
        imgSrc: ChevroletImg,
        nomeApp: 'Chevrolet',
        link: 'https://www.chevrolet.com.br/'
    }
    // ... add other app objects here as needed
];

const OldMain = () => {
        return (
            <section className="Old main container section">
                {/*}
                <div className="profileDiv">
                    <div className="profilePicture">
                        <img src={Perfil} alt="Profile" />
                    </div>
                    <div className="profileContent">
                        <div className="profileName">
                            <h4>Nome do Usuário</h4>
                        </div>
                        <div className="infoButton">
                            <button>Mais info</button>
                        </div>
                    </div>
                </div>
                */}
    
                <Profile/>

                <div className="old-secContent">
                    <ul className="old-appList">
                        {Apps.map(({ id, imgSrc, nomeApp, link }) => (
                            <li key={id} className="old-appListItem">
                                <div className="old-itemContent">
                                    <div className="old-imageDiv">
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <img src={imgSrc} alt={nomeApp} />
                                        </a>
                                    </div>
                                    <div className="old-nomeDiv">
                                        <h4>{nomeApp}</h4>
                                        <div className="old-arrow">&#8594;</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
}

export default OldMain;
