import React, { useState } from 'react';
import {
    Box,
    Heading,
    Text,
} from '@chakra-ui/react';
import Gallery from "react-photo-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import one from '../../assets/instalaciones/1.jpeg';
import two from '../../assets/instalaciones/2.jpeg';
import three from '../../assets/instalaciones/3.jpeg';
import four from '../../assets/instalaciones/4.jpeg';
import five from '../../assets/instalaciones/5.jpeg';
import six from '../../assets/instalaciones/6.jpeg';
import seven from '../../assets/instalaciones/7.jpeg';
import eight from '../../assets/instalaciones/8.jpeg';
import nine from '../../assets/instalaciones/9.jpeg';
import ten from '../../assets/instalaciones/10.jpeg';
import eleven from '../../assets/instalaciones/11.jpeg';
import twelve from '../../assets/instalaciones/12.jpeg';
import thirteen from '../../assets/instalaciones/13.jpeg';
import fourteen from '../../assets/instalaciones/14.jpeg';
import fifteen from '../../assets/instalaciones/15.jpeg';
import sixteen from '../../assets/instalaciones/16.jpeg';
import seventeen from '../../assets/instalaciones/17.jpeg';
import eighteen from '../../assets/instalaciones/18.jpeg';
import nineteen from '../../assets/instalaciones/19.jpeg';
import twenty from '../../assets/instalaciones/20.jpeg';
import twentyone from '../../assets/instalaciones/21.jpeg';
import twentytwo from '../../assets/instalaciones/22.jpeg';
import twentythree from '../../assets/instalaciones/23.jpeg';
import twentyfour from '../../assets/instalaciones/24.jpeg';
import twentyfive from '../../assets/instalaciones/25.jpeg';
import twentysix from '../../assets/instalaciones/26.jpeg';
import twentyseven from '../../assets/instalaciones/27.jpeg';
import twentyeight from '../../assets/instalaciones/28.jpeg';
import twentynine from '../../assets/instalaciones/29.jpeg';
import thirdteen from '../../assets/instalaciones/30.jpg';

const Facilities = () => {
    const morado = "#3b0c2c"
    const photos = [
        {
            src: one,
            width: 4,
            height: 3
        },
        {
            src: two,
            width: 4,
            height: 3
        },
        {
            src: three,
            width: 4,
            height: 3
        },
        {
            src: four,
            width: 4,
            height: 3
        },
        {
            src: five,
            width: 5,
            height: 2
        },
        {
            src: six,
            width: 5,
            height: 3
        },
        {
            src: seven,
            width: 4,
            height: 3
        },
        {
            src: eight,
            width: 4,
            height: 3
        },
        {
            src: nine,
            width: 4,
            height: 3
        },
        {
            src: ten,
            width: 4,
            height: 3
        },
        {
            src: eleven,
            width: 4,
            height: 3
        },
        {
            src: twelve,
            width: 4,
            height: 3
        },
        {
            src: thirteen,
            width: 5,
            height: 4
        },
        {
            src: fourteen,
            width: 4,
            height: 3
        },
        {
            src: fifteen,
            width: 4,
            height: 3
        },
        {
            src: sixteen,
            width: 4,
            height: 3
        },
        {
            src: seventeen,
            width: 4,
            height: 3
        },
        {
            src: eighteen,
            width: 4,
            height: 3
        },
        {
            src: nineteen,
            width: 4,
            height: 3
        },
        {
            src: twenty,
            width: 4,
            height: 3
        },
        {
            src: twentyone,
            width: 4,
            height: 3
        },
        {
            src: twentytwo,
            width: 4,
            height: 3
        },
        {
            src: twentythree,
            width: 4,
            height: 3
        },
        {
            src: twentyfour,
            width: 4,
            height: 3
        },
        {
            src: twentyfive,
            width: 4,
            height: 3
        },
        {
            src: twentysix,
            width: 4,
            height: 3
        },
        {
            src: twentyseven,
            width: 4,
            height: 3
        },
        {
            src: twentyeight,
            width: 4,
            height: 3
        },
        {
            src: twentynine,
            width: 4,
            height: 3
        },
        {
            src: thirdteen,
            width: 4,
            height: 3
        },
    ];
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = (event, { photo, index }) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const moveNext = () => {
        setCurrentImage((currentImage + 1) % photos.length);
    };

    const movePrev = () => {
        setCurrentImage((currentImage + photos.length - 1) % photos.length);
    };
    const slides = photos.map(photo => ({
        src: photo.src,
        width: photo.width * 300, // Multiplicamos por un factor para obtener dimensiones en píxeles
        height: photo.height * 300
    }));
    return (
        <Box
            w={"100%"}
            h={"auto"}
            p={5}
            background="linear-gradient(135deg, #63d3ff, #be80ff)"
        >
            <Heading size={"lg"} color={morado}>
                Mis Instalaciones
            </Heading>
            <Text color={morado}>
                Aquí puedes ver una galería de fotos de mis instalaciones.
            </Text>
            <br />
            <Gallery photos={photos} onClick={openLightbox} />
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={slides}
                // Opciones adicionales de personalización
                carousel={{
                    finite: true // Hace que la galería no sea infinita
                }}
                animation={{ fade: 300 }} // Añade una transición suave
                controller={{ closeOnBackdropClick: true }}
            />
        </Box>
    );
}

export default Facilities;