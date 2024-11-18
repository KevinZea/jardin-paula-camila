import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
} from "@chakra-ui/react";
import rei from "../../../assets/REI.jpeg";

const Sello = () => {

    return (
        <Flex
            justifyContent={"center"}
            mt={5}
            flexDir={"column"}
        >
            <Flex
                alignItems={"center"}
                direction={"column"}
            >
                <Heading color={"blue.400"}
                    fontSize={"5xl"}
                >
                    ¡Bienvenidos!
                </Heading>

                <Text
                    fontSize={"2xl"}
                    color={"purple"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                >
                    Somos un jardín infantil moderno, con un modelo pedagógico a la vanguardia, que forma buenos seres humanos, felices y con criterio para enfrentarse al mundo.
                </Text>
            </Flex>
            <Flex
                justifyContent={"center"}
                mt={5}
            >
                <Image
                    src={rei}
                    alt="rei"
                    width={"50%"}
                    height={"50%"}
                    borderRadius={"full"}
                    opacity={0.8}
                />
            </Flex>
        </Flex>
    );
}

export default Sello;