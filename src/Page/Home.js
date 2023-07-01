import React from 'react';
import DicesSkills from '../components/dices/DicesSkills';
import DicesDomages from '../components/dices/DicesDomages';
import '../index.scss'
import Header from '../components/header/Header';

const home = () => {
    return (
        <main>
            <Header />
            {/* <section> */}
            <DicesSkills />
            {/* </section> */}
            <section>
            <DicesDomages />
            </section>
        </main>
    );
};

export default home;