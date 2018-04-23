import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {Sponsor} from '../components/sponsor.jsx';

export class Testimonials extends React.Component {
    componentDidMount() {
        document.title = "Testimonials - Brandank";
        window.scrollTo(0, 0);
    }
    
	render() {            
		return (
            <div>
                <TEDNavbar index='2'/>
                <Section title='Testimonials'>
                    <h2>On Brandank as a Player and Teammate</h2>
                    <Sponsor title='Murph' subtitle='Head Manager of Vanguard Team'
                        img='/app/resources/images/testimonials/murph.jpg'
                        descr='"I’m Murph™, the head manager for Vanguard Team, and I’ve had the pleasure of having brandank work with and play for me. He’s a super chill guy, easy to get along with, can be relied upon and won’t flake when he says he can play. He’s super talented, winning almost every match he’s played in for me (I think half of his losses were while he was medically drugged, I shouldn’t have made him play), and although he BMs a lot (as signature), he means no harm. I’d strongly recommend him to any CRL team lucky enough to pick him up."'/>
                    
                    <Sponsor title='SuicidalKillers' subtitle='Former leader of Gizer Pro Team'
                        img='/app/resources/images/testimonials/sk.jpg'
                        descr='"Brandon Hong better known as Brandank is the most dedicated CR pro I have ever met. At all hours of the day he is playing, practicing all different types of archetypes. He keeps up to date on new meta decks as well as figures out what is needed to win difficult matchups and analyzes what causes him to lose games and it drastically gives him the ability to improve."'/>
                    <br />
                    <h2>On Brandank as a Coach</h2>
                    <Sponsor title='SML' subtitle='Founder of Royale API, Leader of Reddit Bravo'
                        img='/app/resources/images/testimonials/sml.jpg'
                        descr='"I’ve taken Clash Royale lessons from a few people in order to improve my game, and overall I would say that Brandank is the best of the bunch. I have been playing Three Musketeers for over 1.5 years and I didn’t think that I could get better at it. However, I saw an immediate improvement playing the meta 4.3 3M after our lesson, going from 61% win rate to 75% win rate within just 2 days. Brandank has taught me to be more aggressive in my playstyle and that tip alone has helped me not only with the deck we worked on, but also for all the other 3M variants that I do play. Besides his expert knowledge of the game, he is easy and nice to talk to, and the sessions were smooth and easy to follow. I highly recommend him as a coach for Clash Royale."'/>
                   
                    <Sponsor title='Fr0yo' subtitle='Clash Royale player coached by Brandank'
                        img='/app/resources/images/testimonials/fr0yo.jpg'
                        descr='"Since I started being coached by Brandank I have significantly improved in many aspects of the game. He is a great coach, he is very thurow and explains everything very well and to the point. He helped me get trough tough matchups by giving me endless top tier gameplay and walking me through it. As well as practicing the matchups trough friendly battles. Brandank really knows how to pinpoint mistakes and correct them."'/>

                    <Sponsor title='Mohamed Jaber - In Depth Testimonial' subtitle='Clash Royale player coached by Brandank'
                             img='/app/resources/images/testimonials/mohamed.jpeg'
                             descr='"Brandank is the <b>best coach in the whole CR community</b>. The way he breaks down
concepts and micro-interactions in game is second to none. Best of all he does it in a
way where an average or inexperienced player can easily understand. Tons of pro
players put out youtube videos showcasing decks but very few of them are able to
explain what they are doing in a way that we can all understand. A good coach like Brandank is
able to strip the game and it’s mechanics down to the bone and helps you fit it into
your own style of play.<br><br>
I came to Brandank looking for help to climb up ladder. I thought I knew how to play CR and that all I needed was a better deck. Brandank
explained to me that 4k was possible if I only learned to play smarter and learn to
adapt better to the ever changing meta. <b>He didn’t just show me a few decks, he showed me how to get better as an
overall player regardless of the deck.</b> For example, I was terrible at preserving elixir and was
often losing out on elixir trades. He taught me how to make smarter and more
positive trades.<br><br>
He accurately predicted that it would take about 3 weeks for me to get good enough with the deck to the point where I could
progress up into the 4000-trophy range. Sure enough 3 weeks after our ONE session I hit a PB of 4200. The man truly knows
what he is talking about when it comes to this game. The session isn’t meant to be
one where you just get shown a deck and receive tips. His coaching method allows
you to learn the skills necessary to progress AFTER the session on your own. He
broke down my major weaknesses in my overall gameplay and showed me how to
overcome them.<br><br>
Even after my session he would still answer any questions I have via twitter. <b>He was
invested in me as a client as much as I was invested into getting better.</b>
You might learn a new deck but you will most definitely get better as a player."'/>

                    <Sponsor title='Julian Reiffers' subtitle='Leader of 11F Gaming, coached by Brandank'
                        img='/app/resources/images/testimonials/julian.png'
                        descr='"Great coach, nice guy and helped me getting better at the game for sure! We did a few sessions in which I would play and get really helpful tips, as well ass look through replays to find mistakes. Overall I recommend taking lessons when you want to improve your gameplay!"'/>
                    

                    
                </Section>
                <TEDFooter />
            </div>
        );
	}
}
