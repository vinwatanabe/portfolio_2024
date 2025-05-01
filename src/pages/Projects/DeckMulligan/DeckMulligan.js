import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../components/Menu';
import scrollTop from '../../../functions/scrollTop';
import ScrollTopButton from '../../../components/ScrollTopButton';

const DeckMulligan = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  const ghLink = '';
  const projLink = 'https://deckmulligan.vercel.app/';

  const githubLink = (
    <Link to={ghLink} target='blank'>
      <svg
        className='stroke-lightBlue hover:stroke-orange ease-in duration-200'
        xmlns='http://www.w3.org/2000/svg'
        width='18.797'
        height='22.005'
        viewBox='0 0 18.797 22.005'
      >
        <g id='github-svgrepo-com' transform='translate(1.13 1.005)'>
          <path
            id='Path_1'
            data-name='Path 1'
            d='M9.8,23V20.156l.038-2.021a2.844,2.844,0,0,1,.7-1.68l.018-.02a.029.029,0,0,0-.018-.048h0C7.826,16.051,5,14.914,5,9.964A5.219,5.219,0,0,1,6.124,6.636l.079-.1h0a.159.159,0,0,0,.03-.149l0-.009Q6.2,6.293,6.179,6.2a5,5,0,0,1,.169-3.094l.009-.022a.111.111,0,0,1,.083-.071h0c.24-.043,1.212-.1,3.073,1.176l.176.123h0a.175.175,0,0,0,.149.026h0q.15-.042.3-.08a10.982,10.982,0,0,1,5.38,0q.143.036.285.076l.006,0a.206.206,0,0,0,.175-.03h0l.164-.115c1.856-1.273,2.823-1.219,3.064-1.176h0a.114.114,0,0,1,.085.072l.006.014a4.975,4.975,0,0,1,.179,3.1q-.024.091-.052.182h0a.168.168,0,0,0,.032.157l0,0,.072.089a5.218,5.218,0,0,1,1.123,3.328c0,4.977-2.846,6.084-5.571,6.386h0a.019.019,0,0,0-.012.032l.012.013a3.108,3.108,0,0,1,.626,1.06,3.244,3.244,0,0,1,.172,1.295V23'
            transform='translate(-4 -3)'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
          <path
            id='Path_2'
            data-name='Path 2'
            d='M4,17a2.457,2.457,0,0,1,1.784,1.208,2.488,2.488,0,0,0,3.4.978'
            transform='translate(-4 -1)'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
        </g>
      </svg>
    </Link>
  );

  const projectLink = (
    <Link to={projLink} target='blank'>
      <svg
        className='fill-lightBlue hover:fill-orange ease-in duration-200'
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
      >
        <path
          id='open_in_new_FILL0_wght400_GRAD0_opsz40-2'
          data-name='open_in_new_FILL0_wght400_GRAD0_opsz40'
          d='M121.852,236A1.882,1.882,0,0,1,120,234.148v-16.3A1.882,1.882,0,0,1,121.852,216h7.759v1.852h-7.759v16.3h16.3v-7.759H140v7.759A1.882,1.882,0,0,1,138.148,236Zm5.481-6.019-1.3-1.315,10.815-10.815h-5.389V216H140v8.537h-1.852v-5.37Z'
          transform='translate(-120 -216)'
        />
      </svg>
    </Link>
  );

  return (
    <div className='font-inter text-base text-lightBlue'>
      <Menu />
      <ScrollTopButton />

      <div className=''>
        <picture className=''>
          <img
            className='h-auto'
            src={
              process.env.PUBLIC_URL +
              '/images/projects/deckmulligan/deckmulligan_header.jpg'
            }
            alt=''
          />
        </picture>
      </div>

      {/* Header title */}
      <div className='sm:relative sm:h-40'>
        <div
          className={`relative sm:absolute sm:translate-y-[-50%] left-[50%] translate-x-[-50%] bg-darkBlue px-5 py-10 sm:py-16 w-[90%] sm:w-[80%] lg:w-[60%]`}
        >
          <p className='text-orange text-section-title sm:text-main-title font-bebas text-center mb-3'>
            DECK MULLIGAN
          </p>

          <p className='text-center mb-5'>Deck Mulligan</p>

          <div className='flex flex-row gap-5 justify-center'>
            {ghLink === '' ? '' : githubLink}
            {projLink === '' ? '' : projectLink}
          </div>
        </div>
      </div>

      {/* Text block */}
      <div className='flex flex-row justify-center mb-24'>
        <div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
          <p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
            Project Overview
          </p>
          <p className=''>
            Deck Mulligan is an AI-powered web platform that helps Magic: The
            Gathering players organize their personal card collections and build
            optimized decks based on what they already own. By integrating AI
            technology, the platform delivers customized, format-specific deck
            suggestions that save time, reduce waste, and enhance gameplay.
          </p>
        </div>
      </div>

      {/* Full image block */}
      <div className='flex flex-row justify-center mb-24'>
        <img
          src={
            process.env.PUBLIC_URL +
            '/images/projects/deckmulligan/deckmulligan_img1.jpg'
          }
          alt=''
        />
      </div>

      {/* Text block */}
      <div className='flex flex-row justify-center mb-24'>
        <div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
          <p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
            Challenge Statement
          </p>
          <p className=''>
            Magic: The Gathering players often accumulate thousands of cards
            over time, many of which go unused due to lack of organization,
            difficulty in building cohesive decks, or reliance on online deck
            lists that don't match their personal collections. Most existing
            tools are either too generic, overly complex, or push players toward
            buying new cards instead of making the most of what they already
            own.
          </p>

          <br />
          <p className=''>
            The challenge was to create an intuitive, AI-driven solution that
            empowers players to build competitive and creative decks using only
            the cards they have on hand—without sacrificing quality, variety, or
            fun.
          </p>
        </div>
      </div>

      {/* Text block */}
      <div className='flex flex-row justify-center mb-24'>
        <div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
          <p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
            Objectives
          </p>
          <p>
            The goal was to make deckbuilding more accessible, efficient, and
            personally rewarding, especially for players with limited budgets or
            large, underutilized collections.
          </p>
          <br />
          <p className=''>
            <span className='font-bold text-orange'>Build with AI:</span> Enable
            AI-generated decks based only on the user’s owned cards, tailored to
            different formats and playstyles
          </p>
          <p className=''>
            <span className='font-bold text-orange'>Organize with ease:</span>{' '}
            Help users digitize, sort, and manage their card collections by
            format, rarity, or type.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>Reduce card waste:</span>{' '}
            Minimize the number of forgotten or unused cards by surfacing
            synergies and combos from within their collection.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>
              Budget-friendly decks:
            </span>{' '}
            Help users build competitive decks without the need to purchase
            expensive or new cards.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>
              Simplify deckbuilding:
            </span>{' '}
            Make it easy for all player levels, from casual to competitive, to
            create and customize decks quickly.
          </p>
        </div>
      </div>

      {/* Text block */}
      <div className='flex flex-row justify-center mb-24'>
        <div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
          <p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
            Research and strategy
          </p>

          <p>
            I took a user-centered approach to understand player behaviors,
            identify gaps in existing tools, and shape a strategy that aligned
            with both player needs and technical possibilities.
          </p>
          <br />

          <p className=''>
            <span className='font-bold text-orange'>User Interviews:</span>{' '}
            Interviewed casual, budget, and content-creator MTG players to
            understand habits and frustrations.
          </p>

          <p className=''>
            <span className='font-bold text-orange'>Tool Audit:</span> Audited
            existing deckbuilding tools and collection managers to identify
            usability gaps.
          </p>

          <p className=''>
            <span className='font-bold text-orange'>Behavior Insights:</span>{' '}
            Discovered that 70%+ of users have over 500 cards they rarely use.
          </p>

          <p className=''>
            <span className='font-bold text-orange'>Persona Development:</span>{' '}
            Created user personas representing different playstyles and
            collection sizes to guide product decisions.
          </p>

          <p className=''>
            <span className='font-bold text-orange'>Pain Point Mapping:</span>{' '}
            Mapped out key frustrations in the collection-to-deck process to
            streamline navigation and reduce friction.
          </p>
        </div>
      </div>

      {/* Full image block */}
      <div className='flex flex-row justify-center mb-24'>
        <img
          src={
            process.env.PUBLIC_URL +
            '/images/projects/deckmulligan/deckmulligan_img2.jpg'
          }
          alt=''
        />
      </div>

      {/* Text block */}
      <div className='flex flex-row justify-center mb-24'>
        <div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
          <p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
            User Flow
          </p>
          <p className=''>
            The platform was designed to make navigation intuitive and the
            deckbuilding experience frictionless—from collection upload to AI
            deck generation:
          </p>
          <br />
          <p className=''>
            <span className='font-bold text-orange'>1. Smooth Onboarding:</span>{' '}
            Users can quickly upload cards manually, or by set/format filters.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>
              2. Organized Collections:
            </span>{' '}
            Cards are organized by format (e.g. Commander, Standard), color, or
            price for easy access.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>
              3. Instant Deckbuilding:
            </span>{' '}
            AI-powered deck creation suggestions are accessible with a single
            click directly from the user’s collection.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>
              4. Cross-Device Ready:
            </span>{' '}
            Fully responsive layout optimized for mobile and desktop, with
            minimal steps between actions.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>5. Easy Navigation:</span>{' '}
            Clean and simple UI structure guide users smoothly between
            collection, decks, and tools. Users are able to create, edit and
            delete their collections and easily manage their cards.
          </p>
        </div>
      </div>

      {/* Full image block */}
      <div className='flex flex-row justify-center mb-24'>
        <img
          src={
            process.env.PUBLIC_URL +
            '/images/projects/deckmulligan/deckmulligan_img3.jpg'
          }
          alt=''
        />
      </div>

      {/* Text block */}
      <div className='flex flex-row justify-center mb-24'>
        <div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
          <p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
            About the AI
          </p>
          <p className=''>
            Gemini AI was integrated to empower players with intelligent,
            personalized deckbuilding capabilities—rooted in their own card
            collections.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>
              1. Smart Recommendations:
            </span>{' '}
            The AI analyzes a user’s spare cards, identifying viable archetypes,
            synergies, and optimal commanders.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>
              2. Collection-Based Building:
            </span>{' '}
            Decks are built only using the cards users already own—no external
            marketplace push.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>3. Adaptive Learning:</span>{' '}
            AI evolves based on user behavior, improving suggestions over time
            for more accurate and creative outcomes.
          </p>
          <p className=''>
            <span className='font-bold text-orange'>4. Format Awareness:</span>{' '}
            Decks respect format rules (e.g., Commander, Standard), ensuring
            legality and thematic consistency.
          </p>
        </div>
      </div>

      {/* Full image block */}
      <div className='flex flex-row justify-center mb-24'>
        <img
          src={
            process.env.PUBLIC_URL +
            '/images/projects/deckmulligan/deckmulligan_img4.jpg'
          }
          alt=''
        />
      </div>

      {/* Full image block */}
      <div className='flex flex-row justify-center mb-24'>
        <img
          src={
            process.env.PUBLIC_URL +
            '/images/projects/deckmulligan/deckmulligan_img5.jpg'
          }
          alt=''
        />
      </div>

      {/* Full image block */}
      <div className='flex flex-row justify-center mb-24'>
        <img
          src={
            process.env.PUBLIC_URL +
            '/images/projects/deckmulligan/deckmulligan_img6.jpg'
          }
          alt=''
        />
      </div>

      {/* Text block */}
      <div className='flex flex-row justify-center mb-24'>
        <div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
          <p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
            Results
          </p>
          <p>
            The platform successfully enhanced engagement and card utilization
            for users, offering a smarter, more rewarding deckbuilding
            experience.
          </p>{' '}
          <br />
          <p className='font-bold text-orange'>Decks from Spare Cards</p>
          <p className='mb-4'>
            Users could instantly create complete Commander decks using their
            unused cards.
          </p>
          <br />
          <p className='font-bold text-orange'>Reduced Waste</p>
          <p className=''>
            On average, users saw a 38% decrease in the number of cards sitting
            idle in their collections.
          </p>
          <br />
          <p className='font-bold text-orange'>Improved Satisfaction</p>
          <p className=''>
            Positive feedback showed users felt more creative and in control of
            their decks and budgets.
          </p>
          <br />
          <p className='font-bold text-orange'>Increased Retention</p>
          <p className=''>
            Simplified collection management and AI assistance kept users coming
            back to refine and play.
          </p>
          <br />
        </div>
      </div>

      {/* Full image block */}
      <div className='flex flex-row justify-center mb-24'>
        <img
          src={
            process.env.PUBLIC_URL +
            '/images/projects/deckmulligan/deckmulligan_img7.jpg'
          }
          alt=''
        />
      </div>

      {/* Credits block */}
      <div className='flex flex-row justify-center mb-24'>
        <div className='flex flex-col lg:flex-row text-center lg:text-left justify-between w-[80%] gap-10 lg:gap-0'>
          <div>
            <p className='text-orange font-bebas text-section-subtitle'>
              Deck Mulligan
            </p>
            <ul>
              <li>
                <span className='font-bold'>Client:</span> Deck Mulligan
              </li>
            </ul>
          </div>

          <div>
            <p className='text-orange font-bebas text-section-subtitle'>Role</p>
            <ul>
              <li>Art Direction</li>
              <li>UX Designer</li>
              <li>Web Developer</li>
            </ul>
          </div>

          <div>
            <p className='text-orange font-bebas text-section-subtitle'>
              Credits
            </p>
            <ul>
              <li>
                <span className='font-bold'>Art Director:</span> Vinicius
                Watanabe
              </li>
              <li>
                <span className='font-bold'>UX Design:</span> Vinicius Watanabe
              </li>
              <li>
                <span className='font-bold'>Web Developer:</span> Vinicius
                Watanabe
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project navigation block */}
      <div className='flex flex-row justify-center pb-24'>
        <div className='flex flex-row justify-between w-[80%]'>
          <div className='text-orange hover:text-lightBlue stroke-orange hover:stroke-lightBlue cursor-pointer'>
            <Link
              className='flex flex-row text-right gap-3 items-center'
              to={'/mimo-restaurant'}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='10.784'
                height='18.411'
                viewBox='0 0 10.784 18.411'
              >
                <g
                  id='Seta'
                  transform='translate(-2560.256 4814.009) rotate(-135)'
                >
                  <line
                    data-name='Line 9'
                    x2='11.149'
                    transform='translate(1575 5209)'
                    fill='none'
                    strokeLinecap='round'
                    strokeWidth='2'
                  />
                  <line
                    data-name='Line 10'
                    y1='10.62'
                    transform='translate(1586.334 5209.083)'
                    fill='none'
                    strokeLinecap='round'
                    strokeWidth='2'
                  />
                </g>
              </svg>

              <p className='font-bold'>Previous project</p>
            </Link>
          </div>

          <div className='text-orange hover:text-lightBlue stroke-orange hover:stroke-lightBlue cursor-pointer'>
            <Link
              className='flex flex-row text-right gap-3 items-center'
              to={'/febraban-news'}
            >
              <p className='font-bold'>Next project</p>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='10.784'
                height='18.411'
                viewBox='0 0 10.784 18.411'
              >
                <g
                  id='Seta'
                  transform='translate(2571.04 -4795.598) rotate(45)'
                >
                  <line
                    data-name='Line 9'
                    x2='11.149'
                    transform='translate(1575 5209)'
                    fill='none'
                    strokeLinecap='round'
                    strokeWidth='2'
                  />
                  <line
                    id='Line_10'
                    data-name='Line 10'
                    y1='10.62'
                    transform='translate(1586.334 5209.083)'
                    fill='none'
                    strokeLinecap='round'
                    strokeWidth='2'
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckMulligan;
