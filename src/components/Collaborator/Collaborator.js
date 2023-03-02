import "./Collaborator.css";

// se vamos receber um objeto podemos usar {name, image, office} ao invés de usar o props como props.name props.office

export const Collaborator = ({name, image, office, background}) => {
    return (
        <div className="collaborator">
            <div className="header" style={background}>
                <img src={image} alt={name}/>
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    );
}