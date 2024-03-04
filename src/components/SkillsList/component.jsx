import React from 'react';

export default function SkillsList(props) {
    return(
        <div className='skills-list-wrapper'>
            <fieldset className='skills-list-fieldset'>
                <legend>{props.legend}</legend>
                <ul className='skills-list'>
                    {props.skills.map((skill) => {
                        return(<li key={skill.name} className='skills-item'>
                            <img src={skill.icon} className='skill-img'/>
                            <span className='skill-name'>{skill.name}</span>
                        </li>)
                    })}
                </ul>
            </fieldset>
        </div>
    )
}