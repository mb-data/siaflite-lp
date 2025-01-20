'use client'

import { Stack, HStack, Link, Divider, Image, IconButton, LinkProps, Box } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const links = ['Lorem', 'Lorem', 'Lorem'];
const accounts = [
  {
    url: 'https://github.com/MA-Ahmad/templateskart',
    label: 'Github Account',
    type: 'gray',
    icon: <FaGithub />
  },
  {
    url: 'https://twitter.com/muhammad_ahmaad',
    label: 'Twitter Account',
    type: 'twitter',
    icon: <FaTwitter />
  },
  {
    url: 'https://linkedin.com/in/muhammad-ahmad20',
    label: 'LinkedIn Account',
    type: 'linkedin',
    icon: <FaLinkedin />
  }
];

const Footer = () => {
  return (
    <Box bg={"#2196f3"} p={"3rem 5rem"} boxShadow="md">
      <Stack
        maxW="5xl"
        marginInline="auto"
        p={8}
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
      >
        <Link href="https://templateskart.com" isExternal>
          <Image w="100px" src="/logo.jpeg" alt="TemplatesKart" />
        </Link>

        {/* Desktop Screen */}
        <HStack spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }} color="#2196f3">
          {links.map((link, index) => (
            <CustomLink key={index}>{link}</CustomLink>
          ))}
        </HStack>

        <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
          {accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              rounded="md"
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;