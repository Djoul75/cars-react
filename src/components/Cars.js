const Car = ({color, nom, year}) => {

    const colorInfo = color ? `Couleur: ${color}` : `Couleur: "Néant"`;

    if (nom) {
        return (
            <tr>
                <td>Marque: { nom }</td>
                <td>Age: { year }</td>
                <td>{colorInfo}</td>
            </tr>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
