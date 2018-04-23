import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {StyleSheet, css} from 'aphrodite';

export class About extends React.Component {
    componentDidMount() {
        document.title = "About - Brandank";
        window.scrollTo(0, 0);
    }
    
	render() {
		return (
            <div>
                <TEDNavbar index='0' />
                <Section title="About">
                    <p style={{textAlign: "center"}}><img src="/app/resources/images/brandon-hong.png" alt="brandank" /></p>
                    <p>
                        My name is Brandon Hong, and my in-game name is Brandank. I’m 17 years old and currently a junior studying at the University of Washington studying Computer Science and English. After middle school, I enrolled in a rigorous one-year preparatory program allowed me to bypass high school and become a fully matriculated college student. After the successful completion of the program, the most important takeaway for me grinding through every sleepless night is that I am prepared to make every necessary sacrifice to ensure that I achieve whatever I wanted to accomplish.
                    </p>
                    <p>
                        My passion for gaming originated from my desire to achieve in sports, music and academics. Before I started college, I was intensely involved in athletics such as basketball, track, cross country, ultimate frisbee, and tennis. I was also the concertmaster of the Bellevue Youth Symphony Orchestra. However, there was much less time for me to engage in these activities once college started, so playing Clash Royale at a high level functioned initially as a way for me to fulfill a competitive void. It has since then become much more than that. I have been touched by incredible people in the community, and have developed stronger leadership and professional skills through both playing for and leading a variety of teams.
                    </p>
                    <p>
                        Despite being college student, I have fully devoted myself to the responsibilities of a professional Clash Royale player. After signing with <a href="http://www.teamsingularity.com/">Singularity Esports</a> for competitive leagues and <a href="https://novaesports.com/">Nova Esports</a> for pushing maxed ladder, I have made the necessary sacrifices to ensure that I am able to average playing 5-6 hours a day on weekdays, and between 6-8 hours on weekends. Because of my background of being a Clash Royale coach and team leader, I am able to communicate complex and intangible ideas clearly. This skill has been especially useful in a team environment where I can analyze gameplay and provide insight on ways to improve and approach matchups differently. While I practice mechanical skills daily, I am highly adept at being able to dissect gameplay and strategize at a macro level.
                    </p>
                    <p>
                        Additionally, I maintain an active presence in many competitive team leagues and individual brackets, maintaining an aggregate win rate of around 80%. In particular for the CRL, I am interested in joining teams that are strongly invested in the future of mobile eSports. I am in strong agreement with many eSports entrepreneurs who know that the future of eSports lies on the mobile platform. Organizations who transcend the ‘mobile gaming stigma’ and are fully committed to pushing Clash Royale eSports to the fullest potential are teams I would be honored to be a part of. In addition to the skills I have spoken about prior, I have listed my competitive accomplishments below.
                    </p>
                </Section>
                <Section title="Accomplishments">
                    <ul>
                        <li>Professional player for <a href="http://www.teamsingularity.com/">Singularity Esports</a></li>
                        <li>Ladder pusher for <a href="https://novaesports.com/">Nova Esports</a> </li>
                        <li>Coach for <a href="https://www.teamliquidpro.com/">Team Liquid</a> IND Division</li>
                        <li>Coach of over 30 individual clients</li>
                        <li>Featured 2 times as a pro guest on Clash with Ash’s channel reviewing a <a href="https://t.co/nqSaT0WHSU">2.3 chip cycle deck</a> and a <a href="https://youtu.be/A6jU_Eg93_c">flying machine bridge spam deck</a></li>
                        <li>Personal best of 6412 on ladder</li>
                        <li>20 wins (CRL Qualified)</li>
                        <li>630k total challenge cards won</li>
                        <li>CWA <a href="https://twitter.com/Clash_with_Ash/status/900475447917596673">doubles cup</a> champion</li>
                        <li>Winner of 11 brackets (PCRA, millEsports and other special events) </li>
                        <li>Undefeated in RAL Season 2 (12-0 record)</li>
                        <li>Qualified for the <a href="https://twitter.com/TeamUSA_CR/status/976813674676572160">final round of Team USA tryouts</a> for CR Nations Cup</li>
                        <li>KOTRT Plexchat event winner streamed by FullFrontage</li>
                        <li>11 game win streak in Gamebattles Summer 2017 season</li>
                        <li>2nd place SCO season 1 (7-2 record)</li>
                        <li>CCGS Fall top 32 NA day 1 bracket semi-finalist</li>
                    </ul>
                    <br />
                    <br />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xt771mLBSq4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/A6jU_Eg93_c?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </Section>
                <TEDFooter />
            </div>
        );
	}
}