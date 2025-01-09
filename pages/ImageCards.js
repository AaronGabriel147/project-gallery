import Image from 'next/future/image';
import reactCHALLENGES from '../public/reactCHALLENGES.jpg';
import banner from '../public/banner.jpg';
import lurker2 from '../public/lurker2.jpg';
import thestoics from '../public/thestoics.jpg';
import plants from '../public/plants.jpg';
import todoFULL from '../public/todoFULL.jpg';
import redditArt from '../public/redditArt.png';
import lectric from '../public/lectric.png';
import imgGal from '../public/imgGal.jpg';
import petmakerDesktopSS from '../public/petmakerDesktopSS.png';
import slice from '../public/slice.png';
import gnp from '../public/gnp.png';


// Add source key value pair:
const imageCards = [
    {
        title: "I worked with Lectric for about a year, developing custom Shopify sections to enhance their store's functionality and user experience.",
        image: lectric,
        url: 'https://lectricebikes.com/',
        code: ''
    },
    {
        title: 'A full stack React Firebase storage application that stores and displays images in a document database.',
        image: imgGal,
        url: 'https://firebase-storage-three.vercel.app/',
        code: 'https://github.com/AaronGabriel147/firebase-storage'
    },
    {
        title: 'I collaborated with a team at PetMaker in 2023 to build their first website, developing custom Shopify sections to align with the Figma design presentation.',
        image: petmakerDesktopSS,
        url: 'https://www.petmakerbrand.com/',
        code: ''
    },
    {
        title: 'A full stack React, Node, Express, PostGreSQL web app, which allows users to securely log in with a hashed password and a JSON Web Token. Users are then able to access authenticated routes',
        image: plants,
        url: '',
        code: 'https://github.com/water-my-plantz',
    },
    {
        title: 'I developed custom Shopify sections and JavaScript logic for Slice in 2022, enhancing shopping cart functionality and driving increased sales through promo banners and checkout upsells.',
        image: slice,
        url: 'https://www.sliceproducts.com/',
        code: ''
    },
    {
        title: 'A full stack React, Node, Express, PostGreSQL web application. This is an ancient philosophy app which allows users to create, read, update, and delete (CRUD) quotes.',
        image: thestoics,
        url: '',
        code: 'https://github.com/The-Stoics'
    },
    {
        title: "I worked as one of two developers on Great Northern Popcorn's first website in 2022, contributing to the full development process from start to launch.",
        image: gnp,
        url: 'https://www.greatnorthernpopcorn.com/',
        code: ''
    },
    {
        title: 'A React web app that filters images from reddit and displays them in a cleaner environment than reddit.',
        image: lurker2,
        url: 'https://lurker-five.vercel.app/',
        code: 'https://github.com/AaronGabriel147/lurker'
    },
    {
        title: "A full stack React Firebase web app with a document database and CRUD operations. This web app is for saving any text, notes, todo's, etc. ",
        image: todoFULL,
        url: 'https://firebase-react-playground.vercel.app/',
        code: 'https://github.com/AaronGabriel147/firebase-react-playground'
    },
    {
        title: 'RESTful API calls with vanilla JaveScript, HTML, and CSS.',
        image: redditArt,
        url: 'https://js-la2jw3.stackblitz.io/',
        code: 'https://stackblitz.com/edit/js-la2jw3?file=index.html'
    },
    {
        title: 'A set of React challenges that I created, which includes, form validation, API fetching, and ascynchronous JavaScript.',
        image: reactCHALLENGES,
        url: 'https://codepen.io/AaronGabriel/full/ZExdjNJ',
        code: 'https://codepen.io/AaronGabriel/pen/ZExdjNJ'
    },
];

// {
//     title: 'Graphic art with Figma, a banner that I created for LinkedIn.',
//     image: banner,
//     url: 'https://www.figma.com/file/LFB2DAGxtT3v2KJSvqXsDx/Untitled',
//     code: ''
// },

// {
//     title: 'Animated background and gradient text with CSS.',
//     image: arete,
//     url: 'https://codepen.io/AaronGabriel/full/yLKwjEd',
//     code: 'https://codepen.io/AaronGabriel/pen/yLKwjEd'
// },

// {
//     title: "My original portfolio site with GIF's showing off some of my full stack projects.",
//     image: portfolio,
//     url: 'https://aaron-gabriels-portfolio.vercel.app/',
//     code: 'https://github.com/AaronGabriel147/newPortfolio'
// },


// {
//     title: 'CRUD operations, GET and DELETE RESTful API calls with axios.',
//     image: apiWITHdelete,
//     url: 'https://react-ts-fxsvjb.stackblitz.io/',
//     code: 'https://stackblitz.com/edit/react-ts-fxsvjb?file=App.tsx'
// },
// {
//     title: 'A Figma presentation.',
//     image: figmaStoics,
//     url: 'https://www.figma.com/file/1ilZj7gIRRZy6RAZNFXHTp/Stoics?node-id=0%3A1',
//     code: ''
// },
//      {
//     title: 'Re-created r/space by accessing the Reddit API.',
//     image: rSPACE,
//     url: 'https://react-ts-avhpwa.stackblitz.io/',
//     code: 'https://stackblitz.com/edit/react-ts-avhpwa?file=App.tsx'
// },
// {
//     title: 'A RESTful API call which fetches data with a toggle to show or hide data.',
//     image: rickNmorty,
//     url: 'https://react-5zsf81.stackblitz.io/',
//     code: 'https://stackblitz.com/edit/react-5zsf81?file=src%2FApp.js'
// },

// {
//     title: 'A re-usable React table connected to a Node Express API I built and deployed to Heroku.',
//     image: FYCtable,
//     url: 'https://calm-marigold-e6cec9.netlify.app/',
//     code: 'https://github.com/AaronGabriel147/firebase-storage/tree/template/src'
// },


// {
//     title: 'A RESTful API call which fetches data with a toggle to show or hide data.',
//     image: imgfyc,
//     url: 'https://react-ts-klpzms.stackblitz.io/',
//     code: 'https://stackblitz.com/edit/react-ts-klpzms?file=App.tsx'
// },




export default function ImageCards() {
    return (
        <>
            {imageCards.map((card, index) => (
                <div className="card" key={index}>

                    <Image
                        src={card.image}
                        alt='project'
                        placeholder='blur'
                        layout="responsive"
                        // objectFit='contain'
                        quality="100"
                    />
                    <p className="card-description-text">{card.title}</p>
                    <div className="link-cont">
                        {card.url && <a className="link card-btn" href={card.url} target="blank">url</a>}
                        {card.code && <a className="link card-btn" href={card.code} target="blank">code</a>}
                    </div>

                </div>
            ))}
        </>
    )
}