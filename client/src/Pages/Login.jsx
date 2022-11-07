import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  Image,
  Link,
  Center,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaFacebook } from "react-icons/fa";
import instaLogo from "./../Assets/InstaLogo.png";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginHandler } from "../Redux/AuthReducer/actions";
import * as types from "./../Redux/AuthReducer/actionTypes";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = () => {
    console.log(data);
    if (!data.password || !data.email) {
      toast({
        title: "Invlid Creds",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    dispatch(loginHandler(data)).then((r) => {
      if (r.type == types.SIGNIN_USER_SUCCESS) {
        toast({
          title: "Login Successful",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/");
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

          <Box>
            <Input
              type="text"
              bg="#fafafa"
              name="email"
              value={data.email}
              onChange={changeHandler}
              placeholder="Mobile Number or Email"
            />
          </Box>

          <FormControl id="password" isRequired>
            <InputGroup>
              <Input
                placeholder="Password"
                bg="#fafafa"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                value={data.password}
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
              onClick={submitHandler}
              bg={"#1da1f2"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Log In
            </Button>
          </Stack>
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
          <Button
            colorScheme="twitter"
            variant={"ghost"}
            leftIcon={<FaFacebook />}
            _hover={{
              bg: "white",
            }}
          >
            Log in With Facebook
          </Button>
          <Stack pt={6}>
            <Text align={"center"} onClick={() => navigate("/signUp")}>
              Don't have an account? <Link color={"blue.400"}>Sign up</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Login;
