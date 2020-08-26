import * as React from 'react';

const BodyPart = (props) => (
  <section className="body-part">
    <h2 className="body-part__head">{props.header}</h2>

    <hr className="break-line" />

    {props.children}
  </section>
)

export default BodyPart;
