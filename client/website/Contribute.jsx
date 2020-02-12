import React from 'react';
import logo from '../assets/images/logo.png';
import GitHubButton from 'react-github-btn';

const Hero = () => {
  return (
    <section id='hero'>
      <div id='hero-description'>
        <div className='logo-frame'>
          <img className='logo' src={logo} alt='react blue logo' />
        </div>
        <h2>React Blue[print]</h2>
        <div className='github-buttons'>
          <GitHubButton
            href='https://github.com/team-targaryen/react-blue'
            data-size='large'
            aria-label='Follow React Blue on GitHub'
          >
            Follow React Blue
          </GitHubButton>
          <GitHubButton
            href='https://github.com/team-targaryen/react-blue'
            data-icon='octicon-star'
            data-size='large'
            data-show-count='true'
            aria-label='Star React Blue on GitHub'
          >
            Star
          </GitHubButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;