import React from 'react';

function Boxes(props) {
    const colors = props.colors;
    
    return (
        <div>
            {
                colors.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "20px",
                        width: "100px",
                        height: "100px",
                        backgroundColor: color
                    }}>
                    </div>
                ))
            }
        </div>
    );
}

export default Boxes;