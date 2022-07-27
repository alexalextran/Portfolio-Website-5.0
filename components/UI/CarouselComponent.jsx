import React from 'react';
import Carousel from 'react-material-ui-carousel'
import projects from  '../../public/data/projects.js'
import Image from 'next/image'
const CarouselComponent = () => {
    return (
        <Carousel>
        {
            projects.map( (item, index) => <Item key={index} item={item} /> )
        }
    </Carousel>
    );
}

function Item({item})
{
    return (
        <div>
            <div>
                <Image src={item.img.MaxCozis.src} layout='fixed' width={100} height={100}></Image>
            </div>
            <p>{item.name}</p>
        </div>
    )
}

export default CarouselComponent;
