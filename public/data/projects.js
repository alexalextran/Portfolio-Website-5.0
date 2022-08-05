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
//import Ecommerce from '../projects/Ecommerce.png'
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
        desc: 'A template website built using firebase and react, comissioned for a friend intended to articulate his artistic talents. The site features a dynamic image carousel that fetches all the images from a secure firebase cloud database and also includes a secure dashboard system that allows the user to securely manage all the works through full CRUD functionaility',
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
        desc: 'The second iteration of memory game two built from the ground up using react and firebase, features a secure google authetication system that is managed by firebase that allows users to login and submit their highscores to a real time leaderboard that ranks players based on score and time respectively, the game also includes a dynamic gridsize that lets players choose their grid size.',
        stack: ['Sass','JavaScript','React', 'Firebase'],
        linkGit: 'https://github.com/alexalextran/memory-game-v2',
        linkSite: 'https://alexalextran.github.io/memory-game-v2/',
        projectdata: {
            purpose: 'Memory Game V2 was actually a passion project that was based off the first rendition, Memory Game was built as an interactive game for all my friends to enjoy and also since building regular websites was getting pretty tiresome, hence designing MG2 was vastly different from most of my projects since it was an all original design. It features a competitive leaderboard that compares against time and level and also a customizable grid/playing field that is dynamic',
            purposeimg: {MemoryGame},
            stack: 'The first Memory game was built using javascript which worked but has alot of issues including perfomance, since the game was constantly making changes to the DOM it made the game lag several times while playing, hence react was chosen since it allows for quick and non intensive changes to the UI using the virtual DOM. As well as this a promised leaderboard was planned to be a big feature of the game, hence a lightweight database was needed as well as user authentication, thus firebase was chosen for its easy authentication system and non relational DB that was fast and effecient',
            stackimg: {MemoryGame2},
            issues:'One of the biggest issues with this project was working with state and rendering, especially when there a multiple istances of state that you have to account for, since at the time i had not learnt redux yet, dealing with multiple instances of state did get overwhelming at times so to get around this i created a complete diagram of all my child components and state using my whiteboard and so planning it that way allowed me to see which states affected which components. but ultimitely the project deepened my understanding of react by a good amount, teaching me about how to manipulate the life cycle if components to change state. Overall it was a challenging but rewarding project and any future renditions will most likely have redux incooporated',
            issuesimg: {MemoryGameIssues}
        },
        carouselPhotos: [
             {MemoryGame}, {MemoryGame2}, {MemoryGame3}
        ]
    },
    {
        name: 'Memories',
        img: {Memories},
        desc: 'A full stack web application intended to mock a social media site, allows users to share pictures and provide captions and tags live. It features a reponsive ui designed using react and a backend server developed using nodejs and express to host and connect to a cloud database managed by mongoDB',
        stack: ['TailWind','JavaScript','React', 'MongoDB', 'NodeJs', 'ExpressJs'],
        linkGit: 'https://github.com/alexalextran/Memories_MERN',
        linkSite: 'https://alexalextran.github.io/Memories_MERN/',
        projectdata: {
            purpose: 'Memories was my first ever MERN project that i developed under the guidance of a mentor, it was developed as a mock social media application that allows users to share images, it was one of the most important projects as it gave me a first hand experience on developing full stack applications from scratch',
            purposeimg: {Memories},
            stack: 'The application was built using nodeJs and expressjs to create a live server which could fetch data from a database i.e mongoDB, mongoDB was chosen since it was a non relational DB that was very easy to use, and react was chosen to allow for fast UI changes',
            stackimg: {MaxCozis},
            issues:'One of the biggest issues from this project was just manageing all the files and folders epspecially for a fullstack application , so inorder to solve this, i seperated all the frontend and backend files into their own folders and then for the backend side of things i followed the MVC blueprint placing all my backend functions into the a controller folder and my schema into a model folder.',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
             {Memories}
        ]
    },
    {
        name: 'A- Academy',
        img: {Academy},
        desc: 'An offical website commisioned to display and advertise the customers online education courses. The site was developed using react and features a video carousel and live data fetching using youtube api to display a subscriber, view count and also fetch videos and allow them to be viewed in a built in video player',
        stack: ['CSS', 'JavaScript', 'React'],
        linkGit: 'https://github.com/alexalextran/react-adash',
        linkSite: 'http://aadarshanujacademy.com/',
        projectdata: {
            purpose: 'A- Academy was a developed as a commission for a friend to advertise his online teaching platform, it was intended to allow users to check out his videos with a built in video player and also a built in email system that allows end users to securely send him emails.',
            purposeimg: {Academy},
            stack: 'There was originally a older release of A- Academy however the old site was static and was poorly designed so react was chosen as an upgrade to provide a dynamic and interactive UI to help provide a better User Experience',
            stackimg: {MaxCozis},
            issues:'One of the biggest issues with the project was coodinating with the client, since the client did not have a specific design so i asked the client what sort of style he wanted and so he wanted somethign that would articulate his reach and reputation, thus i developed the site with this goal in mind, i developed features such as a subscriber/view counter and also testimonials.',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
             {Academy}, {Academy2}, {Academy3}, {Academy4}, {Academy5}, {Academy6}
        ]
    },
    {
        name: 'Notflix',
        img: {Notflix2},
        desc: 'A react based emulation of Netflix aimed at displaying the home page of Netflix, it allows users basic firebase authentication and also displays trending movies and shows based off a movie api, it also allows for dynamic cards that grant the user further information if needed',
        stack: ['Sass', 'JavaScript', 'React', 'Firebase'],
        linkGit: 'https://github.com/alexalextran/notflix',
        linkSite: 'https://alexalextran.github.io/notflix/',
        projectdata: {
            purpose: 'Notflix was intended as a personal challenge to attempt and emulate advanced UI, thus netflix was chosen, the project consists of a simple login and registration system and aims to emulate the process of navigating the home page of the netflix website',
            purposeimg: {Notflix2},
            stack: 'Since Notflix was chosen to include simple login systems, firebase was chosen as it was very easy to implement a simple login system, as well as this react was chosen to allow for scalability and reusability since netflix has alot of dynamic components that are very similar i.e the home page cards',
            stackimg: {Notflix},
            issues:'One of the biggest issues was dealing with api keys, since the api i used required a key, this meant that hardcoding the key into my code would make the key extremely vunerable so inorder to combat this, i searched around online and discovered that react supported env varibles so after reading up on react documentation i was able to create a process.evn file and secured the api key that way.',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
             {Notflix}, {Notflix2}, {Notflix3}
        ]
    },
    {
        name: 'E-Commerce Store',
        img: {MaxCozis},
        desc: 'A react mock e-commerce store that allows displays books fetched from a mock api and allows users to add books to a cart and dynamically updates the total and books displayed',
        stack: ['CSS', 'React'],
        linkGit: 'https://github.com/alexalextran/react-ecommerce-practice',
        linkSite: 'https://alexalextran.github.io/react-ecommerce-practice/',
        projectdata: {
            purpose: 'E-commerce store was a web applcation that was developed inorder to get experience developing different types of use cases and in this case it was an online store, it fetches mock api data from a js file to generate fake products to which the user can add to cart',
            purposeimg: {MaxCozis},
            stack: 'React was chosen due its reusability for components and the ability to dynamically map data to components, allowing for a scalable store and a responsive UI',
            stackimg: {MaxCozis},
            issues:'One of the biggest in this project was just learning how to use react, since this project was my first ever react project, eveything still felt very alien to me so i was prone to mistakes, thankfully i was under the guidance of a mentor when completing this, so alot of my mistakes were explained and alot of key concepts that i did not understand, so in the end i understood alot of my mistakes and how to avoid them and in the end learnt that help is always a good idea especially for first time projects',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
            {Ecommerce}, {Ecommerce2}, {Ecommerce3}, {Ecommerce4}
        ]
    },
    {
        name: 'Java JSP Mock Store',
        img: {JSP},
        desc: 'A full stack application developed within a team, aimed at emulating an server side e-commerce system that allows users to login, manage their accounts and place orders, it also features a staff management system that alows for full CRUD features. All the data is fully hosted on a local sql database',
        stack: ['HTML', 'CSS', 'Java', 'SQL'],
        linkGit: 'https://github.com/alexalextran/Iotbay',
        linkSite: 'https://github.com/alexalextran/Iotbay',
        projectdata: {
            purpose: 'This project was a assignment desiginated for my software development subject for the sole purpose of designing a mock ecommerce application within a group',
            purposeimg: {JSP},
            stack: 'Java was chosen due to its OOP principles which allow for ease of use when converting business logic to code, and SQL was chosen since it was integrated to the Netbeans ide that was suggested at the time and also allowed us to contain data on a local server, while html and css were used to build the frontend',
            stackimg: {MaxCozis},
            issues:'The hardest aspect of this project was incooprating everything, from using slack, github, netbeans to jsp was all very foreign and while using one individually was not difficult incooporating it all required lots of teamwork and communication to ensure everyone was on the same page, in the end it the project did teach us alot on how to coodinate on desigining applications.',
            issuesimg: {MaxCozis}
        },
        carouselPhotos: [
             {JSP}, {JSP2}, {JSP3}
        ]
    },
   
]
export default projects;