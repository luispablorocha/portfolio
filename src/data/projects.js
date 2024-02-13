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
        image: '../../src/assets/images/mockups/portfolio.png',
        icons: ['../../src/assets/images/react.png', '../../src/assets/images/adobe-illustrator.png', '../../src/assets/images/motion-icon.png',],
        logos: ['../../src/assets/images/logos/react.png',
            '../../src/assets/images/logos/illustrator.png',
            '../../src/assets/images/logos/motion.svg',
            '../../src/assets/images/logos/tailwind.png',
            '../../src/assets/images/logos/sass.png'],
        mockups: ['../../src/assets/images/code/port/port-1.jpg',
            '../../src/assets/images/code/port/port-2.jpg',
            '../../src/assets/images/code/port/port-3.jpg'],
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
        image: '../../src/assets/images/mockups/tlani.png',
        icons: ['../../src/assets/images/react.png', '../../src/assets/images/adobe-illustrator.png'],
        logos: ['../../src/assets/images/logos/react.png',
            '../../src/assets/images/logos/illustrator.png',
            '../../src/assets/images/logos/figma-2.png'],
        mockups: ['../../src/assets/images/code/tlani/tlani-1.jpeg',
            '../../src/assets/images/code/tlani/tlani-2.jpeg',
            '../../src/assets/images/code/tlani/tlani-3.jpeg'],
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
        image: '../../src/assets/images/mockups/quini.png',
        icons: ['../../src/assets/images/react.png', '../../src/assets/images/figma.png','../../src/assets/images/adobe-illustrator.png'],
        logos: ['../../src/assets/images/logos/figma-2.png',
            '../../src/assets/images/logos/react.png',
            '../../src/assets/images/logos/axios.png',
        ],
        mockups: ['../../src/assets/images/code/quini/quini-2.jpeg',
            '../../src/assets/images/code/quini/quini-3.png',
            '../../src/assets/images/code/quini/quini-1.jpeg'],
        link: {
            linkto: "",
            linkType: "page"
        },

    },
    {
        id: 5,
        title: 'EVENT TICKET',
        type: 'web',
        description: 'Creation of a website dedicated to showcasing events and concerts in Mexico, leveraging data from the Tickemasters API FOR DEVELOPERS. Implementation of modern web development techniques such as hooks, states, styles, routing, fetch, and local storage for efficient management of user information and saved favorite events.',
        tecnologies: ['React', 'Axios'],
        date: 'Sep-Dec 2023',
        image: '../../src/assets/images/mockups/tickets.png',
        icons: ['../../src/assets/images/react.png', '../../src/assets/images/axios.png'],
        logos: ['../../src/assets/images/logos/react.png',
            '../../src/assets/images/logos/axios.png',
        ],
        mockups: ['../../src/assets/images/code/ticket/ticket-1.jpg',
            '../../src/assets/images/code/ticket/ticket-2.jpg',
            '../../src/assets/images/code/ticket/ticket-3.jpg',
        ],
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
        image: '../../src/assets/images/mockups/predacad.png',
        icons: ['../../src/assets/images/angular.png', '../../src/assets/images/bootstrap.png'],
        logos: ['../../src/assets/images/logos/angular.png',
            '../../src/assets/images/logos/html.png',
            '../../src/assets/images/logos/js.png',
            '../../src/assets/images/logos/bootstrap.svg'],
        mockups: ['../../src/assets/images/code/pred/pre-1.jpeg',
        '../../src/assets/images/code/pred/pre-2.jpeg'],
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
        image: '../../src/assets/images/mockups/indoor.png',
        icons: ['../../src/assets/images/html.png', '../../src/assets/images/css-3.png',
            '../../src/assets/images/js.png'],
        logos: ['../../src/assets/images/logos/html.png',
            '../../src/assets/images/logos/js.png',
            '../../src/assets/images/logos/bootstrap.svg'],
        mockups: ['../../src/assets/images/code/indoor/in-2.jpg',
            '../../src/assets/images/code/indoor/in-3.jpg',
            '../../src/assets/images/code/indoor/in-1.jpg'],
        link: {
            linkto: "https://indoormx.com/",
            linkType: "page"
        },


    },
    {
        id: 7,
        title: 'Delivery SLP ',
        type: 'web',
        description: 'Together with a colleague, I undertook a project using NetBeans and Java, leveraging PostgreSQL as the backend database. The software aimed to manage various branches of a parcel delivery service, encompassing functionalities such as branch management, phone records, route planning, and report generation. Our collaborative effort resulted in a robust system designed to streamline operations and enhance efficiency within the package delivery network',
        tecnologies: ['Java','Netbeans', 'PostgreSQL'],
        date: 'Jan-Jun 2021',
        image: '../../src/assets/images/mockups/paq.png',
        icons: ['../../src/assets/images/java-w2.png','../../src/assets/images/postgresql.png',
            ],
        logos: ['../../src/assets/images/languajes/java.png',
            '../../src/assets/images/logos/netbeans.png',
            '../../src/assets/images/logos/postgres.png'
            ],
        mockups: [,
            '../../src/assets/images/code/paq/paq1.png',
            '../../src/assets/images/code/paq/paq2.png',
            '../../src/assets/images/code/paq/paq3.png'],
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
        image: '../../src/assets/images/mockups/smbd.png',
        icons: ['../../src/assets/images/c-sharp-w.png',,
            ],
        logos: ['../../src/assets/images/languajes/c-sharp.png',
            '../../src/assets/images/logos/net.png',
            ],
        mockups: ['../../src/assets/images/code/smbd/smbd-1.jpg',
            '../../src/assets/images/code/smbd/smbd-2.jpg',
            '../../src/assets/images/code/smbd/smbd-3.jpg',
            '../../src/assets/images/code/smbd/smbd-4.jpg'],
        link: {
            linkto: "https://github.com/LuisPabloRocha/SMBD-BasesDeDatos",
            linkType: "git"
        },


    },
]

export default dataProjects;