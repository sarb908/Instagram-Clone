import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  Image,
  Link,
  Center,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaFacebook } from "react-icons/fa";
import instaLogo from "./../Assets/InstaLogo.png";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#fafafa"}>
      <Box bg={"white"} w="400px" boxShadow={"xs"} p={10}>
        <Stack spacing={4}>
          <Center>
            <Image w="175px" h="50px" src={instaLogo} alt="Logo" />
          </Center>
          <Text
            textAlign="center"
            lineHeight="20px"
            weight="600"
            color="#8e8e8e"
            size="17px"
          >
            Sign up to see photos and videos from your friends.
          </Text>
          <Button colorScheme="twitter" leftIcon={<FaFacebook />}>
            Log in With Facebook
          </Button>
          <Flex alignItems="center" gap="10px">
            <Divider />
            <Text
              textAlign="center"
              lineHeight="20px"
              weight="600"
              color="#8e8e8e"
              size="17px"
            >
              OR
            </Text>
            <Divider />
          </Flex>

          <Box>
            <Input
              type="text"
              bg="#fafafa"
              placeholder="Mobile Number or Email"
            />
          </Box>
          <Box>
            <Input type="text" bg="#fafafa" placeholder="Full Name" />
          </Box>

          <FormControl id="email" isRequired>
            <Input type="email" bg="#fafafa" placeholder="Username" />
          </FormControl>
          <FormControl id="password" isRequired>
            <InputGroup>
              <Input
                placeholder="Password"
                bg="#fafafa"
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="md"
              bg={"#1da1f2"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Sign up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Already a user? <Link color={"blue.400"}>Login</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
