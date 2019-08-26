import * as types from './../types';

const initialState = {
    chats: [
        {
            name: "Ahmad Behzadi",
            skill: "CEO, UX Designer, Anaylizer",
            text: "Ahmad is the founder of RAADCO, and currently the CEO and project manager. He has expertise in Software analysis, Backend, Frontend, Desktop and mobile application development, Graphic Design, Sales management, and Networking.He started learning computer science fifteen years ago and currently enjoys working on multi platform softwares. You can easily and safely ask him for advice!",
            profileUrl: require("../../images/Ahmad.jpg")
        },
        {
            name: "Salman Zare",
            skill: "Sales, Frontend Developer",
            text: "Salman is a web developer with more than 10 years of experience in designing and developing number web projects in educational, commercial and governmental environments. He has strong competencies in many theoretical and practical front-end and back-end concepts and tools including JavaScript’s frameworks (JQuery, Reactjs, Redux), Webpack, NPM, Gulp, .Net Framework, SQL databases, design patterns, multithreading, scripting, and web architecture. He has been exposed to all SDLC and methodologies such as Agile, Scrum, TDD, and XP",
            profileUrl: require("../../images/Salman.jpg")
        },
        {
            name: "Sajjad Mohammadi Nejad",
            skill: "Backend Developer",
            text: "Sajjad is a web developer with more than 8 years of experience in back-end and developing number web projects in educational, commercial and governmental environments. I have strong competencies in many theoretical and practical back-end concepts and tools including PHP frameworks (Laravel , Symfony), Nodejs frameworks (express, Adonis ,Socket.io,Electron) , React Js and React Native,NPM, Gulp, Mongodb, Mysql and Redis and MemCache",
            profileUrl: require("../../images/sajjad.jpg")
        },
        {
            name: "Samaneh Ale Sa'adi",
            skill: "Frontend Developer",
            text: "A frontend developer that experts in Html, CSS, JQuery., and UI design. She loves UI designing and mostly you see her online!",
            profileUrl: require("../../images/user.jpg")
        },
        {
            name: "Zabih Atashbarg",
            skill: "Android Developer",
            text: `zabih is an android developer with more than 6 years of experience.  and developing number android projects in educational, commercial and governmental environments.
            I have strong competencies in many theoretical and practical android concepts and tools including Android framework(AndroidStudio) , IOS  framework (XCode), Java, Kotilin, Swift and ReactNative.`,

            profileUrl: require("../../images/zabih.png")
        },
 
        {
            name: "Davood Abolvardi",
            skill: "Backend Developer",
            text: `Davood is a web developer with more than 4 years of experience in back-end and developing number web projects in 
            educational, commercial and governmental environments. I have strong competencies in many theoretical 
            and practical back-end concepts and tools including C#,Sql Server, .Net Core`,
              profileUrl: require("../../images/davood.jpg")
        },
        {
            name: "Mohsen Sedaghat Fard",
            skill: "IOS Developer",
            text: `Mohsen is an ios developer with more than 2 years of experience. and developing number ios projects in educational, commercial and governmental environments.
            I have strong competencies in many theoretical and practical ios concepts and tools including ios framework (XCode), Swift and ReactNative.`,

            profileUrl: require("../../images/Mohsen.png")
        },
        {
            name: "Seyed Kazem Mousavi",
            skill: "Frontend Developer",
            text: `Kazem is a web developer with more than 3 years of experience in Html,Css,Javascript,JQuery,NodeJs,React,Php(Codeignaiter).`,

            profileUrl: require("../../images/Kazem.jpg")
        },
    ],
};
export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOAD_CHATS_SUCCESS:
            return Object.assign({}, state, {
                ...action
            })
        default:
            return state
    }
}