import React, { useState, useContext } from 'react';
import "./styles.css"
import Header from "../../components/header/header";
import Footer from '../../components/footer/footer';
import Comment from "../../components/comment/comment";
import WriteComment from "../../components/writeComment/writeComment";
import CommentDenied from "../../components/commentDenied/commentDenied";
import { UserContext } from '../../contexts/userContexts';

function Comentarios() {

    const {login} = useContext(UserContext)

    return (
        <div>
            <Header />
            <div id="comments-background"></div>
            <div id="comments-container">
                <div id="comments-content">
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
            {login ? <WriteComment></WriteComment> : <CommentDenied></CommentDenied>}
            <Footer />
        </div>
    )
}

export default Comentarios