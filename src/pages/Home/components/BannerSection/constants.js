import nodeIcon from '../../../../assets/icons/node.png';
import cssIcon from '../../../../assets/icons/css.png';
import htmlIcon from '../../../../assets/icons/html.png'; 
import reactIcon from '../../../../assets/icons/physics.png'; 
import jsIcon from '../../../../assets/icons/js.png'; 
import codeIcon from '../../../../assets/icons/code-icon.png'; 

export const TECH_ICONS = [
    {name: 'htmlIcon', altText:'HTML Icon', width: 50, src: htmlIcon, className: 'html-icon tech-icon'},
    {name: 'codeIcon', altText:'Code Icon', width: 25, src: codeIcon, className: 'code-icon tech-icon'},
    {name: 'cssIcon', altText:'CSS Icon', width: 50, src: cssIcon, className: 'css-icon tech-icon'},
    {name: 'reactIcon', altText:'React Icon', width: 40, src: reactIcon, className: 'react-icon tech-icon'},
    {name: 'nodeIcon', altText:'Node Icon', width: 35, src: nodeIcon, className: 'node-icon tech-icon'},
    {name: 'jsIcon', altText:'JS Icon', width: 40, src: jsIcon, className: 'js-icon tech-icon'},
]


export const FADE_IN_WITH_SCALE_EFFECT = {
    opacity: 1,
    transform: 'scale(1)',
    duration: 0.5,
    stagger: 0.5,
    ease: 'ease'
}

export const SWIPE_UP_FADE_IN_EFFECT = {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'ease'
}