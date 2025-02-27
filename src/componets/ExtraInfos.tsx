'use client'
import * as React from 'react';
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link
} from '@chakra-ui/react';

const ExtraInfos = () => {
  return (
    <Container maxW="5xl" px={{ base: 6, md: 3 }} py={10}>
      <Stack direction={{ base: 'column-reverse', md: 'row' }} justifyContent="center" alignItems="center">
        <Stack direction="column" spacing={6}>
          <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            textAlign="left"
            maxW={{ base: '100%', md: '480px' }}
          >
            Transformando desafios em soluções inteligentes
          </Heading>
          <Text
            color={useColorModeValue('gray.700', 'gray.400')}
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="300"
            maxW={{ base: '100%', md: '470px' }}
          >
            Somos especializados em fornecer ferramentas que simplificam o gerenciamento empresarial, promovendo inovação, eficiência e resultados. Nossa abordagem é focada em qualidade e no sucesso do seu negócio, criando soluções personalizadas que atendem às suas necessidades específicas. Confie em nós para elevar sua empresa a novos patamares.
          </Text>
          <HStack spacing={5}>
            {['Inovação', ' Parceria de confiança '].map((text, index) => (
              <HStack spacing={2} key={index}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M6.97665 13.425C6.90165 13.425 6.82665 13.425 6.67665 13.425C6.30165 13.35 6.00165 13.125 5.85165 12.825L4.05165 10.2C3.90165 9.975 3.90165 9.6 4.20165 9.45C4.27665 9.375 4.42665 9.375 4.50165 9.375C4.65165 9.375 4.87665 9.45 4.95165 9.6L6.82665 12.225C6.90165 12.3 6.90165 12.3 6.97665 12.3C6.97665 12.3 6.97665 12.3 7.05165 12.3C7.12665 12.3 7.12665 12.3 7.20165 12.225C7.20165 12.225 7.27665 12.225 7.27665 12.15L13.2017 4.725C13.2767 4.575 13.5017 4.5 13.6517 4.5C13.8017 4.5 13.8767 4.575 14.0267 4.65C14.1767 4.725 14.2517 4.875 14.2517 5.025C14.2517 5.175 14.2517 5.325 14.1017 5.475L8.25165 12.9C8.17665 12.975 8.02665 13.125 7.95165 13.2C7.50165 13.35 7.27665 13.425 6.97665 13.425Z"
                    fill="#66C789"
                  ></path>
                  <path
                    d="M9 18C4.05 18 0 13.95 0 9C0 4.05 4.05 0 9 0C13.95 0 18 4.05 18 9C18 13.95 13.95 18 9 18ZM9 1.125C4.65 1.125 1.125 4.65 1.125 9C1.125 13.35 4.65 16.875 9 16.875C13.35 16.875 16.875 13.35 16.875 9C16.875 4.65 13.35 1.125 9 1.125Z"
                    fill="#66C789"
                  ></path>
                </svg>
                <Text fontSize="xs">{text}</Text>
              </HStack>
            ))}
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }}>
          <Image
            w="40rem"
            h="15rem"
            // minW={{ base: '10rem', md: '30rem' }}
            objectFit="cover"
            src="/imagetwo.jpeg"
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default ExtraInfos;