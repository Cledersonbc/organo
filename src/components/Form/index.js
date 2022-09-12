import { useState } from "react";
import Button from "../Button";
import Combobox from "../Combobox";
import TextField from "../TextField";
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onSavedWorker({
            name,
            position,
            image,
            team
        });

        setName('');
        setPosition('');
        setImage('');
        setTeam('');
    };

    return (
        <section className="main-form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    label="Nome"
                    placeholder="Digite seu nome"
                    required={true}
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required={true}
                    value={position}
                    onChanged={value => setPosition(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <Combobox
                    label="Time"
                    itens={props.teamNames}
                    required={true}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}

export default Form;