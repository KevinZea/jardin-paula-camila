import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Button, Image } from '@chakra-ui/react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import Logo from '../../assets/logo-bg.png';

const Links = ['Inicio', 'Instalaciones', 'Sobre Nosotros', 'Actividades', 'Contacto'];

const NavLink = ({ children }) => (
    <Link
        color={'white'}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: 'blue.200',
        }}
        href={children === "Inicio" ? "/" : children === "Sobre Nosotros" ? "about" : children.toLowerCase()}>
        {children}
    </Link>
);

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg="blue.400" px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Button
                        size={'md'}
                        aria-label={'Open Menu'}
                        onClick={isOpen ? onClose : onOpen}
                        display={{ md: 'none' }}
                    >
                        {isOpen ? <IoMdCloseCircleOutline /> : <MdMenu />}
                    </Button>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Image src={Logo} boxSize="50px" />
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};

export default Navbar;