import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'yet-another-react-lightbox';
import { Box, Heading, Center, useColorModeValue } from '@chakra-ui/react';

import uno from '../../assets/Actividades/salidas pedagogicas/1.jpeg'
import dos from '../../assets/Actividades/salidas pedagogicas/2.jpeg'
import tres from '../../assets/Actividades/salidas pedagogicas/3.jpeg'
import cuatro from '../../assets/Actividades/salidas pedagogicas/4.jpeg'
import cinco from '../../assets/Actividades/salidas pedagogicas/5.jpeg'
import seis from '../../assets/Actividades/salidas pedagogicas/6.jpeg'

import siete from '../../assets/Actividades/dia de los abuelitos/7.jpeg'
import ocho from '../../assets/Actividades/dia de los abuelitos/8.jpeg'
import nueve from '../../assets/Actividades/dia de los abuelitos/9.jpeg'
import diez from '../../assets/Actividades/dia de los abuelitos/10.jpeg'

import once from '../../assets/Actividades/dia de los niños/11.jpeg'
import doce from '../../assets/Actividades/dia de los niños/12.jpeg'
import trece from '../../assets/Actividades/dia de los niños/13.jpeg'
import catorce from '../../assets/Actividades/dia de los niños/14.jpeg'
import quince from '../../assets/Actividades/dia de los niños/15.jpeg'
import dieciseis from '../../assets/Actividades/dia de los niños/16.jpeg'

import diecisiete from '../../assets/Actividades/actividades divertidas/17.jpeg'
import dieciocho from '../../assets/Actividades/actividades divertidas/18.jpeg'
import diecinueve from '../../assets/Actividades/actividades divertidas/19.jpeg'
import veinte from '../../assets/Actividades/actividades divertidas/20.jpeg'

import veintiuno from '../../assets/Actividades/semana cultura/21.jpeg'
import veintidos from '../../assets/Actividades/semana cultura/22.jpeg'
import veintitres from '../../assets/Actividades/semana cultura/23.jpeg'
import veinticuatro from '../../assets/Actividades/semana cultura/24.jpeg'
import veinticinco from '../../assets/Actividades/semana cultura/25.jpeg'
import veintiseis from '../../assets/Actividades/semana cultura/26.jpeg'
import veintisiete from '../../assets/Actividades/semana cultura/27.jpeg'
import veintiocho from '../../assets/Actividades/semana cultura/28.jpeg'
import veintinueve from '../../assets/Actividades/semana cultura/29.jpeg'
import treinta from '../../assets/Actividades/semana cultura/30.jpeg'
import treintaiuno from '../../assets/Actividades/semana cultura/31.jpeg'
import treintaidos from '../../assets/Actividades/semana cultura/32.jpeg'
import treintaitres from '../../assets/Actividades/semana cultura/33.jpeg'
import treintaicuatro from '../../assets/Actividades/semana cultura/34.jpeg'

import treintaicinco from '../../assets/Actividades/fashion/35.jpeg'
import treintaiseis from '../../assets/Actividades/fashion/36.jpeg'
import treintaisiete from '../../assets/Actividades/fashion/37.jpeg'
import treintaiocho from '../../assets/Actividades/fashion/38.jpeg'
import treintainueve from '../../assets/Actividades/fashion/39.jpeg'
import cuarenta from '../../assets/Actividades/fashion/40.jpeg'
import cuarentaiuno from '../../assets/Actividades/fashion/41.jpeg'
import cuarentaidos from '../../assets/Actividades/fashion/42.jpeg'
import cuarentaitres from '../../assets/Actividades/fashion/43.jpeg'
import cuarentaicuatro from '../../assets/Actividades/fashion/44.jpeg'

import cuarentaicinco from '../../assets/Actividades/clausura/45.jpeg'
import cuarentaiseis from '../../assets/Actividades/clausura/46.jpeg'
import cuarentaisiete from '../../assets/Actividades/clausura/47.jpeg'
import cuarentaiocho from '../../assets/Actividades/clausura/48.jpeg'
import cuarentainueve from '../../assets/Actividades/clausura/49.jpeg'
import cincuenta from '../../assets/Actividades/clausura/50.jpeg'
import cincuentaiuno from '../../assets/Actividades/clausura/51.jpeg'
import cincuentaidos from '../../assets/Actividades/clausura/52.jpeg'

import cincuentaitres from '../../assets/Actividades/vacaciones recreativas/53.jpeg'
import cincuentaicuatro from '../../assets/Actividades/vacaciones recreativas/54.jpeg'
import cincuentaicinco from '../../assets/Actividades/vacaciones recreativas/55.jpeg'
import cincuentaiseis from '../../assets/Actividades/vacaciones recreativas/56.jpeg'
import cincuentaisiete from '../../assets/Actividades/vacaciones recreativas/57.jpeg'
import cincuentaiocho from '../../assets/Actividades/vacaciones recreativas/58.jpeg'
import cincuentainueve from '../../assets/Actividades/vacaciones recreativas/59.jpeg'
import sesenta from '../../assets/Actividades/vacaciones recreativas/60.jpeg'
import sesentaiuno from '../../assets/Actividades/vacaciones recreativas/61.jpeg'
import sesentaidos from '../../assets/Actividades/vacaciones recreativas/62.jpeg'
import sesentaitres from '../../assets/Actividades/vacaciones recreativas/63.jpeg'
import sesentaicuatro from '../../assets/Actividades/vacaciones recreativas/64.jpeg'
import sesentaicinco from '../../assets/Actividades/vacaciones recreativas/65.jpeg'
import sesentaiseis from '../../assets/Actividades/vacaciones recreativas/66.jpeg'
import sesentaisiete from '../../assets/Actividades/vacaciones recreativas/67.jpeg'
import sesentaiocho from '../../assets/Actividades/vacaciones recreativas/68.jpeg'
import sesentainueve from '../../assets/Actividades/vacaciones recreativas/69.jpeg'
import setenta from '../../assets/Actividades/vacaciones recreativas/70.jpeg'
import setentaiuno from '../../assets/Actividades/vacaciones recreativas/71.jpeg'
import setentaidos from '../../assets/Actividades/vacaciones recreativas/72.jpeg'
import setentaitres from '../../assets/Actividades/vacaciones recreativas/73.jpeg'

import videoOne from '../../assets/Actividades/videos/video1.mp4'
import videoTwo from '../../assets/Actividades/videos/video2.mp4'
import videoTree from '../../assets/Actividades/videos/video3.mp4'
import videoFour from '../../assets/Actividades/videos/video4.mp4'

import nueva1 from '../../assets/Actividades/dia de los niños/nueva1.jpg'
import nueva2 from '../../assets/Actividades/dia de los niños/nueva2.jpg'
import nueva4 from '../../assets/Actividades/dia de los niños/nueva4.jpg'
import nueva13 from '../../assets/Actividades/dia de los niños/nueva13.jpg'
import nueva14 from '../../assets/Actividades/dia de los niños/nueva14.jpg'
import nueva3 from '../../assets/Actividades/vacaciones recreativas/nueva3.jpg'
import nueva5 from '../../assets/Actividades/semana cultura/nueva5.jpg'
import nueva8 from '../../assets/Actividades/semana cultura/nueva8.jpg'
import nueva9 from '../../assets/Actividades/semana cultura/nueva9.jpg'
import nueva6 from '../../assets/Actividades/actividades divertidas/nueva6.jpg'
import nueva7 from '../../assets/Actividades/actividades divertidas/nueva7.jpg'
import nueva10 from '../../assets/Actividades/actividades divertidas/nueva10.jpg'
import nueva11 from '../../assets/Actividades/actividades divertidas/nueva11.jpg'
import nueva12 from '../../assets/Actividades/actividades divertidas/nueva12.jpg'

const photos = [
    { src: uno, width: 4, height: 3, category: 'Pedagogical Outings' },
    { src: dos, width: 4, height: 3, category: 'Pedagogical Outings' },
    { src: tres, width: 4, height: 3, category: 'Pedagogical Outings' },
    { src: cuatro, width: 4, height: 3, category: 'Pedagogical Outings' },
    { src: cinco, width: 4, height: 3, category: 'Pedagogical Outings' },
    { src: seis, width: 4, height: 3, category: 'Pedagogical Outings' },
    { src: siete, width: 4, height: 3, category: 'Grandparents Day' },
    { src: ocho, width: 4, height: 3, category: 'Grandparents Day' },
    { src: nueve, width: 4, height: 3, category: 'Grandparents Day' },
    { src: diez, width: 4, height: 3, category: 'Grandparents Day' },
    { src: once, width: 4, height: 3, category: "Children's Day" },
    { src: doce, width: 4, height: 3, category: "Children's Day" },
    { src: trece, width: 4, height: 3, category: "Children's Day" },
    { src: catorce, width: 4, height: 3, category: "Children's Day" },
    { src: quince, width: 4, height: 3, category: "Children's Day" },
    { src: dieciseis, width: 4, height: 3, category: "Children's Day" },
    { src: diecisiete, width: 4, height: 3, category: 'Fun Activities' },
    { src: dieciocho, width: 4, height: 3, category: 'Fun Activities' },
    { src: diecinueve, width: 4, height: 3, category: 'Fun Activities' },
    { src: veinte, width: 4, height: 3, category: 'Fun Activities' },
    { src: veintiuno, width: 4, height: 3, category: 'Cultural Week' },
    { src: veintidos, width: 4, height: 3, category: 'Cultural Week' },
    { src: veintitres, width: 4, height: 3, category: 'Cultural Week' },
    { src: veinticuatro, width: 4, height: 3, category: 'Cultural Week' },
    { src: veinticinco, width: 4, height: 3, category: 'Cultural Week' },
    { src: veintiseis, width: 4, height: 3, category: 'Cultural Week' },
    { src: veintisiete, width: 4, height: 3, category: 'Cultural Week' },
    { src: veintiocho, width: 4, height: 3, category: 'Cultural Week' },
    { src: veintinueve, width: 4, height: 3, category: 'Cultural Week' },
    { src: treinta, width: 4, height: 3, category: 'Cultural Week' },
    { src: treintaiuno, width: 4, height: 3, category: 'Cultural Week' },
    { src: treintaidos, width: 4, height: 3, category: 'Cultural Week' },
    { src: treintaitres, width: 4, height: 3, category: 'Cultural Week' },
    { src: treintaicuatro, width: 4, height: 3, category: 'Cultural Week' },
    { src: treintaicinco, width: 4, height: 3, category: 'Fashion' },
    { src: treintaiseis, width: 4, height: 3, category: 'Fashion' },
    { src: treintaisiete, width: 4, height: 3, category: 'Fashion' },
    { src: treintaiocho, width: 4, height: 3, category: 'Fashion' },
    { src: treintainueve, width: 4, height: 3, category: 'Fashion' },
    { src: cuarenta, width: 4, height: 3, category: 'Fashion' },
    { src: cuarentaiuno, width: 4, height: 3, category: 'Fashion' },
    { src: cuarentaidos, width: 4, height: 3, category: 'Fashion' },
    { src: cuarentaitres, width: 4, height: 3, category: 'Fashion' },
    { src: cuarentaicuatro, width: 4, height: 3, category: 'Fashion' },
    { src: cuarentaicinco, width: 4, height: 3, category: 'Graduation' },
    { src: cuarentaiseis, width: 4, height: 3, category: 'Graduation' },
    { src: cuarentaisiete, width: 4, height: 3, category: 'Graduation' },
    { src: cuarentaiocho, width: 4, height: 3, category: 'Graduation' },
    { src: cuarentainueve, width: 4, height: 3, category: 'Graduation' },
    { src: cincuenta, width: 4, height: 3, category: 'Graduation' },
    { src: cincuentaiuno, width: 4, height: 3, category: 'Graduation' },
    { src: cincuentaidos, width: 4, height: 3, category: 'Graduation' },
    { src: cincuentaitres, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: cincuentaicuatro, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: cincuentaicinco, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: cincuentaiseis, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: cincuentaisiete, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: cincuentaiocho, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: cincuentainueve, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesenta, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesentaiuno, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesentaidos, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesentaitres, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesentaicuatro, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesentaicinco, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesentaiseis, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesentaisiete, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesentaiocho, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: sesentainueve, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: setenta, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: setentaiuno, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: setentaidos, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: setentaitres, width: 4, height: 3, category: 'Recreational Vacations' },
    { src: videoOne, width: 1, height: 1, category: 'Videos' },
    { src: videoTwo, width: 4, height: 3, category: 'Videos' },
    { src: videoTree, width: 4, height: 3, category: 'Videos' },
    { src: videoFour, width: 4, height: 3, category: 'Videos' },
    { src: nueva1, width: 4, height: 3, category: "Children's Day" },
    { src: nueva2, width: 4, height: 3, category: "Children's Day" },
    { src: nueva4, width: 6, height: 3, category: "Children's Day" },
    { src: nueva13, width: 8, height: 3, category: "Children's Day" },
    { src: nueva14, width: 8, height: 3, category: "Children's Day" },
    { src: nueva3, width: 8, height: 3, category: "Recreational Vacations" },
    { src: nueva5, width: 8, height: 3, category: "Cultural Week" },
    { src: nueva8, width: 8, height: 3, category: "Cultural Week" },
    { src: nueva9, width: 6, height: 3, category: "Cultural Week" },
    { src: nueva6, width: 6, height: 3, category: 'Fun Activities' },
    { src: nueva7, width: 4, height: 3, category: 'Fun Activities' },
    { src: nueva10, width: 4, height: 3, category: 'Fun Activities' },
    { src: nueva11, width: 4, height: 3, category: 'Fun Activities' },
    { src: nueva12, width: 4, height: 3, category: 'Fun Activities' },
];

const ActivityGallery = () => {
    const [index, setIndex] = useState(-1);
    const [activeCategory, setActiveCategory] = useState('Pedagogical Outings');
    const bg = useColorModeValue('blue.100', 'purple.800');

    const handleClick = (event, { index, category }) => {
        setIndex(index);
        setActiveCategory(category);
    };

    const handleClose = () => setIndex(-1);

    const groupByCategory = () => {
        return photos.reduce((acc, photo) => {
            if (!acc[photo.category]) {
                acc[photo.category] = [];
            }
            acc[photo.category].push(photo);
            return acc;
        }, {});
    };

    const categorizedPhotos = groupByCategory();
    const renderMedia = (photo) => {
        if (photo.category === 'Videos') {
            return (
                <Box w={"50%"} mt={5} h={"100%"}>
                    <video key={photo.src} width="100%" controls>
                        <source src={photo.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>
            );
        }
        return <img key={photo.src} src={photo.src} alt="" style={{ width: '100%' }} />;
    };
    return (
        <Box bg={bg} p={10} borderRadius="lg">
            <Heading mb={6} textAlign="center" color={"blue.600"}>Activity Gallery</Heading>
            {Object.keys(categorizedPhotos).map((category) => (
                <Box key={category} mb={8}>
                    <Heading size="lg" mb={4} color={"purple.800"}>{category}</Heading>
                    {category === 'Videos' ? (
                        categorizedPhotos[category].map((photo) => renderMedia(photo))
                    ) : (
                        <Gallery
                            photos={categorizedPhotos[category]}
                            onClick={(event, { index }) => handleClick(event, { index, category })}
                            direction="row"
                            targetRowHeight={300}
                            margin={10}
                            padding={20}
                        />
                    )}
                </Box>
            ))}
            <Lightbox
                open={index >= 0}
                index={index}
                close={handleClose}
                slides={categorizedPhotos[activeCategory]}
            />
        </Box>
    );
};

export default ActivityGallery;