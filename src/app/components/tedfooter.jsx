import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class TEDFooter extends React.Component {
    render(){
                
        return (
            <footer className={css(styles.tedfooter)}>
                <h3 className={css(styles.tedfooterh3)}>Brandank</h3>
                <p className={css(styles.tedfooterp)}>Professional Clash Royale Player and Coach</p>
                <img className={css(styles.tedfooterlogo)} src="/app/resources/images/brandank.png" />
                <div className={css(styles.tedfootergroup)}>
                    <a target="_blank" href="https://www.facebook.com/brandon.hong.756">
                        <img className={css(styles.tedfootericon)} src="/app/resources/images/icon-facebook.png" />
                    </a>
                    <a target="_blank" href="https://twitter.com/brandank_cr">
                        <img className={css(styles.tedfootericon)} src="/app/resources/images/icon-twitter.png" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/brandon.hong/">
                        <img className={css(styles.tedfootericon)} src="/app/resources/images/icon-instagram.png" />
                    </a>
                </div>
                <br/>
            </footer>
        );
    }
}

const styles = StyleSheet.create({
    tedfooter: {
        backgroundColor: '#F5F5F5',
        textAlign: 'center',
        paddingTop: '25px',
    },
    tedfooterp: {
        fontWeight: 'bolder',
        fontSize: '16px',
        textTransform: 'uppercase',
        margin: '0',
    },
    tedfooterh3: {
        fontSize: '24px',
        color: '#E62B25',
        fontWeight: 'bold',
        marginTop: '0',
        marginBottom: '10px',
    },
    tedfooterh4: {
        fontSize: '18px',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
        margin: '5px',
    },
    tedfooterh5: {
        textAlign: 'center',
        lineHeight: '13px',
        fontSize: '12px',
        margin: '0',
    },
    tedfooterlogo: {
        width: '100px',
        margin: '15px 0 15px 0',
    },
    tedfootericon: {
        width: '36px',
        margin: '0 10px 0 10px',
        verticalAlign: 'middle',
        transition: 'opacity 0.2s ease-out',
        ':hover': {
            opacity: '0.8',
            transition: 'opacity 0.2s ease-out'
        }
    },
    tedfootergroup: {
        marginBottom: '20px',
    }
});