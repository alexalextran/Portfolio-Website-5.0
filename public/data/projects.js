import MaxCozis from '../projects/MaxCozis.png'
import MaxCozis2 from '../projects/MaxCozis2.png'
import MaxCozis3 from '../projects/MaxCozis3.png'
import MaxCozisIssue from '../projects/MaxCozisIssue.png'
import MemoryGame from '../projects/MemoryGame.png'
import MemoryGame2 from '../projects/MemoryGame2.png'
import MemoryGame3 from '../projects/MemoryGame3.png'
import MemoryGameIssues from '../projects/MemoryGameIssues.png'
import Memories from '../projects/Memories.png'
import Academy from '../projects/Academy.png'
import Academy2 from '../projects/Academy2.png'
import Academy3 from '../projects/Academy3.png'
import Academy4 from '../projects/Academy4.png'
import Academy5 from '../projects/Academy5.png'
import Academy6 from '../projects/Academy6.png'
import Notflix from '../projects/Notflix.png'
import Notflix2 from '../projects/Notflix2.png'
import Notflix3 from '../projects/Notflix3.png'
import Ecommerce from '../projects/Ecommerce.png'
import Ecommerce2 from '../projects/Ecommerce2.png'
import Ecommerce3 from '../projects/Ecommerce3.png'
import Ecommerce4 from '../projects/Ecommerce4.png'
import JSP from '../projects/JSP.png'
import JSP2 from '../projects/JSP2.png'
import JSP3 from '../projects/JSP3.png'

const projects = [
    {
        name: 'Max-Cozis',
        img: {MaxCozis},
        desc: 'A website built using firebase and react I comissioned for a friend intended to articulate his artistic talents, the website was intended to allow the client to securely self manage his artistic works by utilising CRUD functionality for all the works showcased on the site',
        stack: ['Sass','JavaScript','React', 'Firebase'],
        linkGit: 'https://github.com/alexalextran/max-cozis',
        linkSite: 'https://alexalextran.github.io/max-cozis/',
        projectdata: {
            purpose: 'Max-Cozis is a project i developed for the sole purpose of developing a secure application that would allow the user to both showcase his skills and be able to self manage all his works in a simple and intuitive system',
            purposeimg: {MaxCozis2},
            stack: 'Since the website is intended to provide a good user experience, react was chosen to build fast and clean UIs as well as this, the application also needed to allow for self sufficient changes while being easy to use for people from a non technical background, which is why firebase was chosen, to allow for real time feedback when updating the works, combined with react this allowed for a simplified system that allowed the user to self manage his own works. As well as this libaries responsible for photo carousels were used to showcase the users artistic works.',
            stackimg: {MaxCozis3},
            issues:'One of the biggest issues, is that while there was a login feature, any end user could acess the dashboard through changing the url, which meant it was not fully secure, this is where private routes were implemented, in which if a current user does nto exist, i.e end user has not logged in, then they will be redirected to the login page, this meant that the dashboard that allows the editing of the works was fully secure and could only be acess through a login system that was manage by firebase. As well as this, creating a carousel that accounted for different image sizes and aspect ratios was quite difficult to do in vanilla js/react, hence carousel libaries were implemented to allow for different image sizes',
            issuesimg: {MaxCozisIssue}
        },
        carouselPhotos: [
             {MaxCozis}, {MaxCozis2}, {MaxCozis3}
        ]
        
    },
    {
        name: 'Memory Game V2',
        img: {MemoryGame},
        desc: 'The second iteration of my original memory game which draws heavy inspiration from the human benchmark, it was built from the ground up using react, it was intended as a project to develop and strengthen my core skills on reacts fundamental concepts based around state, useEffect hooks and child component rendering. Its main feature is a live leaderboard that allows users to compare their highscores',
        stack: ['Sass','JavaScript','React', 'Firebase'],
        linkGit: 'https://github.com/alexalextran/memory-game-v2',
        linkSite: 'https://alexalextran.github.io/memory-game-v2/',
        projectdata: {
            purpose: 'Memory Game V2 was actually a passion project that was based off the first rendition, Memory Game was built as an interactive game for all my friends to enjoy and also since building regular websites was getting pretty tiresome, hence designing MG2 was vastly different from most of my projects since it was an all original design. It features a competitive leaderboard that compares against time and level and also a customizable grid/playing field that is dynamic',
            purposeimg: {MemoryGame},
            stack: 'The first Memory game was built using javascript which worked but has alot of issues including perfomance, since the game was constantly making changes to the DOM it made the game lag several times while playing, hence react was chosen since it allows for quick and non intensive changes to the UI using the virtual DOM. As well as this a promised leaderboard was planned to be a big feature of the game, hence a lightweight database was needed as well as user authentication, thus firebase was chosen for its easy authentication system and non relational DB that was fast and effecient',
            stackimg: {MemoryGame2},
            issues:'One of the biggest issues with this project was working with state and rendering, especially when there a multiple istances of state that you have to account for, since at the time i had not learnt redux yet, dealing with multiple instances of state was hard but ultimitely it deepened my understanding of react by a good amount, teaching me about how to manipulate the life cycle if components to change state. Overall it was a challenging but rewarding project and any future renditions will most likely have redux incooporated',
            issuesimg: {MemoryGameIssues}
        },
        carouselPhotos: [
             {MemoryGame}, {MemoryGame2}, {MemoryGame3}
        ]
    },
    {
        name: 'Memories',
        img: {Memories},
        desc: 'My first ever MERN Stack project, which introduced me to key concepts such as nodejs, mongoDB and redux to manage and manipulate a database using both backend and frontend concepts',
        stack: ['TailWind','JavaScript','React', 'MongoDB', 'NodeJs', 'ExpressJs'],
        linkGit: 'https://github.com/alexalextran/Memories_MERN',
        linkSite: 'https://alexalextran.github.io/Memories_MERN/',
        projectdata: {
            purpose: 'Memories was my first ever MERN project that i developed under the guidance of a mentor, it was developed as a mock social media application that allows users to share images, it was one of the most important projects as it gave me a first hand experience on developing full stack applications from scratch',
            purposeimg: {Memories},
            stack: 'The application was built using nodeJs and expressjs to create a live server which could fetch data from a database i.e mongoDB, mongoDB was chosen since it was a non relational DB that was very easy to use, and react was chosen to allow for fast UI changes',
            stackimg: {MaxCozis},
            issues:'One of the biggest issues from this project was just taking all the new technologies that go into full stack applications like this, and also deployement as unlike other projects, both the back end and the front end had to be deployed independently using herkou and githup pages respectively. This meant that everything from backend to front end to deployment had to be accounted for which made the project much more challenging but in the end it taught me alot of key concepts',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
             {Memories}
        ]
    },
    {
        name: 'A- Academy',
        img: {Academy},
        desc: 'My first independent react project and coincidently my first real exposure with working with a client, this website was designed with user experience as a heavy focus, so concepts such as responsivity and accessibility were heavily focused on, the site also involved live data fetched from youtube api to deliver up to date videos and statistics',
        stack: ['CSS', 'JavaScript', 'React'],
        linkGit: 'https://github.com/alexalextran/react-adash',
        linkSite: 'http://aadarshanujacademy.com/',
        projectdata: {
            purpose: 'A- Academy was a developed as a commission for a friend to advertise his online teaching platform, it was intended to allow users to check out his videos with a built in video player and also a built in email system that allows end users to securely send him emails.',
            purposeimg: {Academy},
            stack: 'There was originally a older release of A- Academy however the old site was static and was poorly designed so react was chosen as an upgrade to provide a dynamic and interactive UI to help provide a better User Experience',
            stackimg: {MaxCozis},
            issues:'One of the biggest issues with the project was learning how to replace variables with state, or adjusting from pure js to react code since this was my first real react project, which means the codebase still has alot of unesscary boilerplate',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
             {Academy}, {Academy2}, {Academy3}, {Academy4}, {Academy5}, {Academy6}
        ]
    },
    {
        name: 'Notflix',
        img: {Notflix2},
        desc: 'My first real experience at emulating another site, this project was designed with design as a priority over function, so the application still involved simple login, registration and movie api fetching features native to Netflix but overall the design process was very enjoyable, studying techniques that netflix employs to provide a well designed UI',
        stack: ['Sass', 'JavaScript', 'React', 'Firebase'],
        linkGit: 'https://github.com/alexalextran/notflix',
        linkSite: 'https://alexalextran.github.io/notflix/',
        projectdata: {
            purpose: 'Notflix was intended as a personal challenge to attempt and emulate advanced UI, thus netflix was chosen, the project consists of a simple login and registration system and aims to emulate the process of navigating the home page of the netflix website',
            purposeimg: {Notflix2},
            stack: 'Since Notflix was chosen to include simple login systems, firebase was chosen as it was very easy to implement a simple login system, as well as this react was chosen to allow for scalability and reusability since netflix has alot of dynamic components that are very similar i.e the home page cards',
            stackimg: {Notflix},
            issues:'One of the biggest issues was dealing with the api, since when fetching different shows/movies of different genres tv show objects and movie objects were different to each other, hence trying to find a work aorund and dealing with objects was quite difficult, this resulted in missing images sometimes when loading the page. Thankfully after the project was completed i looked more into objects and destructuring',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
             {Notflix}, {Notflix2}, {Notflix3}
        ]
    },
    {
        name: 'E-Commerce Store',
        img: {Ecommerce},
        desc: 'A react application that was developed with the assitance of a mentor, it was developed as a way to demonstrate key react concepts such as dynamic components, passing props to child components and manipulating objects',
        stack: ['CSS', 'React'],
        linkGit: 'https://github.com/alexalextran/react-ecommerce-practice',
        linkSite: 'https://alexalextran.github.io/react-ecommerce-practice/',
        projectdata: {
            purpose: 'texadwadad awdha dwadd awdhgawdauyd agdad',
            purposeimg: {MaxCozis},
            stack: ' diawdha diaud adahdu adhad jasdh wkujahd uiw',
            stackimg: {MaxCozis},
            issues:'wa duawhdwad awdahwduadjksdhwj dajwdha dhwuhda iudhw',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
            {Ecommerce}, {Ecommerce2}, {Ecommerce3}, {Ecommerce4}
        ]
    },
    {
        name: 'Java JSP Mock Store',
        img: {JSP},
        desc: 'A full stack application developed within a team for a software development subject that involved using software development practices to plan and develop a full stack web application that allowed users and staff members to manage an online store. The application was built using html, css, java and sql to provide a fully working application that met CRUD requirements',
        stack: ['HTML', 'CSS', 'Java', 'SQL'],
        linkGit: 'https://github.com/alexalextran/Iotbay',
        linkSite: 'https://github.com/alexalextran/Iotbay',
        projectdata: {
            purpose: 'texadwadad awdha dwadd awdhgawdauyd agdad',
            purposeimg: {MaxCozis},
            stack: ' diawdha diaud adahdu adhad jasdh wkujahd uiw',
            stackimg: {MaxCozis},
            issues:'wa duawhdwad awdahwduadjksdhwj dajwdha dhwuhda iudhw',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
             {JSP}, {JSP2}, {JSP3}
        ]
    },
   
]
export default projects;