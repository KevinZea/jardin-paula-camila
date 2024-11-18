import React, { useRef } from 'react';
import { useState } from 'react';
import { Box, Flex, Heading, Text, Input, Textarea, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: 0,
    message: '',
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm('default_service', 'template_g49rj3a', form.current, 'oqSlt9Wo-4cEG3vak')
      .then(() => {
        toast({
          title: "Mensaje enviado",
          description: "Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo lo antes posible.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setInput({
          name: '',
          email: '',
          phone: 0,
          message: '',
        });
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  function handleInputChange(e) {
    let obj = {...input, [e.target.name]: e.target.value};
    setInput(obj);
    setError(validateForm(obj));
  }

  function validateForm(input) {
    let errors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    if (!input.name) {
      errors.name = 'Nombre es requerido';
    }
    if (!input.email) {
      errors.email = 'Email es requerido';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.email)) {
      errors.email = 'Por favor, ingrese un email válido';
    }
    if (!input.phone) {
      errors.phone = 'Número de teléfono es requerido';
    } else if (input.phone < 3000000000 || input.phone > 3999999999) {
      errors.phone = 'Por favor, ingrese un número de teléfono válido';
    }
    if (!input.message) {
      errors.message = 'Mensaje es requerido';
    }

    return errors;
  }

  return (
    <Box maxW="md" mx="auto" mt={20}>
      <Flex direction="column" align="center" mb={8}>
        <Heading as="h3" size="lg" mb={2} color={"blue.600"}>
            Contacto con nosotros
        </Heading>
        <Text fontSize="md" color="gray.500">Jardín Infantil Paula Camila</Text>
      </Flex>
      <Box p={6} borderWidth={1} borderRadius={8} boxShadow="lg">
        <form ref={form} onSubmit={sendEmail}>
          <Box mb={4}>
            <Input
              name="name"
              placeholder="Nombre"
              value={input.name}
              onChange={handleInputChange}
            />
            {error.name && (
              <Alert status="error" mt={2}>
                <AlertIcon />
                <AlertTitle mr={2}>Error:</AlertTitle>
                <AlertDescription>{error.name}</AlertDescription>
              </Alert>
            )}
          </Box>
          <Box mb={4}>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={input.email}
              onChange={handleInputChange}
            />
            {error.email && (
              <Alert status="error" mt={2}>
                <AlertIcon />
                <AlertTitle mr={2}>Error:</AlertTitle>
                <AlertDescription>{error.email}</AlertDescription>
              </Alert>
            )}
          </Box>
          <Box mb={4}>
            <Input
              name="phone"
              type="number"
              placeholder="Teléfono"
              value={input.phone}
              onChange={handleInputChange}
            />
            {error.phone && (
              <Alert status="error" mt={2}>
                <AlertIcon />
                <AlertTitle mr={2}>Error:</AlertTitle>
                <AlertDescription>{error.phone}</AlertDescription>
              </Alert>
            )}
          </Box>
          <Box mb={4}>
            <Textarea
              name="message"
              placeholder="Mensaje"
              value={input.message}
              onChange={handleInputChange}
            />
            {error.message && (
              <Alert status="error" mt={2}>
                <AlertIcon />
                <AlertTitle mr={2}>Error:</AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            )}
          </Box>
          <Button
            type="submit"
            colorScheme="blue"
            isDisabled={
              error.name.length > 0 ||
              error.phone.length > 0 ||
              error.email.length > 0 ||
              error.message.length > 0 ||
              input.name.length <= 0 ||
              input.email.length <= 0 ||
              input.phone < 3000000000 ||
              input.phone > 3999999999 ||
              input.message.length <= 0
            }
          >
            Enviar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;