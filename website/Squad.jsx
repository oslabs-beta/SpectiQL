import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Team = () => {
  const [isCreatorProfiles] = useState([
    {
      name: 'Darren Zhu',
      github: 'https://github.com/Joodongri',
      linkedin: 'https://www.linkedin.com/in/darrenDzhu'
    },
    {
      name: 'Kendall Lu',
      github: 'https://github.com/kendall-lu',
      linkedin: 'https://www.linkedin.com/in/kendall-lu'
    },
    {
      name: 'Randy Reyes',
      github: 'https://github.com/rqreyes',
      linkedin: 'https://www.linkedin.com/in/rqreyes'
    },
    {
      name: 'Krystal Chen',
      github: 'https://github.com/kcrystalchen',
      linkedin: 'https://www.linkedin.com/in/kcrystalchen'
    }
  ]);
  const creatorProfileArray = isCreatorProfiles.map(profile => {
    return (
      <Profiles
        key={`profile${profile.name}`}
        src={profile.src}
        name={profile.name}
        linkedin={profile.linkedin}
        github={profile.github}
      />
    );
  });
  return (
    <section id='team'>
      <h2>Meet the Team</h2>
      <div id='profile-group'>{creatorProfileArray}</div>
    </section>
  );
};

const Profiles = ({ src, name, linkedin, github }) => {
  return (
    <React.Fragment>
      <div className='profile'>
        <ScrollAnimation animateIn='flipInY'>
          <figure>
            <div className='profile-frame'>
              <div className='profile-photo'></div>
            </div>
            <figcaption>{name}</figcaption>
          </figure>
        </ScrollAnimation>
        <div className='profile-links'>
          <a href={linkedin} target='_blank'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href={github} target='_blank'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </div>
      <i className='fas fa-exchange-alt'></i>
    </React.Fragment>
  );
};

export default Team;