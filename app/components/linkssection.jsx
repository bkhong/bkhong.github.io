import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';
import {Link} from 'react-router-dom';
import {InputArea} from '../components/inputarea.jsx';
import {TedButton} from '../components/tedbutton.jsx';

export class LinksSection extends React.Component {
    render(){
        return (
			<div className={css(styles.section)}>
				<LinkSection title="Take your Clash Royale gameplay to the next level!" color="#000000" bgColor="#FFFFFF">
					<TedButton name="Coaching" linkTo="/coaching"/>
				</LinkSection>

				<LinkSection title="Business Inquiries?" color="#FFFFFF" bgColor="#000000">
					<TedButton name="Contact" linkTo="/contact"/>
				</LinkSection>
			</div>
		);
    }
}

const styles = StyleSheet.create({
	section: {
        background: 'white',
		margin:'0px',
        paddingTop: '0px',
        paddingBottom: '0px'
    },
    container : {
		textAlign:'center',
	},
	linkButton : {
        border: 'none',
        userSelect: 'none',
        cursor: 'pointer',
		display:'inline-block',
		minWidth:'10vw',
		height:'5vw',
		paddingRight:'1.5vw',
		paddingLeft:'1.5vw',
		marginRight:'0px',
		marginLeft:'0px',
		marginBottom:'10vh',
		marginTop:'3vw',
        lineHeight: '5vw',
        textAlign: 'center',
		color:'#FFFFFF',
		backgroundColor:'#E62B25',
		fontSize: '14px',
        fontFamily: 'AvenirBlack',
        transition: 'opacity 0.2s ease-out',
		textTransform:'uppercase',
        ":hover" : {
            opacity: ".8",
            transition: 'opacity 0.2s ease-out'
        },
	},
    link : {
        color: 'white',
        textDecoration: 'none',
    }, 
});



class LinkSection extends React.Component {
    render(){
		var style = {
			backgroundColor:this.props.bgColor,
			color:this.props.color,
		}
        return (
			<div style={style} className={css(linkStyles.section)}>
				<div className={css(linkStyles.textcontainer)}>
					<p style={style} className={css(linkStyles.title)}> {this.props.title} </p>
				</div>
				{this.props.children}
			</div>
		);
    }
}



const linkStyles = StyleSheet.create({
	section: {
        minHeight: '5vh',
		height:'35vw',
		margin:'0px',
        paddingTop: '11.5vw',
        paddingBottom: '15vw'
    },
    title: {
        fontSize: '3vw',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
		marginTop:'0vw',
		textAlign: 'center',
		minHeight: '0vh',
    },
	textcontainer: {
		marginLeft:'30vw',
		width:'40vw',
	},
});