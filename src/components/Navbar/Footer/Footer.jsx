import React from 'react';
import {
  Box,
  Container,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  Link,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  // Colors
  const bgGradient = useColorModeValue(
    'linear(to-r, purple.100, pink.100)',
    'linear(to-r, purple.900, pink.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const headingColor = useColorModeValue('purple.600', 'purple.300');

  const socialLinks = [
    {
      label: 'Facebook',
      icon: FaFacebook,
      href: '#',
      color: 'facebook.500'
    },
    {
      label: 'Instagram',
      icon: FaInstagram,
      href: '#',
      color: 'pink.500'
    },
    {
      label: 'WhatsApp',
      icon: FaWhatsapp,
      href: '#',
      color: 'green.500'
    }
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      content: '(+57) 320 809 79 13',
      label: 'Llámanos'
    },
    {
      icon: FaEnvelope,
      content: 'jardinpaulacamila@hotmail.com',
      label: 'Escríbenos'
    },
    {
      icon: FaMapMarkerAlt,
      content: 'Calle 8 f # 79 c - 71 Castilla, Bogotá, Colombia',
      label: 'Visítanos'
    }
  ];

  return (
    <Box
      py={{ base: 4, md: 8 }}
      bgGradient={bgGradient}
      borderRadius="xl"
      boxShadow="2xl"
      mx={{ base: 4, md: 8 }}
      my={8}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={8}
          align="stretch"
          justify="space-between"
        >
          {/* Información de contacto */}
          <VStack
            flex={1}
            align="stretch"
            spacing={6}
            bg={cardBg}
            p={6}
            borderRadius="xl"
            boxShadow="lg"
          >
            <Heading size="lg" color={headingColor}>
              Contáctanos
            </Heading>
            
            {/* Info de contacto */}
            <VStack align="stretch" spacing={4}>
              {contactInfo.map((item, index) => (
                <HStack key={index} spacing={4}>
                  <Icon as={item.icon} w={6} h={6} color={headingColor} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold" color={headingColor}>
                      {item.label}
                    </Text>
                    <Text color={textColor}>{item.content}</Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>

            {/* Redes sociales */}
            <Box>
              <Text fontWeight="bold" mb={3} color={headingColor}>
                Síguenos en redes sociales
              </Text>
              <HStack spacing={4}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    as={Link}
                    href={social.href}
                    aria-label={social.label}
                    icon={<Icon as={social.icon} w={6} h={6} />}
                    colorScheme={social.color.split('.')[0]}
                    variant="ghost"
                    _hover={{
                      bg: social.color,
                      color: 'white',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.3s"
                  />
                ))}
              </HStack>
            </Box>
          </VStack>

          {/* Mapa */}
          <Box
            flex={1}
            bg={cardBg}
            borderRadius="xl"
            boxShadow="lg"
            overflow="hidden"
            minH={{ base: '300px', md: '400px' }}
          >
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d202.26662792491763!2d-74.14329964661857!3d4.643292830938299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sco!4v1668213095141!5m2!1ses!2sco" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d202.26662792491763!2d-74.14329964661857!3d4.643292830938299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sco!4v1668213095141!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;