import { Collaborator } from "../Collaborator/Collaborator";
import "./Teams.css";

export const Teams = (props) => {
    const background = {
        'backgroundColor': props.secondaryColor,
    };

    const title = {
        'borderColor': props.primaryColor
    };

    const card = {
        'backgroundColor': props.primaryColor
    }

    // Condicional no react nos ultilizamos uma condição e usamos o operador ternário && após nossa condição
    // se a condição for true ele vai retornar o segundo parâmetro da função que é a nossa tag html
    // ou podemos usar um operador ternário colocanod no lugar de && um ? e no fechamento da tag um : ''

    return (
        (props.collaborators.length > 0) && 
        <section className="teams" style={background}>
            <h3 style={title}>{props.name}</h3>
            <div className="collaborators">
                {props.collaborators.map(collaborator => <Collaborator key={collaborator.name} name={collaborator.name} office={collaborator.office} image={collaborator.image} background={card} />)}
            </div>
        </section>
    );
}