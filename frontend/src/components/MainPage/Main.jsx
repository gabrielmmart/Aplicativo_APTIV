import React from "react";
import './Main.css';
import Profile from '../Perfil/PerfilComponent'

// Import the images dynamically
import HoleriteImg from '../assetsbrancos/Holerite.png'
import UnimedImg from '../assetsbrancos/unimedIcon.png';
import UniOdontoImg from '../assetsbrancos/UniOdonto.png';
import SeguroDeVidaImg from '../assetsbrancos/SeguroVidaIcon.png';
import PoliclinImg from '../assetsbrancos/PoliclinIcon.png'
import SulAmericaImg from '../assetsbrancos/SulAmericaIcon.png'
import RestauranteImg from '../assetsbrancos/RestauranteIcon.png'
import FrotaImg from '../assetsbrancos/FrotaIcon.png'
import ADCImg from '../assetsbrancos/ADCIcon.png'
import FarmaciaImg from '../assetsbrancos/FarmaciaIcon.png'
import BradescoImg from '../assetsbrancos/BradescoIcon.png'
import ParceriasImg from '../assetsbrancos/ParceriaIcon.png'
import BeneficiosImg from '../assetsbrancos/BeneficiosIcon.png'
import CondutaImg from '../assetsbrancos/CondutaIcon.png'
import CipaImg from '../assetsbrancos/CipaIcon.png'
import ChevroletImg from '../assetsbrancos/ChevroletIcon.png'
import KPIImg from '../assetsbrancos/KPIIcon.png'
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
    },
    {
        id: 17,
        imgSrc: KPIImg,
        nomeApp: 'KPI',
        link: 'localhost:3000/kpi'
    }
    // ... add other app objects here as needed
];

const Main = () => {
    return (
        <section className="main container section">
            
            <Profile/>

            <div className="secContent">
                {Apps.map(({ id, imgSrc, nomeApp, link }) => (
                    <div key={id} className="singleDestination">
                        <div className="imageDiv">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={imgSrc} alt={nomeApp} />
                            </a>
                        </div>
                        <div className="nomeDiv" style={{ color: "white" }}>
                            <h4>{nomeApp}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Main;
