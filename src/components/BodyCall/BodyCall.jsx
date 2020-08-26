import * as React from 'react';

const BodyCall = (props) => (
  <section className="body-call">
    {props.image && <img className="body-call__image" src={props.image} />}

    <h3 className="body-call__head">{props.header}</h3>

    {props.children}
  </section>
)

export default BodyCall;
