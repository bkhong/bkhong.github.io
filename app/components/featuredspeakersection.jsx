import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {FeaturedSpeaker} from '../components/featuredspeaker.jsx';
import {TedButton} from '../components/tedbutton.jsx';

const speakers =[
			{name:"Murph", 	desc:"Head Manager for Vanguard Team", 		img:"/app/resources/images/testimonials/murph.jpg"},
			{name:"SML", 	desc:"Leader of Reddit Bravo, Founder of RoyaleAPI", 		img:"/app/resources/images/testimonials/sml.jpg"},
			{name:"SuicidalKillers", desc:"Former Leader of Gizer Pro Team", 		img:"/app/resources/images/testimonials/sk.jpg"},
			];

export class Speakers extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.getSelection = this.getSelection.bind(this);
		this.state = {table:this.getSelection()};
	}
	
	getSelection() {
		var table = [];
		while (table.length < 3) {
			const num = Math.floor(Math.random() * speakers.length);
			if (!table.includes(speakers[num])) table.push(speakers[num]);
		}
		return table;
	}
	
	render() {
		var table = this.state.table;
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.headercontainer)}>
					<p className={css(styles.header)}>Testimonials From</p>
				</div>
				<FeaturedSpeaker 
					name={table[0].name}
					desc={table[0].desc}
					img={table[0].img}
					flipped={true}
				/>
				<FeaturedSpeaker 
					name={table[1].name}
					desc={table[1].desc}
					img={table[1].img}
					flipped={false}
				/>
				<FeaturedSpeaker 
					name={table[2].name}
					desc={table[2].desc}
					img={table[2].img}
					flipped={true}
				/>
				<TedButton name="View All Testimonials" linkTo="/testimonials" />
			</div>
		);
	}
}

const styles = StyleSheet.create({
	header: {
        fontFamily: 'AvenirBlack',
		fontSize:'3vw',
		color:'white',
		display:'inline-block',
		paddingLeft:'2vw',
		paddingRight:'2vw',
	},
	headercontainer: {
		width:'100%',
		color:'white',
		textAlign:'center',
	},
	container: {
		position:'relative',
		width: '100%',
		height: 'auto',
		margin:'0px, 0px, 0px, 0px',
	},
});