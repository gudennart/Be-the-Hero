import React, { useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';

import './styles.css';
import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory;

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile');
        }catch(err){
            alert("Erro ao cadastrar, tente novamente");
        }
    }
    
    return  (
        <div className="Newincident">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be the Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
                    <Link className="link-back" to="/profile">
                        <FiArrowLeft size = {16} color = "#E02041" /> 
                        Voltar para Home
                    </Link>

                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder = "Nome do Incidente"
                        value={title}
                        onClick ={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onClick ={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onClick ={e => setValue(e.target.value)}
                    />
       
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}