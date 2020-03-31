import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');

    const history = useHistory;

    async function handleLogin (e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem("ongId", id);
            localStorage.setItem("ongName", response.data.name);
            history.push('/profile');
        }catch {
            alert("Falha no Login, tente novamente");
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Logo"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    
                    <input placeholder = "Sua ID"/>
                    <button className = "button" type ="submit">Entrar</button>

                    <Link className="link-back" to="/register">
                        <FiLogIn size = {16} color = "#E02041" /> 
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>
            <img src={HeroesImg} alt="Heroes"/>
        </div>
        
        );
}