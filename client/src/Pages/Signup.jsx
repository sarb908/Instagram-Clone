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
import { useDispatch } from "react-redux";
import { signupHandler } from "../Redux/AuthReducer/actions";
import { useToast } from "@chakra-ui/react";
import * as types from "./../Redux/AuthReducer/actionTypes";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ name: "", password: "", email: "" });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = () => {
    if (!data.name || !data.password || !data.email) {
      toast({
        title: "Invlid Creds",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    dispatch(signupHandler(data)).then((r) => {
      if (r.type == types.SIGNUP_SUCCESS) {
        toast({
          title: "Account created.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };
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
              name="email"
              value={data.email}
              onChange={changeHandler}
            />
          </Box>
          <Box>
            <Input
              type="text"
              bg="#fafafa"
              placeholder="Full Name"
              name="name"
              value={data.name}
              onChange={changeHandler}
            />
          </Box>

          <FormControl id="email" isRequired>
            <Input type="email" bg="#fafafa" placeholder="Username" />
          </FormControl>
          <FormControl id="password" isRequired>
            <InputGroup>
              <Input
                name="password"
                value={data.password}
                onChange={changeHandler}
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
              onClick={submitHandler}
            >
              Sign up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"} onClick={() => navigate("/login")}>
              Already a user? <Link color={"blue.400"}>Login</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
