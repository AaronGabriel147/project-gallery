import Image from 'next/future/image';
import imgfyc from '../public/fyc.png';
import shopifyhome from '../public/shopifyhome.png';
import figmaStoics from '../public/figmaStoics.jpg';
import reactCHALLENGES from '../public/reactCHALLENGES.jpg';
import arete from '../public/arete.jpg';
import FYCtable from '../public/FYCtable.jpg';
import apiWITHdelete from '../public/apiWITHdelete.jpg';
import rSPACE from '../public/rSPACE.jpg';
import rickNmorty from '../public/rickNmorty.jpg';
import oldPORTFOLIO from '../public/oldPORTFOLIO.jpg';
import firstHTML from '../public/firstHTML.jpg';
import shopifyCLONE from '../public/shopifyCLONE.jpg';
import banner from '../public/banner.jpg';
import lurker2 from '../public/lurker2.jpg';
import thestoics from '../public/thestoics.jpg';
import plants from '../public/plants.jpg';
import todoFULL from '../public/todoFULL.jpg';






// Add source key value pair:
const imageCards = [
    {
        title: 'A full stack React, Node, Express, PostGreSQL web app, which allows users to securely log in with a hashed password and a JSON Web Token. Users are then able to access authenticated routes',
        image: plants,
        url: 'https://water-my-plants-frontend-psi.vercel.app/plants',
        code: 'https://github.com/water-my-plantz',
    },
    {
        title: 'A React web application built with the Hydrogen framework for Shopify.',
        image: shopifyhome,
        url: 'https://mechanical-keyboards-5414.myshopify.com/',
        code: 'https://mechanical-keyboards-5414.myshopify.com/'
    },
    {
        title: "This is a React Firebase full stack web app with a document database and CRUD operations. This web app is for saving any text, notes, todo's, etc. ",
        image: todoFULL,
        url: 'https://firebase-react-playground.vercel.app/',
        code: 'https://github.com/AaronGabriel147/firebase-react-playground'
    },
    {
        title: 'A full stack React, Node, Express, PostGreSQL web application.',
        image: thestoics,
        url: 'https://thestoics.netlify.app/',
        code: 'https://github.com/The-Stoics'
    },
    {
        title: 'A React web app that filters images from reddit and displays them in a cleaner environment than reddit.',
        image: lurker2,
        url: 'https://lurker-five.vercel.app/',
        code: 'https://github.com/AaronGabriel147/lurker'
    },
    {
        title: 'A set of React challenges which includes, form validation, API fetching, and ascynchronous JavaScript.',
        image: reactCHALLENGES,
        url: 'https://codepen.io/AaronGabriel/full/ZExdjNJ',
        code: 'https://codepen.io/AaronGabriel/pen/ZExdjNJ'
    },
    {
        title: 'Animated background and gradient text with CSS.',
        image: arete,
        url: 'https://codepen.io/AaronGabriel/full/yLKwjEd',
        code: 'https://codepen.io/AaronGabriel/pen/yLKwjEd'
    },
    {
        title: 'A re-usable React table connected to a Node Express API I built and deployed to Heroku.',
        image: FYCtable,
        url: 'https://calm-marigold-e6cec9.netlify.app/',
        code: 'https://github.com/AaronGabriel147/firebase-storage/tree/template/src'
    },
    {
        title: 'CRUD operations, GET and DELETE RESTful API calls with axios.',
        image: apiWITHdelete,
        url: 'https://react-ts-fxsvjb.stackblitz.io/',
        code: 'https://stackblitz.com/edit/react-ts-fxsvjb?file=App.tsx'
    },
    {
        title: 'Re-created r/space by accessing the Reddit API.',
        image: rSPACE,
        url: 'https://react-ts-avhpwa.stackblitz.io/',
        code: 'https://stackblitz.com/edit/react-ts-avhpwa?file=App.tsx'
    },
    {
        title: 'A shopify clone site to help learn Shopify.',
        image: shopifyCLONE,
        url: '',
        code: ''
    },
    {
        title: 'A RESTful API call which fetches data with a toggle to show or hide data.',
        image: rickNmorty,
        url: 'https://react-5zsf81.stackblitz.io/',
        code: 'https://stackblitz.com/edit/react-5zsf81?file=src%2FApp.js'
    },
    {
        title: 'A RESTful API call which fetches data with a toggle to show or hide data.',
        image: imgfyc,
        url: 'https://react-ts-klpzms.stackblitz.io/',
        code: 'https://stackblitz.com/edit/react-ts-klpzms?file=App.tsx'
    },
    {
        title: 'My first attempt at a portfolio website, in early 2021.',
        image: oldPORTFOLIO,
        url: 'https://codepen.io/AaronGabriel/full/zYoVEjd',
        code: 'https://codepen.io/AaronGabriel/pen/zYoVEjd?editors=1100'
    },
    {
        title: 'My first attempt at HTML and CSS, in January 2021.',
        image: firstHTML,
        url: 'https://codepen.io/AaronGabriel/pen/OJRWwwX',
        code: 'https://codepen.io/AaronGabriel/pen/OJRWwwX'
    },
    {
        title: 'A Figma presentation.',
        image: figmaStoics,
        url: 'https://www.figma.com/file/1ilZj7gIRRZy6RAZNFXHTp/Stoics?node-id=0%3A1',
        code: 'https://www.figma.com/file/1ilZj7gIRRZy6RAZNFXHTp/Stoics?node-id=0%3A1'
    },
    {
        title: 'Graphic art with Figma, a banner that I created for LinkedIn.',
        image: banner,
        url: 'https://www.figma.com/file/LFB2DAGxtT3v2KJSvqXsDx/Untitled',
        code: 'https://www.figma.com/file/LFB2DAGxtT3v2KJSvqXsDx/Untitled'
    },
];




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
                    <p>{card.title}</p>
                    <div className="link-cont">
                        <a id="link" href={card.url} target="blank">url</a>
                        <a id="link" href={card.code} target="blank">code</a>
                    </div>
                </div>
            ))}
        </>
    )
}