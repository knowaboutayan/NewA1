// SkillCard.js

import React from 'react';
import './SkillCard.css';

const SkillCard = ({ eachSkill = {} }) => {
    return (
        <div className="skill-card">
            <i className={`fab fa-${eachSkill && eachSkill.icon}`} />
            <h2>{eachSkill && eachSkill.name}</h2>
            <p>Experience: {eachSkill && eachSkill.experienceYear} year{eachSkill.experienceYear !== 1 ? 's' : ''}</p>
        </div>
    );
}

export default SkillCard;
