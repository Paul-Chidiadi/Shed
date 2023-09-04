import React from "react";

export default function About() {
  return (
    <div className="about">
      <h3 className="heading">ABOUT</h3>
      <h1 className="page--name">LEARN MORE ABOUT ME</h1>
      <div className="info">
        <img src="/images/about-img.jpg" alt="me" />
        <div className="info-text">
          <h1>Physiologist, Wellness Coach and Entrepreneur</h1>
          <p>
            Shedrack Nwaokocha is Physiologist, Wellness Coach/Speaker and
            Entrepreneur. He is the founder of The Empowered Youth (Tey-Power) a
            youth based organization born to empower the minds of youths to
            cause a change in the society through positive influence. He holds a
            Master's degree in Cardiovascular Physiology among other
            certifications and has enjoyed 5 years of experience working with
            youths and youth based organizations, preparing and organizing
            trainings, workshops and discussions that centre on the development
            of young people. His goals align with the United Nations SDG’s
            3,4,and 5. Which are Good Health and wellbeing, Quality education
            and Gender Equality.
          </p>
          <ul>
            Shedracks work with The Empowered Youth focuses on:
            <li>
              Empowering the Minds of young people to become self aware,
              recognise their strengths and take responsibility to overcome
              their weaknesses.
            </li>
            <li>
              Empowering young people with knowledge and skill sets that will
              help them initiate change in their various communities.
            </li>
            <li>
              Create a humane and thriving environment for young persons to
              achieve their dreams and life expectations by addressing common
              challenges they face.
            </li>
          </ul>
          <p>
            His work with Tey-Power has hosted over 50 online and offline
            sessions with over 100 youth participants mentored on a broad range
            of youth based topics including Emotional intelligence, Health,
            Education, Positive mindset Reconditioning, Peer and workplace
            pressure, business etc. Shedrack has interest in Global Health,
            Technology, Advocacy, Legislation and Policy Making, and looks
            forward to providing better health solutions through health advocacy
            and technology.
          </p>
          <p>
            He anchors a Podcast session called "The Winning Conversation",
            where he shares engaging and life changing principles that set every
            listener on the way to success.
            <a
              target="_blank"
              rel="noreferrer"
              href="https://anchor.fm/the-winningconversation"
            >
              {"  "}Here is link to the podcast!
            </a>
          </p>
          <p>
            Shedrack is open to speak or be part of discussions relating to
            Youth development, Global Health, Wellness Coaching, Religion and
            any topic of interest.
          </p>
        </div>
      </div>

      <h3 className="heading">SKILLS</h3>
      <section className="skill">
        <div className="col">
          <div className="text">
            <p>LEADERSHIP</p>
            <p>100%</p>
          </div>
          <div className="range fill"></div>
        </div>
        <div className="col">
          <div className="text">
            <p>COMMUNICATION</p>
            <p>80%</p>
          </div>
          <div className="range"></div>
        </div>
        <div className="col">
          <div className="text">
            <p>CRITICAL THINKING</p>
            <p>100%</p>
          </div>
          <div className="range fill"></div>
        </div>
        <div className="col">
          <div className="text">
            <p>PROBLEM SOLVING</p>
            <p>80%</p>
          </div>
          <div className="range"></div>
        </div>
        <div className="col">
          <div className="text">
            <p>MANAGEMENT</p>
            <p>100%</p>
          </div>
          <div className="range fill"></div>
        </div>
        <div className="col">
          <div className="text">
            <p>INTERPERSONAL RELATIONS</p>
            <p>80%</p>
          </div>
          <div className="range"></div>
        </div>
        <div className="col">
          <div className="text">
            <p>PRODUCT DESIGN (UI/UX)</p>
            <p>70%</p>
          </div>
          <div className="range"></div>
        </div>
        <div className="col">
          <div className="text">
            <p>RESOURCEFULNESS</p>
            <p>80%</p>
          </div>
          <div className="range"></div>
        </div>
        <div className="col">
          <div className="text">
            <p>ORGANIZATION</p>
            <p>100%</p>
          </div>
          <div className="range fill"></div>
        </div>
      </section>

      <h3 className="heading">LANGUAGES</h3>
      <div className="language">
        <section>
          <div className="circle"></div>
          <span> English- Fluent (Reading, Writing and Spoken)</span>
        </section>
        <section>
          <div className="circle"></div>
          <span>Igbo- Native</span>
        </section>
      </div>

      <h3 className="heading">ENDORSEMENTS</h3>
      <div className="language">
        <section>
          <div className="circle"></div>
          <span> English- Fluent (Reading, Writing and Spoken)</span>
        </section>
        <section>
          <div className="circle"></div>
          <span>Igbo- Native</span>
        </section>
      </div>
    </div>
  );
}
