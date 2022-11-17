import React from 'react';


export default function Gif({id,title,url}){
    return (
        <div className='gif-container'>
            <h4 className='gif-title' >{title}</h4>
            <img className='gif' alt={title} src={url} ></img>
        </div>
    )
}