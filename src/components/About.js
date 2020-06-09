/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from './styles/About.module.css';

const About = () => (
  <div className={styles.container}>
    <h1 classnames="m-5">About</h1>
    <p className="about-text">
      This is a project to demonstrate mastery as a Final Project for
      Microverse&apos;s full-stack program.
    </p>
    <p className="about-text">
      To know more about this page, consider visiting and starring its repository
      <a href="https://github.com/WCanirinka/gym-trainer-app" target="_blank"> here</a>
    </p>
    <p className="about-text">
      The API used for this project is also part of the project and can be seen in the repository
      <a href="https://github.com/WCanirinka/trainers-api" target="_blank"> here</a>
    </p>
    <p className="about-text">Fell free to visit my social medias and send me a hello clicking on the icons below.</p>
    <div className="about-icon-container">
      <a href="https://github.com/WCanirinka/" className="about-icon github-icon" target="_blank" />
      <a href="https://twitter.com/WCanirinka" className="about-icon twitter-icon" target="_blank" />
      <a href="https://www.linkedin.com/in/wilfried-canirinka/" className="about-icon linkedin-icon" target="_blank" />
    </div>
    <p className="about-text">
      I have no business rights about the characters used in this catalog.
      This is only for learning purposes. All characters where found online.
    </p>
  </div>
);

export default About;
