import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Details = () => {
  return (
    <section id='details'>
      <h2>React Blue is an Open-Source Project</h2>
      <p>Feel free to contribute</p>
      <ScrollAnimation animateIn='fadeInUp'>
        <a href='https://github.com/team-targaryen/react-blue' target='_blank'>
          <i className='fab fa-github'></i>
        </a>
      </ScrollAnimation>
    </section>
  );
};

export default Details;