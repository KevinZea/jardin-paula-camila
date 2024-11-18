import React from "react";
import {
    Box,
    Flex,
    Image
} from "@chakra-ui/react";
import MySplideCarousel from "./MySplideCarousel";
import titulo from "../../../assets/titulo.png";
import background from "../../../assets/background.jpeg";
import Sello from "./Sello";
import Cards from "./Cards";

const Home = ({ isMobile }) => {

    return (
        <Box
            alignItems="center"
            width="100%"
            p={5}
            bgImage={`url(${background})`}
            bgSize="cover"
            bgPosition="center"
            h={"270vh"}

        >
            <Flex
                direction="column"
                alignItems="center"
            >
                <Image
                    src={titulo}
                    alt="titulo"
                    width="50%"
                    height="50%"
                />
                <br />
                <MySplideCarousel />
            </Flex>
            <Sello />
            <Cards isMobile={isMobile} />
        </Box>
    );
}

export default Home;