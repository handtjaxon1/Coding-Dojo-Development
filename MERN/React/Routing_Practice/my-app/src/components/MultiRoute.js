import React from "react";
import { useParams } from "react-router-dom";

/**
 * Note: I first approached this by creating separate route components to handle the different paths
 * but after getting it functional and comparing to the solution I definitely like how simple and
 * effective the solution with one component is for handling the different routes/parameters
 */
function MultiRoute(props) {
    const { text, color, background } = useParams();

    return (
        <div>
            {
                // Conditionally render if it's a number or word based on whether the text is a number
                isNaN(text) ?
                <h1 style={color ? {color: color, backgroundColor: background} : null}>
                    The word is: { text }
                </h1> :
                <h1>The number is: { text }</h1>
            }
        </div>
    );
}

export default MultiRoute;