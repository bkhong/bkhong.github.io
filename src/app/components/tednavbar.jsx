import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite/no-important';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

export class TEDNavbar extends React.Component {
    render(){
        var links = [ {text: 'About', className: 'tednavlink', link: '#/about'},
                      {text: 'Coaching', className: 'tednavlink', link: '#/coaching'},
                      {text: 'Testimonials', className: 'tednavlink', link: '#/testimonials'},
                      {text: 'Contact', className: 'tednavlink', link: '#/contact'}];

        
        
        var fixed = false;
        if(this.props.fixed) fixed = this.props.fixed;
        
        return (
            <div>
                <Navbar className={css(styles.tednav)} fixedTop={fixed}>
                    <Navbar.Header>
                        <Navbar.Brand className={css(styles.tedbrand)} >
                            <center>
                                <Link to='/'><img className={css(styles.tednavlogo)} src="/app/resources/images/brandank.png" /></Link>
                            </center>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav className={css(styles.tednavsection)} pullRight>
                            { 
                                links.map((item, index) => { 
                                    if(index == this.props.index) {item.className += ' tedactive'}
                                    return <NavItem eventKey={index}  target={item.target} className={css(styles.tednavlinka)} key={item.text} href={item.link}>
                                                <center><span className={item.className} to={item.link}>{item.text}</span></center>
                                        </NavItem> 
                                }) 
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className={css(styles.undernav)}></div>
            </div>
        );
        AOS.refresh();
    }
}

/**
    <nav className={css(styles.tednav)} href='#'>
        <span className={css(styles.tednavcontainer)}>
            <Link to='/'><img className={css(styles.tednavlogo)} src="/app/resources/images/logo-red.png" /></Link>
        </span>
        <span className={css(styles.tednavcontainer)}>
            { 
                links.map((item, index) => { 
                    if(index == this.props.index) {item.className += ' active'}
                    return <span className={item.className} key={item.text}><Link className={css(styles.tednavlinka)} to={item.link}>{item.text}</Link></span> 
                }) 
            }
        </span>
    </nav>
*/

// Aphrodite CSS (doesn't support css selectors though)
const styles = StyleSheet.create({
    tednav: {
        backgroundColor: '#F5F5F5',
        height: '90px',
        lineHeight: '90px',
        paddingTop: '20px',
        paddingBottom: '20px',
        zIndex: '10',
        borderRadius: '0',
        MozBorderRadius: '0'
    },
    underNav: {
        height:'90px',
        width: '100%',
        color: 'red'
    },
    tedbrand: {
        display: 'flex',
        alignItems: 'center',
    },
    tednavsection: {
        paddingBottom: '5px'
    },
    tednavlogo: {
        height: '70px',
        float: 'left',
        marginTop: '12px', 
        marginBottom: '12px',
        marginLeft: '12%' 
    }, 
    tednavlinka: {
        color: 'black',
        margin: '0 10px 0 10px',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        fontSize: '16px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'color 0.2s ease-out',
        textDecoration: 'none',
        ':hover' : {
            color: '#ab1814',
            transition: 'color 0.2s ease-out'
        }
    }
});