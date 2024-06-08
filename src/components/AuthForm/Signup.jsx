import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement, Alert, AlertIcon } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword';
import useAuthStore from '../../store/authStore';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup: signupUser } = useSignUpWithEmailAndPassword();
  const { login } = useAuthStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    const user = await signupUser(inputs);
    if (user) {
      login(user); // Update auth state
    }
  };

  return (
    <>
      <Input
        name="email"
        placeholder="Email"
        fontSize={14}
        type="email"
        value={inputs.email}
        size={"sm"}
        onChange={handleInputChange}
      />
      <Input
        name="username"
        placeholder="Username"
        fontSize={14}
        type="text"
        value={inputs.username}
        size={"sm"}
        onChange={handleInputChange}
      />
      <Input
        name="fullName"
        placeholder="Full Name"
        fontSize={14}
        type="text"
        value={inputs.fullName}
        size={"sm"}
        onChange={handleInputChange}
      />
      <InputGroup>
        <Input
          name="password"
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          size={"sm"}
          onChange={handleInputChange}
        />
        <InputRightElement h="full">
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message || "An error occurred"}
        </Alert>
      )}

      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={handleSignup}
      >
        Sign up
      </Button>
    </>
  );
};

export default Signup;