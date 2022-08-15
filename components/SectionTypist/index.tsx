import React from "react";
import Typist from "react-typist";
import Container from "components/Container";
import "react-typist/dist/Typist.css";

const propTypes = {};

const SectionTypist = () => {
  //! State

  //! Function

  //! Render
  return (
    <Container className="section-typist">
      <Typist
        avgTypingDelay={80}
        cursor={{
          show: true,
          blink: true,
          element: "|",
          hideWhenDone: false,
          hideWhenDoneDelay: 1000,
        }}
      >
        <p>The next level solution</p>
        <Typist.Delay ms={600} />
        <br />
        <p className="even-better">Even Better!</p>
      </Typist>
    </Container>
  );
};

SectionTypist.propTypes = propTypes;
export default SectionTypist;
