import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {StyleSheet, css} from 'aphrodite/no-important';


export class Coaching extends React.Component {
    componentDidMount() {
        document.title = "Coaching - Brandank";
        window.scrollTo(0, 0);
    }
    
	render() {
		return (
            <div>
                <TEDNavbar index='1' />
                <Section title="Coaching">
                    <h3 className={css(styles.quote)}>"Brandank is the best coach in the whole CR community."</h3>
                    <h3 className={css(styles.person)}>— Mohamed Jaber, player coached by Brandank</h3>
                    <br />
                    <p>
                        I offer the highest level of coaching services available to clients of any skill level. I have been a Clash Royale coach for over a year, and have coached over 50 different individuals of varying competitive experience, while also leading groups of players in my previous teams in group coaching sessions. Coaching has been an immensely helpful tool for all players I have worked with, and allows a player to quickly learn crucial concepts and practices that are necessary to becoming a high level player. Before each coaching session, I work with clients to tailor their experience for what they find to be most helpful. Through engaging in fundamental processes such as explicating key matchups, analyzing replays, and deck breakdowns, I aid in establishing the foundations for each client through which they are able to experience drastic improvement independently after each session. One of the most valuable skills that I possess is being able to explain intangible and deeply complicated skills that professional players have that aren’t easily put into words. Examples of key ideas that I elucidate in each coaching session are deck philosophy, elixir counting/management, playstyle, maintaining a good rotation, mechanics, how to win against counters, prediction plays, and knowing which lane to attack. Feel free to read about <a href="#/testimonials">testimonials from previous/current clients</a>, and <a href="#/contact">contact me</a> for prices and more details about how your individualized session will be like if you are interested!
                    </p>

                    <br />
                </Section>
                <TEDFooter />
            </div>
        );
	}
}

const styles = StyleSheet.create({
    quote: {
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: '0'
    },
    person: {
        textAlign: 'center',
        marginTop: '0'
    }
});
