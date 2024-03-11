import htmlIcon from '../../../../assets/icons/html.png';
import cssIcon from '../../../../assets/icons/css-3.png';
import jsIcon from '../../../../assets/icons/js.png';
import tsIcon from '../../../../assets/icons/typescript.png';
import csharpIcon from '../../../../assets/icons/c-sharp.png';
import reactIcon from '../../../../assets/icons/physics.png';

import angularIcon from '../../../../assets/icons/angular.png';
import bootstrapIcon from '../../../../assets/icons/bootstrap.png';
import gsapIcon from '../../../../assets/icons/gsap-intro.png';
import gitIcon from '../../../../assets/icons/git.png';
import nodeIcon from '../../../../assets/icons/node.png';
import reduxIcon from '../../../../assets/icons/redux.png';
import mongoDbIcon from '../../../../assets/icons/mongodb.webp';
import mysqlIcon from '../../../../assets/icons/mysql.png';
import wpIcon from '../../../../assets/icons/wordpress.png';
import figmaDbIcon from '../../../../assets/icons/figma.png';
import photoshopIcon from '../../../../assets/icons/photoshop.png';
import AzureIcon from '../../../../assets/icons/azure.webp';
import jiraIcon from '../../../../assets/icons/Jira-Emblem.png';


export const SKILLS = {
    languages: [
        { name: "HTML", icon: htmlIcon, imgWidth: 60 },
        { name: "CSS", icon: cssIcon, imgWidth: 60 },
        { name: "JavaScript", icon: jsIcon, imgWidth: 60 },
        { name: "TypeScript", icon: tsIcon, imgWidth: 60 },
        { name: "C#", icon: csharpIcon, imgWidth: 60 },
    ],
    libraries: [
        { name: "React", icon: reactIcon, imgWidth: 60 },
        { name: "Angular", icon: angularIcon, imgWidth: 60 },
        { name: "Bootstrap", icon: bootstrapIcon, imgWidth: 60 },
        { name: "GSAP", icon: gsapIcon },
        { name: "Redux", icon: reduxIcon, imgWidth: 60 },
    ],
    others: [
        { name: "GIT", icon: gitIcon, imgWidth: 60 },
        { name: "Node", icon: nodeIcon, imgWidth: 60 },
        { name: "MongoDB", icon: mongoDbIcon },
        { name: "MySQL", icon: mysqlIcon, imgWidth: 60 },
        { name: "WORDPRESS", icon: wpIcon, imgWidth: 60 },
        { name: "Figma", icon: figmaDbIcon, imgWidth: 55 },
        { name: "Photoshop", icon: photoshopIcon, imgWidth: 60 },
        { name: "AZURE", icon: AzureIcon, imgWidth: 50 },
        { name: "JIRA", icon: jiraIcon },
    ]
}