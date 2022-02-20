import React, { useState } from 'react'

function PersonCard(props) {
    const { firstName, lastName, age, hairColor } = props;
    const [stateAge, setStateAge] = useState(age);
    return (
        <div>
            <h3>{lastName}, {firstName}</h3>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setStateAge(parseInt(stateAge, 10) + 1)}>
                Birthday Button for {firstName} {lastName}
            </button>
        </div>
    );
}

export default PersonCard;
