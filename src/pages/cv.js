import React from "react"

import "../styles/cv.scss"

import GithubIcon from "../images/github.png"
import LinkedInIcon from "../images/linkedin.png"
import StackOverflowIcon from "../images/stackoverflow.png"

const Cv = () => (
  <div className="page-wrapper t-cv">
    <div className="intro">
      <h1>Tom Robinson, Development Lead</h1>
      <p>
        An experienced software engineer and team lead. I have an extensive
        background in architecting and developing high performance, scalable web
        applications using pair programming and test-driven development. I love
        to build, and be a part of, teams that write great code and ship awesome
        products!
      </p>
    </div>
    <div className="career">
      <h2>Career history</h2>
      <div className="job">
        <div className="job__title">
          <h3>
            Front-End Engineer (Contract) for{" "}
            <a href="https://www.teammachine.io/">Team Machine</a>
          </h3>
          <p className="job__date">March 2018 - Present</p>
        </div>
        <div className="job__description">
          <p>
            A startup based around organisational intelligence to help you
            understand how work really happens in your business.
          </p>
          <p>
            Front-end Javascript engineer responsible for delivering a React SPA
            using Redux and D3 that integrated with a GraphQL server and JSON
            API.
          </p>
          <p>
            There was a lot of room for creativity and collaboration as we tried
            to solve the usability and user experience problems of helping
            people dissect the network of their organisation and extract useful
            information. 
          </p>
          <p>
            I learned a lot about resilience in a fast-paced and changing
            environment and enjoyed close collaboration with the founders and
            other developers.
          </p>
          <h4>Technologies &amp; tools used</h4>
          <p>
            JavaScript (D3, React, Redux, ES6, Jest), HTML, CSS (SASS, BEMIT)
          </p>
        </div>
      </div>
      <div className="job">
        <div className="job__title">
          <h3>
            Front-End Engineering Lead for{" "}
            <a href="https://buildit.wiprodigital.com/">Buildit</a>
          </h3>
          <p className="job__date">March 2017 - March 2018</p>
        </div>
        <div className="job__description">
          <p>
            Working with high-profile clients to help transform the way they
            build experiences for the web by focussing on the latest
            technologies and best practice.
          </p>
          <h4>Responsibilities</h4>
          <ul>
            <li>
              Technical design and implementation of solutions in Javascript
              (React &amp; Redux)
            </li>
            <li>
              Collaborating with designers to implement a collection of React
              components for the LBG design system
            </li>
            <li>
              Finding effective ways to hire new engineers and putting these
              into practice
            </li>
            <li>Mentoring of junior developers</li>
            <li>Client stakeholder management</li>
          </ul>
          <h4>Products &amp; projects delivered</h4>
          <ul>
            <li>
              The Unified Design Framework (now Constellation), a design system
              for the Lloyds Banking Group
            </li>
            <li>Global Wells Operations Decision Support Tool for BP</li>
          </ul>
          <h4>Technologies &amp; tools used</h4>
          <p>
            JavaScript (ES6, Typescript, React, Redux, Jest, Node.js, Gatsby,
            Storybook), HTML, CSS (SASS, BEM), CloudFoundry, Jenkins, Azure
          </p>
        </div>
      </div>
      <div className="job">
        <div className="job__title">
          <h3>Development Lead for BBC Account</h3>
          <p className="job__date">September 2015 – March 2017</p>
        </div>
        <div className="job__description">
          <p>
            Led a team of 6 full-stack developers that delivered{" "}
            <a href="http://bbc.in/2gv37R8">
              a highly-scalable Identity and Access management system
            </a>
            . It serves thousands of requests per second using Node.js and React
            on an AWS infrastructure. It's successfully supported the
            challenging volumetrics of online voting for Strictly Come Dancing
            and Sports Personality of the Year.
          </p>
          <p>
            I stayed confident in our code using test-driven development (TDD),
            shared knowledge and ideas via pair programming and delivered value
            to the audience quickly with continuous delivery.
          </p>
          <h4>Responsibilities</h4>
          <ul>
            <li>
              Creating and maintaining a high quality codebase that provides a
              solid foundation on which to build features fast
            </li>
            <li>
              Finding creative solutions to technical design and infrastructure
              problems with the help of Technical Architects
            </li>
            <li>
              Head of Full-Stack Engineers that included line management of 6
              developers
            </li>
            <li>
              Working with senior stakeholders to create valuable features for
              our audience and communicate difficult messages when necessary
            </li>
            <li>
              Creating a system that is fast, accessible for all and guarantees
              the security of millions of users' data
            </li>
            <li>
              Designing our pipeline based on the Github flow. The final step in
              our Continuous Delivery model
            </li>
          </ul>
          <h4>Products &amp; projects delivered</h4>
          <ul>
            <li>
              <a href="http://bbc.in/2gaCu4S">BBC iD v5</a>: Sign-in and
              Register for the BBC
            </li>
            <li>
              <a href="http://bbc.in/2gaC7Hu">BBC Account</a>: View &amp; edit
              settings for your BBC account
            </li>
          </ul>
          <h4>Technologies &amp; tools used</h4>
          <p>
            JavaScript (ES6, Node.js, React, Mocha, Sinon, Nock, Gulp,
            Pug/Jade), HTML, CSS (SASS, BEM), AWS (EC2, S3), Jenkins,
            Confluence, JIRA
          </p>
        </div>
      </div>
      <div className="job">
        <div className="job__title">
          <h3>Development Lead for myBBC Personalisation</h3>
          <p className="job__date">September 2014 – September 2015</p>
        </div>
        <div className="job__description">
          <p>
            Led the hiring process to grow my team to double its original size.
            Taking tips and techniques from companies such as Google, I reworked
            the way we hire to ensure we found excellent engineers who
            positively influenced our culture.
          </p>
          <p>
            Delivered several PHP applications and JavaScript libraries to
            encourage more people to register and sign-in on the BBC. The Love
            Button and Share Tools were re-usable JavaScript modules that
            generated responsive widgets for use across the BBC sites.
          </p>
          <h4>Products &amp; projects delivered</h4>
          <ul>
            <li>
              <a href="http://bbc.in/23zj467">BBC Share Tools</a>
            </li>
            <li>BBC Competitions</li>
            <li>BBC Newsletters</li>
          </ul>
          <h4>Technologies &amp; tools used</h4>
          <p>PHP (Zend Framework, PHPUnit), JavaScript, HTML, CSS</p>
        </div>
      </div>
      <div className="job">
        <div className="job__title">
          <h3>Development Lead for BBC Open Games</h3>
          <p className="job__date">January 2014 – September 2014</p>
        </div>
        <div className="job__description">
          <p>
            Designed &amp; developed enabling services for BBC interactive
            content.
          </p>
          <h4>Products &amp; projects delivered</h4>
          <ul>
            <li>
              play.bbc.co.uk: a sandboxed environment for games and content
            </li>
            <li>
              Interactive Content Embed (ICE): a universal embed for interactive
              content
            </li>
            <li>
              <a href="http://bbc.in/1yDsMGv">Responsive Quizzes</a>
            </li>
            <li>
              <a href="http://bbc.in/1l6hdpm">Our World War</a> - Oversaw
              technical delivery of the BBC's first interactive episode
            </li>
          </ul>
        </div>
      </div>
      <div className="job earlier-experience">
        <div className="job__title">
          <h3>Earlier experience</h3>
        </div>
        <div className="job__description">
          <h4>Techical Lead (Senior Software Engineer) for BBC Open Games</h4>
          <p className="job__date">November 2012 – December 2013</p>
          <h4>Technical Lead (Senior Software Engineer) for BBC CBeebies</h4>
          <p className="job__date">February 2012 – November 2012</p>
          <h4>Freelance Front-end Web Developer for Bauer Media</h4>
          <p className="job__date">May 2007 – November 2012</p>
          <h4>Senior Software Engineer for BBC Games Grid</h4>
          <p className="job__date">November 2011 – February 2012</p>
          <h4>Web Developer for BBC Games Grid</h4>
          <p className="job__date">May 2010 – November 2011</p>
          <h4>Web Developer for BBC FM&amp;T Vision</h4>
          <p className="job__date">June 2009 – May 2010</p>
          <h4>Software Developer for Interlink Software</h4>
          <p className="job__date">August 2008 – May 2009</p>
          <h4>Junior Software Developer for Interlink Software</h4>
          <p className="job__date">June 2006 – July 2007</p>
        </div>
      </div>
    </div>
    <div className="personal">
      <h2>Things I love about my job</h2>
      <ul className="interests">
        <li>
          <h3>Creative process</h3>
          <p>
            Audiences are at the heart of everything we do. I love to create
            user experiences that delight.
          </p>
        </li>
        <li>
          <h3>Problem solving</h3>
          <p>
            There’s nothing more satisfying than solving a complex problem and
            my job allows me to do this every day.
          </p>
        </li>
        <li>
          <h3>Great culture</h3>
          <p>
            I understand the benefits of a great team culture &amp; work hard to
            create an environment where that can exist.
          </p>
        </li>
        <li>
          <h3>Collaboration</h3>
          <p>
            We make the best products when we work together, sharing points of
            view across disciplines. I've loved encouraging my teams to work in
            pairs with those in UX&amp;D and seeing the benefits.
          </p>
        </li>
      </ul>
      <h2>Education</h2>
      <p>BSc Computer Science (2:1), University of Manchester</p>
      <h2>Courses &amp; accreditations</h2>
      <ul className="achievements">
        <li>Functional Programming Principles in Scala, Coursera.org</li>
        <li>Certified Scrum Master</li>
      </ul>
      <h2>Key achievements</h2>
      <ul className="achievements">
        <li>
          Launching the BBC’s ID system to support the business' goal of
          encouraging millions of users to sign-in and register
        </li>
        <li>Building a happy, productive team of talented engineers</li>
        <li>
          Creating a 'universal embed' that serves millions of pieces of
          interactive content to the BBC audience each week
        </li>
      </ul>
      <h2>Interests</h2>
      <p>
        Drawing &amp; illustration, yoga, football, finding great restaurants
        and wine.
      </p>
      <div className="social">
        <h2>Social</h2>
        <a href="https://www.linkedin.com/in/tommrobinson">
          <img src={LinkedInIcon} alt="tommrobinson on LinkedIn" />
        </a>
        <a href="https://github.com/iamtmrobinson">
          <img src={GithubIcon} alt="iamtmrobinson on Github" />
        </a>
        <a href="http://stackoverflow.com/users/1700846/tom-robinson">
          <img src={StackOverflowIcon} alt="tom-robinson on Stack Overflow" />
        </a>
      </div>
    </div>
    <p className="footnote">
      Design based on lessons learned from{" "}
      <a href="http://www.atypeprimer.com/">A Type Primer by John Kane</a>.
    </p>
  </div>
)

export default Cv
