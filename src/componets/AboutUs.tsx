'use client'

import { ReactElement, SVGProps } from 'react';
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react';

interface IFeature {
  heading: string;
  content: string;
  icon: ReactElement;
}
import { FaCircleCheck } from "react-icons/fa6";
const features: IFeature[] = [
  {
    heading: 'Compromisso com a Excelência',
    content: 'Oferecemos soluções inovadoras e seguras, focadas em transformar desafios em oportunidades para sua empresa crescer com eficiência.',
    icon: <FaCircleCheck size={30}/>
  },
  {
    heading: 'Parceria que Gera Resultados',
    content: 'Trabalhamos ao seu lado para simplificar o gerenciamento e aumentar a produtividade, promovendo inovação e sucesso sustentável.',
    icon: <FaCircleCheck size={30}/>
  },
  {
    heading: 'Foco em Inovação',
    content: 'Nossas ferramentas intuitivas e de alta qualidade são projetadas para levar seu negócio a novos patamares.',
    icon: <FaCircleCheck size={30}/>
  }
];

const AboutUs = () => {
  return (
    <Box bg={"#2196f3"}>
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Sobre nós
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {features.map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue('#f3f3f3', 'gray.700')}
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
            h="300px"
          >
            <Flex
              p={2}
              w="max-content"
              color="white"
              // bgGradient="linear(to-br, #228be6, #15aabf)"
              bg={"#4B4B4B"}
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
    </Box>
  );
};

export default AboutUs;