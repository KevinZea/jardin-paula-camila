import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Link
} from '@chakra-ui/react';

const Cards = ({ isMobile }) => {
    const data = [
        {
            title: "Quiénes somos",
            description: "Conoce nuestra filosofía y metodología",
            color: "blue.400",
            link: "about"
        },
        {
            title: "Metodología",
            description: "Te invitamos a conocer nuestra metodología para niños de 18 meses hasta 5 años.",
            color: "green.400",
            link: "about"
        },
        {
            title: "Instalaciones",
            description: "Conoce los espacios donde aprendemos, jugamos y crecemos.",
            color: "yellow.400",
            link: "instalaciones"
        },
    ]

    const handleClick = (link) => {
        window.open(link)
    }

    return (
        <Flex
            mt={5}
            justify={"space-around"}
            flexDir={isMobile ? "column" : "row"}
            gap={isMobile && 5}
        >
            {data.map((item, index) => (
                <Card
                    key={index}
                    maxW={"320px"}
                    w={"full"}
                    bg={item.color}
                    boxShadow={"2xl"}
                    rounded={"md"}
                    p={6}
                    overflow={"hidden"}

                >
                    <Box
                        h={"120px"}
                        bg={"blue.100"}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={"relative"}
                    >
                        <Heading
                            as={"h3"}
                            size={"xl"}
                            color={"gray.800"}
                            textAlign={"center"}
                            bg={"purple.200"}
                            px={3}
                            py={1}
                            pos={"absolute"}
                            bottom={-4}
                            left={"50%"}
                            transform={"translateX(-50%)"}
                            rounded={"md"}
                        >
                            {item.title}
                        </Heading>
                    </Box>
                    <CardBody>
                        <Text
                            color={"gray.600"}
                            fontSize={"sm"}
                        >
                            {item.description}
                        </Text>
                    </CardBody>
                    <CardFooter>
                            <Button
                                w={"full"}
                                mt={2}
                                bg={"purple.400"}
                                color={"white"}
                                _hover={{
                                    bg: "purple.500"
                                }}
                                onClick={() => handleClick(item.link)}
                            >
                                Ver más
                            </Button>
                    </CardFooter>
                </Card>
            ))}

        </Flex>
    );
}

export default Cards;