//FONDOS DE PROYECTOS
import fondoPortfolio from '../../src/assets/images/mockups/portfolio.png';
import fondoTlatoani from '../../src/assets/images/mockups/tlani.png';
import fondoQuini from '../../src/assets/images/mockups/quini.png';
import fondoTickets from '../../src/assets/images/mockups/tickets.png';
import fondoPred from '../../src/assets/images/mockups/predacad.png';
import fondoIndoor from '../../src/assets/images/mockups/indoor.png';
import fondoPaq from '../../src/assets/images/mockups/paq.png';
import fondoSMBD from '../../src/assets/images/mockups/smbd.png';

//ICONOS BLANCOS
import iconReact from '../../src/assets/images/react.png';
import iconMotion from '../../src/assets/images/motion-icon.png';
import iconAI from '../../src/assets/images/adobe-illustrator.png';
import iconFigma from '../../src/assets/images/figma.png';
import iconAxios from '../../src/assets/images/axios.png';
import iconAngular from '../../src/assets/images/angular.png';
import iconBoots from '../../src/assets/images/bootstrap.png';
import iconHTML from '../../src/assets/images/html.png';
import iconCSS from '../../src/assets/images/css-3.png';
import iconJava from '../../src/assets/images/java-w2.png';
import iconPostgres from '../../src/assets/images/postgresql.png';
import iconCSharp from '../../src/assets/images/c-sharp-w.png';
import iconJS from '../../src/assets/images/js.png';

//LOGOS COLOR
import logoReact from '../../src/assets/images/logos/react.png';
import logoAI from '../../src/assets/images/logos/illustrator.png';
import logoMotion from '../../src/assets/images/logos/motion.svg';
import logoTail from '../../src/assets/images/logos/tailwind.png';
import logoSaas from '../../src/assets/images/logos/sass.png';
import logoFigma from '../../src/assets/images/logos/figma-2.png';
import logoAxios from '../../src/assets/images/logos/axios.png';
import logoAngular from '../../src/assets/images/logos/angular.png';
import logoHTML from '../../src/assets/images/logos/html.png';
import logoJS from '../../src/assets/images/logos/js.png';
import logoBots from '../../src/assets/images/logos/bootstrap.svg';
import logoJava from '../../src/assets/images/languajes/java.png';
import logoNetBeans from '../../src/assets/images/logos/netbeans.png';
import logoPostgres from '../../src/assets/images/logos/postgres.png';
import logoCSharp from '../../src/assets/images/languajes/c-sharp.png';
import logoNet from '../../src/assets/images/logos/net.png'

//MOCKUPS
//PORTFOLIO
import imgP1 from '../../src/assets/images/code/port/port-1.jpg';
import imgP2 from '../../src/assets/images/code/port/port-2.jpg';
import imgP3 from '../../src/assets/images/code/port/port-3.jpg';
//TLANI
import imgT1 from '../../src/assets/images/code/tlani/tlani-1.jpeg';
import imgT2 from '../../src/assets/images/code/tlani/tlani-2.jpeg';
import imgT3 from '../../src/assets/images/code/tlani/tlani-3.jpeg';
//QUINI
import imgQ1 from '../../src/assets/images/code/quini/quini-2.jpeg';
import imgQ2 from '../../src/assets/images/code/quini/quini-3.png';
import imgQ3 from '../../src/assets/images/code/quini/quini-1.jpeg';
//TICKETS
import imgTK1 from '../../src/assets/images/code/ticket/ticket-1.jpg';
import imgTK2 from '../../src/assets/images/code/ticket/ticket-2.jpg';
import imgTK3 from '../../src/assets/images/code/ticket/ticket-3.jpg';
//PREDACAD
import imgPre1 from '../../src/assets/images/code/pred/pre-1.jpeg';
import imgPre2 from '../../src/assets/images/code/pred/pre-2.jpeg';
//INDOOR
import imgIn1 from '../../src/assets/images/code/indoor/in-2.jpg';
import imgIn2 from '../../src/assets/images/code/indoor/in-3.jpg';
import imgIn3 from '../../src/assets/images/code/indoor/in-1.jpg';
//PAQUETERIA
import imgPaq1 from '../../src/assets/images/code/paq/paq1.png';
import imgPaq2 from '../../src/assets/images/code/paq/paq2.png';
import imgPaq3 from '../../src/assets/images/code/paq/paq3.png';
//SMBD
import imgSBD1 from '../../src/assets/images/code/smbd/smbd-1.jpg';
import imgSBD2 from '../../src/assets/images/code/smbd/smbd-2.jpg';
import imgSBD3 from '../../src/assets/images/code/smbd/smbd-3.jpg';
import imgSBD4 from '../../src/assets/images/code/smbd/smbd-4.jpg';

const dataProjects = [
    {
        id: 0,
        title: 'PORTFOLIO',
        type: 'web',
        description: 'I designed and developed a comprehensive web portfolio ' +
            'with the dual purpose of honing my skills and providing a platform to ' +
            'showcase my work and the tools I utilize as a web developer.' +
            ' This portfolio not only serves as a practice ground for refining ' +
            'my abilities but also as a means to highlight my expertise, projects, and the technologies' +
            ' I am proficient in within the realm of web development. ',
        tecnologies: ['React Native', 'Illustrator', "Motion", "Tailwind", "Saas"],
        date: 'February 2024',
        image: fondoPortfolio,
        icons: [iconReact, iconMotion,],
        logos: [logoReact,logoAI,logoMotion,logoTail,logoSaas],
        mockups: [imgP1,imgP2,imgP3],
        link: {
            linkto: "https://github.com/LuisPabloRocha/portfolio",
            linkType: "git"
        },

    },
    {
        id: 1,
        title: 'TLATOANI',
        type: 'app',
        description: 'I have been engaged in the design and implementation of a' +
            " 'Swipe Cards' type application where users answer a series of questions to" +
            ' obtain a match with a potential result.' +
            ' This project involves extensive work on UI/UX design and coding,' +
            'with a particular emphasis on integrating an API for data collection.' +
            ' Through this API, I have been able to enhance the applications functionality' +
            ' and user experience by dynamically retrieving and presenting relevant data. ',
        tecnologies: ['React Native', 'Illustrator', 'Figma'],
        date: 'Dec 2023-Current',
        image: fondoTlatoani,
        icons: [iconReact, iconAI],
        logos: [logoReact,logoAI,logoFigma],
        mockups: [imgT1,imgT2,imgT3],
        link: {
            linkto: "",
            linkType: "app"
        },
    },
    {
        id: 2,
        title: 'QUINI',
        type: 'app',
        description: 'Developed a soccer betting app to keep track of your sports bets with your friends using React Native Framework. ' +
            'Design and creation of brand identity, logo and screens, based on basic UI/UX design patterns, using tools such as Figma and Illustrator. ' +
            'API data consumption using Axios. ',
        tecnologies: ['Figma', 'React Native', 'Axios'],
        date: 'August 2023-Current',
        image: fondoQuini,
        icons: [iconReact, iconFigma,iconAI],
        logos: [logoFigma,logoReact,logoAxios],
        mockups: [imgQ1,imgQ2,imgQ3],
        link: {
            linkto: "",
            linkType: "page"
        },

    },
    {
        id: 5,
        title: 'EVENTS TICKET',
        type: 'web',
        description: 'Creation of a website dedicated to showcasing events and concerts in Mexico, leveraging data from the Tickemasters API FOR DEVELOPERS. Implementation of modern web development techniques such as hooks, states, styles, routing, fetch, and local storage for efficient management of user information and saved favorite events.',
        tecnologies: ['React', 'Axios'],
        date: 'Sep-Dec 2023',
        image: fondoTickets,
        icons: [iconReact, iconAxios],
        logos: [logoReact,logoAxios],
        mockups: [imgTK1,imgTK2,imgTK3],
        link: {
            linkto: "https://github.com/LuisPabloRocha/tickets-masters",
            linkType: "git"
        },

    },
    {
        id: 3,
        title: 'PRED-ACAD',
        type: 'web',
        description: 'Interface design following basic UX/UI principles with Figma, Ilustrator and Photoshop. ' +
            'Recollection and pre-processing data (student academic records) using data sheets [Excel]. ' +
            'Developed and programmed a web system (data interpretation) that predicts the probability that a student will pass a subject using data mining techniques. (Web APIs and JSON). '+
            'Collaborated closely with my team and implemented the Scrum framework throughout the project lifecycle',
        tecnologies: ['Angular', 'HTML & CSS', 'JavaScript', 'Bootstrap'],
        date: 'Feb-Jun 2021',
        image: fondoPred,
        icons: [iconAngular, iconBoots],
        logos: [logoAngular,logoHTML,logoJS,logoBots],
        mockups: [imgPre1,imgPre2],
        link: {
            linkto: "https://github.com/LuisPabloRocha/PrediccionAcademica",
            linkType: "git"
        },

    },
    {
        id: 4,
        title: 'INDOOR MX',
        type: 'web',
        description: 'I created a static web page to promote a food delivery app,' +
            ' utilizing modern web technologies. The page offers a user-friendly interface for showcasing the app' +
            'features and benefits. ' +
            'It effectively communicates the app value proposition and encourages user engagement. ' +
            'This project demonstrates my expertise in web design and development for promotional purposes.',
        tecnologies: ['HTML', 'JavaScript', 'Bootstrap'],
        date: 'Jun-Dec 2020',
        image: fondoIndoor,
        icons: [iconHTML,iconCSS,iconJS],
        logos: [logoHTML,logoJS,logoBots],
        mockups: [imgIn1,imgIn2,imgIn3],
        link: {
            linkto: "https://indoormx.com/",
            linkType: "page"
        },


    },
    {
        id: 7,
        title: 'DELIVERY SLP ',
        type: 'web',
        description: 'Together with a colleague, I undertook a project using NetBeans and Java, leveraging PostgreSQL as the backend database. The software aimed to manage various branches of a parcel delivery service, encompassing functionalities such as branch management, phone records, route planning, and report generation. Our collaborative effort resulted in a robust system designed to streamline operations and enhance efficiency within the package delivery network',
        tecnologies: ['Java','Netbeans', 'PostgreSQL'],
        date: 'Jan-Jun 2021',
        image: fondoPaq,
        icons: [iconJava,iconPostgres],
        logos: [logoJava,logoNetBeans,logoPostgres],
        mockups: [imgPaq1,imgPaq2,imgPaq3],
        link: {
            linkto: "https://github.com/CARDONALUIS/PaqueteriaSLP-Postgres",
            linkType: "git"
        },


    },
    {
        id: 6,
        title: 'DB MGMT ',
        type: 'web',
        description: 'In collaboration with a colleague, I developed a project using the .NET framework and C# programming language. Our focus was on creating a comprehensive database management system from scratch. This system involved creating tables, defining attributes, and storing data. We implemented a methodology that enabled us to efficiently execute SQL queries on this data. We emphasized the use of binary files as a storage medium to optimize system performance and security.',
        tecnologies: ['C#','.NET'],
        date: 'Jun-Dec 2020',
        image: fondoSMBD,
        icons: [iconCSharp],
        logos: [logoCSharp,logoNet,],
        mockups: [imgSBD1,imgSBD2,imgSBD3,imgSBD4],
        link: {
            linkto: "https://github.com/LuisPabloRocha/SMBD-BasesDeDatos",
            linkType: "git"
        },


    },
]

export default dataProjects;