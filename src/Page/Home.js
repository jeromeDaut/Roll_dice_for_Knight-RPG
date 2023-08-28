import React from 'react';
import DicesSkills from '../components/dices/DicesSkills';
import DicesDomages from '../components/dices/DicesDomages';
import '../index.scss'

const home = () => {
    return (
        <main>
            <DicesSkills />
            <section>
            <DicesDomages />
            </section>
        </main>
    );
};

export default home;