import React, { useEffect } from 'react';
import './Homepage.css';
import { blobTop, blobAbout } from '../../animation/anime';
import { homeAnimation, aboutAnimation } from '../../animation/gsapAnimation';
import Menu from '../../components/Menu';
import ScrollTopButton from '../../components/ScrollTopButton';
import ContactIcons from '../../components/ContactIcons';
import ProjectCard from '../../components/ProjectCard';
import ProjectsDevDescription from '../../assets/json/projectsDevDescription.json';
import ProjectsUXDescription from '../../assets/json/projectsUXDescription.json';

const Homepage = () => {
  useEffect(() => {
    blobTop('#blob-top path');
    blobAbout('#blob-about path');
    homeAnimation();
    aboutAnimation();
  }, []);

  // Just change the portfolioType based on URL
  const types = ['UX/UI Designer', 'Fullstack Developer'];
  let location = window.location.href;
  let portfolioType =
    location === 'https://viniwatanabe.vercel.app/' ? types[0] : types[1];
  const projectsJson =
    portfolioType === 'UX/UI Designer'
      ? ProjectsUXDescription
      : ProjectsDevDescription;

  // Skill Lists
  const listUX = (
    <ul className='columns-2 sm:columns-3 sm:gap-20'>
      <li>Figma</li>
      <li>Adobe XD</li>
      <li>Webflow</li>
      <li>Photoshop</li>
      <li>Adobe Illustrator</li>
      <li>After Effects</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Tailwind</li>
      <li>Bootstrap</li>
      <li>Javascript (ES6+)</li>
      <li>React</li>
      <li>JQuery</li>
      <li>NodeJS</li>
      <li>MongoDB</li>
      <li>Express</li>
    </ul>
  );

  const listDev = (
    <ul className='columns-2 sm:columns-3 sm:gap-20'>
      <li>Javascript (ES6+)</li>
      <li>React</li>
      <li>Typescript</li>
      <li>NodeJS</li>
      <li>Express</li>
      <li>MongoDB</li>
      <li>JQuery</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Tailwind</li>
      <li>Bootstrap</li>
      <li>Figma</li>
      <li>Adobe XD</li>
      <li>Photoshop</li>
    </ul>
  );

  return (
    <div className='font-inter text-base text-lightBlue' id='home'>
      <ScrollTopButton />

      <div className='relative overflow-hidden mb-40'>
        <picture className='absolute z-0 top-[40%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
          <svg
            id='blob-top'
            className='mx-auto w-[100vh] sm:w-auto h-[180vh]'
            viewBox='0 0 1427.9 1444.3'
            xmlns='http://www.w3.org/2000/svg'
          >
            <filter id='b'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='35' />
            </filter>
            <defs>
              <linearGradient id='a' x1='1.001' x2='.283' y1='.369' y2='.272'>
                <stop stopColor='#e65805' offset='0' />
                <stop stopColor='#006588' offset='1' />
              </linearGradient>
            </defs>
            <path
              transform='translate(223.958 719.536) rotate(-49)'
              d='M275,31c200,0,139,168,366,299,139,74,111,264,56,326-66,75-217,50-326,50.958C170,708-104,570-104,373.906S75,31,275,31Z'
              fill='url(#a)'
              filter='url(#b)'
              data-name='Path 1'
            />
          </svg>
        </picture>

        <Menu ids={true} />

        <div className='flex items-end h-[calc(100vh-100px)] mx-10'>
          <div className='flex flex-col w-96 mb-10 z-[999]'>
            <h1
              id='site-title'
              className='font-bebas text-orange text-7xl sm:text-main-title text-center sm:text-start'
            >
              {portfolioType}
            </h1>
            <p id='site-subtitle' className='pb-4 text-center sm:text-start'>
              <span className='text-orange'>{portfolioType}</span> that loves to
              build{' '}
              <span className='text-orange'>awesome digital experiences</span>
            </p>
            <div id='contact-information-title'>
              <ContactIcons justification={'sm:justify-start justify-center'} />
            </div>
          </div>
        </div>
      </div>

      <div className='relative overflow-hidden' id='about'>
        <picture className='absolute top-[45%] translate-y-[-50%] translate-x-[-20%] rotate-180 hidden sm:block'>
          <svg
            id='blob-about'
            xmlns='http://www.w3.org/2000/svg'
            width='1132.936'
            height='1121.681'
            viewBox='0 0 1132.936 1121.681'
          >
            <filter id='blurFilter'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='35' />
            </filter>

            <defs>
              <linearGradient
                id='linear-gradient'
                x1='0.526'
                y1='0.946'
                x2='0.83'
                y2='0.364'
                gradientUnits='objectBoundingBox'
              >
                <stop offset='0' stopColor='#e65805' />
                <stop offset='0.381' stopColor='#6e5f49' />
                <stop offset='1' stopColor='#006588' />
              </linearGradient>
            </defs>
            <path
              id='Path_5'
              data-name='Path 5'
              d='M235.148,31c179,0,125,184,327,326,125,81,99,288,50,356-59,81-194,55-292,55.624C141,770-104,619-104,405.3S56,31,235,31Z'
              transform='translate(759.378 1008.552) rotate(-169)'
              fill='url(#linear-gradient)'
              filter='url(#blurFilter)'
            />
          </svg>
        </picture>

        <div className='flex flex-row justify-end mx-5 sm:mx-10'>
          <div className='sm:basis-1/2 z-[99] text-center sm:text-start'>
            <div className='mb-20'>
              <p
                id='about-title'
                className='font-bebas text-section-title text-orange mb-3'
              >
                \\About me
              </p>

              <div id='about-text'>
                {portfolioType === 'UX/UI Designer' ? (
                  <p>
                    I'm Vinicius, a UX/UI Designer with experience crafting
                    immersive experiences for advertising agencies such as
                    ID\TBWA, AlmapBBDO and McGarryBowen. While working for these
                    agencies, I had the opportunity to create amazing projects
                    for global clients like Unicef, Intuit Quickbooks, M&Ms,
                    Snickers, Pedigree, Santander Bank, Claro, and more.
                  </p>
                ) : (
                  <p>
                    I'm Vinicius, a recently graduated Web Developer and former
                    Art Director/UI Designer with experience crafting immersive
                    experiences for advertising agencies such as ID\TBWA,
                    AlmapBBDO and McGarryBowen. While working for these
                    agencies, I had the opportunity to create amazing projects
                    for global clients like Unicef, Intuit Quickbooks, M&Ms,
                    Snickers, Pedigree, Santander Bank, Claro, and more.
                  </p>
                )}

                <p>
                  My passion lies in the transformative power of design and
                  technology — a belief that's driven my career to design and
                  develop awesome products for a variety of clients. I've
                  dedicated my craft to creating useful products through
                  research, problem solving and development.
                </p>
              </div>
            </div>

            <div className='mb-20'>
              <p
                id='experience-title'
                className='font-bebas text-section-subtitle text-orange mb-3'
              >
                Experience
              </p>
              <ul id='experience-text' className='font-bold'>
                <li>
                  <span className='text-orange'>
                    ID\TBWA - Senior Art Director / UX/UI Designer |
                  </span>{' '}
                  2018 - 2021
                </li>
                <li>
                  <span className='text-orange'>Agência3 - Art Director |</span>{' '}
                  2017 - 2018
                </li>
                <li>
                  <span className='text-orange'>
                    Almap BBDO - Art Director |
                  </span>{' '}
                  2016 - 2017
                </li>
                <li>
                  <span className='text-orange'>
                    ID\TBWA - Art Direction Assistant / UX/UI Designer |
                  </span>{' '}
                  2014 - 2016
                </li>
                <li>
                  <span className='text-orange'>
                    McGarryBowen - Art Direction Assistant |
                  </span>{' '}
                  2013 - 2014
                </li>
                <li>
                  <span className='text-orange'>Kanui - Web Designer |</span>{' '}
                  2013
                </li>
                <li>
                  <span className='text-orange'>
                    Agência Fórmula - Art Direction Intern |
                  </span>{' '}
                  2011 - 2013
                </li>
              </ul>
            </div>

            <div className='mb-40'>
              <p
                id='skills-title'
                className='font-bebas text-section-subtitle text-orange mb-3'
              >
                Skills
              </p>

              <div id='skills-text' className='flex flex-col sm:flex-row'>
                {portfolioType === 'UX/UI Designer' ? listUX : listDev}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='mx-5 sm:mx-10 mb-40 text-center sm:text-start'
        id='projects'
      >
        <p
          id='project-title'
          className='font-bebas text-orange text-section-title mb-8'
        >
          \\Projects
        </p>

        <div className='flex flex-col gap-28'>
          {projectsJson.map((project, index) => {
            return (
              <div key={index} className={project.display}>
                <ProjectCard position={index} project={project} />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className='flex flex-row mx-5 sm:mx-10 justify-center pb-24'
        id='contact'
      >
        <div className='flex flex-col sm:basis-1/2 text-center'>
          <p
            id='contact-title'
            className='font-bebas text-orange text-section-title mb-6'
          >
            \\Get in touch
          </p>
          <p id='contact-text' className='mb-6'>
            Thanks for exploring my portfolio! I'm thrilled you stopped by. Got
            questions, ideas, or just want to chat? I'd love to hear from you!
            Drop me a message—I'm just a click away. Let's make something
            awesome together!{' '}
          </p>
          <ContactIcons justification={'contact-icons justify-center'} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
