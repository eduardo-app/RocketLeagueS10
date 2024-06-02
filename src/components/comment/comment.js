import React from "react";
import "./styles.css"


function Comment() {
    return (
        <div className="pro-content">
            <div className="profile">
                <div className="photo"></div>
                <div className="name">Eduardo Pereira</div>
                <div className="time">• há muito tempo</div>
            </div>

            <div className="comment">Comentario</div>

            <div className="coment-divisor"></div>

            <div id="interaction">
                <div className="like"></div>
                <div className="answer"></div>
                <div className="share"></div>
            </div>
        </div>
    )
}

export default Comment