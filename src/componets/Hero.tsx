'use client'

import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Image,
  Skeleton,
  Box,
  Link,
} from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px">
          <chakra.h1 fontSize="4xl" lineHeight={1} fontWeight="bold" textAlign="left">
            Siaf Lite <br />
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            Somos mais que uma empresa de gestão empresarial: somos parceiros no crescimento do
            seu negócio. Nossa missão é desenvolver soluções seguras, intuitivas e eficientes que
            não apenas simplificam o gerenciamento, mas também promovem produtividade, inovação e
            resultados. Com foco em qualidade e excelência, estamos aqui para transformar desafios
            em oportunidades e ajudar sua empresa a alcançar novos patamares.
          </Text>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            maxW={{ base: '100%', md: '35rem' }}
            maxH="40rem"
            objectFit="contain"
            src="/imageone.jpeg"
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-15px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('#808080', '#808080')}
        width="250"
        height="320"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
