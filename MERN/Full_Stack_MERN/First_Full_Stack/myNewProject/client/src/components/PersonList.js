import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PersonList(props) {

    const {people, setPeople} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then((res) => {
                //console.log(res.data);
                setPeople(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    });

    return (
        <div>
            {
                people.map((person, index) => {
                    return (
                        <div key={index}>
                            <p>{person.lastName}, {person.firstName}</p>
                            <Link to={`/people/${person._id}`}>{person.firstName}'s Page!</Link><br/>
                            <Link to={`/people/edit/${person._id}`}>Edit</Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PersonList;