import React from 'react';


const Cards = ({ id, name, email }) => {
    return (
        <article class="tc bg-whites b--black-10 dib br3 pa5 ma2 grow bw2 shadow-5">
            <div >
                <img alt="card_img" src={`https://loremflickr.com/320/240/${id}`} class="br-100 h4 w4 dib" title="Photo of id" />
                <h1 class="f4">{name}</h1>
                <hr class="mw3 bb bw1 b--black-10" />
            </div>
            <p class="lh-copy measure center f6 black-70">
                {email}
            </p>
            <h5>Emotion</h5>
        </article>
    );
}

export default Cards;