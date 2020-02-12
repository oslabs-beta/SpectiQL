import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Features = () => {
  return (
    <section id='features'>
      <h2>Streamline Your Development Process</h2>
      <figure className='feature-item'>
        <div className='image-frame'>
          <img src='../images/feature-1.gif' alt='feature 1' />
        </div>
        <ScrollAnimation animateIn='fadeInRight'>
          <figcaption className='feature-description'>
            <h3>Engineer-first Approach</h3>
            <p>
              We envision the ability for engineers to quickly create their
              component file structure coupled with a friendly UI/UX. This tool
              provides an export feature that sets up a pre-configured
              development environment for front-end and full-stack React
              applications.
            </p>
          </figcaption>
        </ScrollAnimation>
      </figure>
      <figure className='feature-item'>
        <ScrollAnimation animateIn='fadeInLeft'>
          <figcaption className='feature-description'>
            <h3>Why Use Us?</h3>
            <ul>
              <li>
                Create your React file structure, without a single line of code
              </li>
              <li>
                Need to create an application at scale? Perfect, our
                visualization tool is optimized for it
              </li>
              <li>
                Choose between React Hooks or React Class component templates,
                or make your own
              </li>
              <li>
                We get it, coffee is important - come back later, we’ve cached
                your work
              </li>
            </ul>
          </figcaption>
        </ScrollAnimation>
        <div className='image-frame'>
          <img src='../images/feature-2.gif' alt='feature 2' />
        </div>
      </figure>
      <figure className='feature-item'>
        <div className='image-frame'>
          <i class='fas fa-keyboard'></i>
          <i class='fas fa-sitemap'></i>
        </div>
        <ScrollAnimation animateIn='fadeInRight'>
          <figcaption className='feature-description'>
            <h3>Shortcuts and Views</h3>
            <p>
              Keyboard shortcuts right at your fingertips to perform undo
              (ctrl+z) and redo (ctrl+shift+z) actions and toggle between
              horizontal and vertical views of the component tree.
            </p>
          </figcaption>
        </ScrollAnimation>
      </figure>
    </section>
  );
};

export default Features;