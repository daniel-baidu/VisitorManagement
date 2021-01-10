import React, { Component } from "react";

import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Akwaaba",
          "Welcome",
          "Herzlich Willkommen",
          "Bienvenue",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}

export default Type;
