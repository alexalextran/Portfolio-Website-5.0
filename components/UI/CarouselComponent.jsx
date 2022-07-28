import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import projects from  '../../public/data/projects.js'
import Image from 'next/image'
import styles from "../../styles/Sass/Projects.module.css"
const CarouselComponent = ({currentProject}) => {
   var array = []

    array = (projects.filter(obj => {
        return obj.name === currentProject;
      }))




    return (
        <Carousel className={styles.carousel}>
        {
            array[0].carouselPhotos.map( (item, index) => <Item key={index} photo={item} /> )
        }
    </Carousel>
    );
}

function Item({photo})
{  
   
    var bruh = Object.keys(photo)[0]


    return (
       
        <div className={styles.carouselPhoto}>
            <Image src={photo[bruh].src} layout='fill'></Image>
        </div>
   
  
    )
}

export default CarouselComponent;
