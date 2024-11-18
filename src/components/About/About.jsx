import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    SimpleGrid,
    VStack,
    HStack,
    List,
    ListItem,
    ListIcon,
    Button,
    Card,
    CardBody,
    Divider,
    useColorModeValue,
    Icon,
    Flex,
    Badge,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { MdCheckCircle, MdAccessTime } from 'react-icons/md';
import { FaGraduationCap, FaUsers, FaHeart, FaFlag } from 'react-icons/fa';
import background from '../../assets/background.jpeg';
import logo from '../../assets/logo.png';
import represent from '../../assets/represent.jpeg';
import perfilKid from '../../assets/perfiles/perfil-niño.jpg';
import profileTeacher from '../../assets/perfiles/perfil-docente.jpg';
import profileParents from '../../assets/perfiles/perfil-padres.jpg';

const About = () => {
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const cardBg = useColorModeValue('white', 'gray.800');
    const accentColor = useColorModeValue('purple.500', 'purple.300');

    const services = [
        "Inglés", "Danzas", "Artes", "Música", "Natación",
        "Talleres a padres de familia", "Fonoaudiología y asesoría psicológica",
        "Nutricionista", "Rutas escolares", "Enfermería"
    ];

    const schedules = [
        { name: "Jornada Única", times: ["7:00 a.m. a 1:00 p.m.", "7:30 a.m. a 12:00 p.m."] },
        { name: "Jornada Extendida", times: ["7:00 a.m. a 3:00 p.m."] },
        { name: "Jornada Completa", times: ["7:00 a.m. a 5:00 p.m."] }
    ];

    return (
        <Box bg={bgColor} minH="100vh">
            {/* Hero Section */}
            <Box
                bgImage={`url(${represent})`}
                bgPosition="center"
                bgSize="cover"
                h="60vh"
                position="relative"
            >
                <Box
                    position="absolute"
                    w="full"
                    h="full"
                    bg="blackAlpha.600"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <VStack spacing={4} color="white">
                        <Heading size="2xl" textAlign="center">
                            Jardín Infantil Paula Camila
                        </Heading>
                        <Text fontSize="xl" maxW="2xl" textAlign="center">
                            Somos un jardín infantil moderno, con un modelo pedagógico a la vanguardia,
                            que forma buenos seres humanos, felices y con criterio para enfrentarse al mundo.
                        </Text>
                    </VStack>
                </Box>
            </Box>

            <Container maxW="container.xl" py={10}>
                {/* Admisiones Card */}
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    mb={10}
                    bg={accentColor}
                    color="white"
                >
                    <CardBody>
                        <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
                            <VStack align="start" spacing={2}>
                                <Heading size="lg">Admisiones Abiertas</Heading>
                                <Text>
                                    Inscribe a tu niño y sé parte de la revolución educativa en la primera infancia
                                </Text>
                            </VStack>
                            <Button
                                as={RouterLink}
                                to="/contact"
                                colorScheme="whiteAlpha"
                                size="lg"
                                mt={{ base: 4, md: 0 }}
                            >
                                Contáctanos
                            </Button>
                        </Flex>
                    </CardBody>
                </Card>

                {/* Misión y Visión */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
                    <VStack align="start" spacing={4}>
                        <Heading size="lg" color={accentColor}>
                            <Icon as={FaGraduationCap} mr={2} />
                            Nuestra Misión
                        </Heading>
                        <Text>
                            Nuestra misión es hacer de nuestros niños y niñas, personas altamente sociales,
                            competitivos y con capacidad de liderazgo, a través de una labor educativa y
                            pedagógica donde desarrollemos al máximo sus potenciales intelectuales,
                            físicas y emocionales...
                        </Text>
                    </VStack>
                    <VStack align="start" spacing={4}>
                        <Heading size="lg" color={accentColor}>
                            <Icon as={FaUsers} mr={2} />
                            Nuestra Visión
                        </Heading>
                        <Text>
                            El Jardín Infantil Paula Camila, será reconocido en el medio educativo y
                            pedagógico como una Institución sólida, fortalecida con procesos en la primera
                            infancia...
                        </Text>
                    </VStack>
                </SimpleGrid>

                {/* Identificación */}
                <Card bg={cardBg} mb={10}>
                    <CardBody>
                        <Heading size="md" mb={4} color={accentColor}>Identificación de la Institución</Heading>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                            <HStack>
                                <Badge colorScheme="purple">Carácter</Badge>
                                <Text>Privado</Text>
                            </HStack>
                            <HStack>
                                <Badge colorScheme="purple">Calendario</Badge>
                                <Text>A</Text>
                            </HStack>
                            <HStack>
                                <Badge colorScheme="purple">Modalidad</Badge>
                                <Text>Mixto</Text>
                            </HStack>
                            <HStack>
                                <Badge colorScheme="purple">Jornada</Badge>
                                <Text>Mixta</Text>
                            </HStack>
                            <HStack>
                                <Badge colorScheme="purple">Sede</Badge>
                                <Text>1</Text>
                            </HStack>
                            <HStack>
                                <Badge colorScheme="purple">Zona</Badge>
                                <Text>Urbana</Text>
                            </HStack>
                        </SimpleGrid>
                    </CardBody>
                </Card>

                {/* Símbolos */}
                <VStack spacing={8} mb={10}>
                    <Heading size="lg" color={accentColor}>
                        <Icon as={FaFlag} mr={2} />
                        Símbolos que nos Identifican
                    </Heading>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        {/* Logo */}
                        <Card bg={cardBg}>
                            <CardBody>
                                <VStack spacing={4}>
                                    <Image src={logo} alt="Logo Paula Camila" maxH="200px" objectFit="contain" />
                                    <Text fontWeight="bold">Nuestro Logo</Text>
                                    <Text fontSize="sm">
                                        Una gatita enseñando, representa el amor, el cuidado y la entrega
                                        a nuestros estudiantes.
                                    </Text>
                                </VStack>
                            </CardBody>
                        </Card>

                        {/* Colores */}
                        <Card bg={cardBg}>
                            <CardBody>
                                <VStack spacing={4} align="stretch">
                                    <Heading size="sm">Colores Institucionales</Heading>
                                    <Box bg="white" p={2} borderRadius="md">
                                        <Text>Paz y respeto</Text>
                                    </Box>
                                    <Box bg="blue.500" p={2} borderRadius="md" color="white">
                                        <Text>Compromiso y lealtad</Text>
                                    </Box>
                                    <Box bg="red.500" p={2} borderRadius="md" color="white">
                                        <Text>Esfuerzo y tenacidad</Text>
                                    </Box>
                                </VStack>
                            </CardBody>
                        </Card>

                        {/* Himno */}
                        <Card bg={cardBg}>
                            <CardBody>
                                <VStack spacing={4}>
                                    <Icon as={FaHeart} w={10} h={10} color={accentColor} />
                                    <Text fontWeight="bold">Nuestro Himno</Text>
                                    <Text align="center" fontStyle="italic">
                                        "Paula Camila es Alegría, Bondad y Sabiduría, dice el coro de nuestro himno, el cual deja al descubierto nuestra esencia, nuestra razón de ser y de hacer."
                                    </Text>
                                </VStack>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </VStack>

                {/* Perfiles */}
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={10}>
                    <Card bg={cardBg}>
                        <CardBody>
                            <VStack spacing={4}>
                                <Image src={perfilKid} alt="Perfil Niño" borderRadius="lg" />
                                <Heading size="md">Perfil del Estudiante</Heading>
                                <Text>POSITIVO en su desarrollo y aprendizaje</Text>
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card bg={cardBg}>
                        <CardBody>
                            <VStack spacing={4}>
                                <Image src={profileTeacher} alt="Perfil Docente" borderRadius="lg" />
                                <Heading size="md">Perfil del Docente</Heading>
                                <Text>Con VALOR y compromiso en su labor</Text>
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card bg={cardBg}>
                        <CardBody>
                            <VStack spacing={4}>
                                <Image src={profileParents} alt="Perfil Padres" borderRadius="lg" />
                                <Heading size="md">Perfil de Padres</Heading>
                                <Text>ACTIVOS en la educación de sus hijos</Text>
                            </VStack>
                        </CardBody>
                    </Card>
                </SimpleGrid>

                {/* Horarios */}
                <Card bg={cardBg} mb={10}>
                    <CardBody>
                        <Heading size="md" mb={6} color={accentColor}>
                            <Icon as={MdAccessTime} mr={2} />
                            Horarios
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                            {schedules.map((schedule, index) => (
                                <VStack key={index} align="start" spacing={2}>
                                    <Text fontWeight="bold">{schedule.name}</Text>
                                    {schedule.times.map((time, idx) => (
                                        <Text key={idx}>{time}</Text>
                                    ))}
                                </VStack>
                            ))}
                        </SimpleGrid>
                    </CardBody>
                </Card>

                {/* Servicios */}
                <Card bg={cardBg}>
                    <CardBody>
                        <Heading size="md" mb={6} color={accentColor}>Nuestros Servicios</Heading>
                        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4}>
                            {services.map((service, index) => (
                                <HStack key={index}>
                                    {/* <ListIcon as={MdCheckCircle} color={accentColor} /> */}
                                    <Icon as={MdCheckCircle} color={accentColor} />
                                    <Text>{service}</Text>
                                </HStack>
                            ))}
                        </SimpleGrid>
                    </CardBody>
                </Card>
            </Container>
        </Box>
    );
};

export default About;