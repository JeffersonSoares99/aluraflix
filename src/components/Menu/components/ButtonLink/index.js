import React from 'react';

function ButtonLink(props){
    // props => { className: "valor que for passado", href= "/"}
    console.log(props);
    return(
    <a  href={props.href} className={props.className}>
        Novo vídeo
    </a>
    );
}


export default ButtonLink;