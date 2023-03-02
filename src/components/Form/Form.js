import "./Form.css";
import TextField from "../TextField";
import React, { Fragment, useState } from "react";
import DropDown from "../DropDown";
import Button from "../Button";

export const Form = (props) => {

    const [name, setName] = useState('');
    const [office, setOffice] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onRegister({
            name,
            office,
            image,
            team
        });
        setName('')
        setOffice('')
        setImage('')
        setTeam('')
    }

    // Fragment é uma tag que não aparece no html

    return (
        <Fragment>
            <section className="form">
                <form onSubmit={onSave}>
                    <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <TextField
                        required={true}
                        label="Nome"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={value => setName(value)}
                    />
                    <TextField
                        required={true}
                        label="Cargo"
                        placeholder="Digite seu cargo"
                        value={office}
                        onChange={value => setOffice(value)}
                    />
                    <TextField
                        label="Imagem"
                        placeholder="Informe o endereço da imagem"
                        value={image}
                        onChange={value => setImage(value)}
                    />
                    <DropDown
                        required={true}
                        items={props.teams}
                        label="Times"
                        value={team}
                        onChange={value => setTeam(value)}
                    />
                    <Button>
                        Criar card
                    </Button>
                </form>
            </section>
        </Fragment>
    );

}