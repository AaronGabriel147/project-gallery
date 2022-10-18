import Image from 'next/future/image';
import imgfyc from '../public/fyc.png';
// import shopifyhome from '../public/shopifyhome.png';
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
import imageGallery from '../public/imageGallery.jpg';





// Add source key value pair:
const imageCards = [
    {
        title: 'A full stack React, Node, Express, PostGreSQL web app, which allows users to securely log in with a hashed password and a JSON Web Token. Users are then able to access authenticated routes',
        image: plants
    },
    {
        title: 'React Firebase storage database application that stores and displays images.',
        image: imageGallery
    },
    {
        title: 'A full stack React, Node, Express, PostGreSQL web application.',
        image: thestoics
    },
    {
        title: 'A React web app that filters images from reddit and displays them in a cleaner environment than reddit.',
        image: lurker2
    },
    {
        title: 'A set of React challenges which includes, form validation, API fetching, and ascynchronous JavaScript.',
        image: reactCHALLENGES
    },
    {
        title: 'Animated background and gradient text with CSS.',
        image: arete
    },
    {
        title: 'A re-usable React table connected to a Node Express API I built and deployed to Heroku.',
        image: FYCtable
    },
    {
        title: 'CRUD operations, GET and DELETE RESTful API calls with axios.',
        image: apiWITHdelete
    },
    {
        title: 'Re-created r/space by accessing the Reddit API.',
        image: rSPACE
    },
    {
        title: 'A shopify clone site to help learn Shopify.',
        image: shopifyCLONE
    },
    {
        title: 'A RESTful API call which fetches data with a toggle to show or hide data.',
        image: rickNmorty
    },
    {
        title: 'A RESTful API call which fetches data with a toggle to show or hide data.',
        image: imgfyc
    },
    {
        title: 'My first attempt at a portfolio website, in early 2021.',
        image: oldPORTFOLIO
    },
    {
        title: 'My first attempt at HTML and CSS, in January 2021.',
        image: firstHTML
    },
    {
        title: 'A Figma presentation.',
        image: figmaStoics
    },
    {
        title: 'Graphic art with Figma, a banner that I created for LinkedIn.',
        image: banner
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
                        objectFit='contain'
                        quality="100"
                    />
                    <p>{card.title}</p>
                </div>
            ))}
        </>
    )
}