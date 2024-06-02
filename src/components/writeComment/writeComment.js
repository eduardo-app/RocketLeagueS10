import React from 'react';
import "./styles.css"


function WriteComment () {


    return (

    <div id="type-comment-container">
        <div className="type-comment-box">
            <textarea className="input-comment" type="mensagem"></textarea>
            <div className="type-comment-icon"></div>
        </div>
    </div>
    )
}

export default WriteComment