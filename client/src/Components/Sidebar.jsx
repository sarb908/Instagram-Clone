import React, { ReactNode } from "react";
import AddPostModal from "./../Components/AddPostModal";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
  FlexProps,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { ReactText } from "react";
import instalogo from "./../Assets/InstaLogo.png";
import { CgAddR } from "react-icons/cg";
const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Create", icon: CgAddR },
  { name: "Search", icon: BiSearchAlt2 },
  { name: "Explore", icon: FiCompass },
  { name: "Messages", icon: RiMessengerLine },
  { name: "Notifications", icon: AiOutlineHeart },
];

export default function Sidebar({ children }) {
  return (
    <>
      {" "}
      <Box minH="100vh" bg={"white"}>
        <SidebarContent display={{ base: "none", md: "block" }} />
        <Drawer autoFocus={false} placement="left" size="full">
          <DrawerContent>
            <SidebarContent />
          </DrawerContent>
        </Drawer>

        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
    </>
  );
}

const SidebarContent = ({ ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("white", "white")}
      borderRight="1px"
      s
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" mx="2" justifyContent={"left"} alignItems="center">
        <Image objectFit="cover" src={instalogo} alt="instalogo" />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) =>
        link.name == "Create" ? (
          <NavItem key={link.name} onClick={onOpen} icon={link.icon}>
            {link.name}
          </NavItem>
        ) : (
          <NavItem key={link.name} onClick={onOpen} icon={link.icon}>
            {link.name}
          </NavItem>
        )
      )}
      <Flex
        align="center"
        p="5"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#fafafa",
        }}
        mb="auto"
      >
        {<Icon mr="4" w={7} h={7} fontSize="13" as={AiOutlineMenu} />}
        More
      </Flex>
      <AddPostModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="5"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#fafafa",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" w={7} h={7} fontSize="13" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};
