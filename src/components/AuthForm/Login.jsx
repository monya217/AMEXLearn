import { Button, Input, Alert, AlertIcon } from '@chakra-ui/react';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';
import useAuthStore from '../../store/authStore';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { loading, error, login: loginUser } = useLogin();
  const { login } = useAuthStore();

  const handleLogin = async () => {
    const user = await loginUser(inputs);
    if (user) {
      login(user); // Update auth state
    }
  };

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({...inputs, email: e.target.value})}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        size={"sm"}
        value={inputs.password}
        onChange={(e) => setInputs({...inputs, password: e.target.value})}
      />

      {error && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message || "An error occurred"}
        </Alert>
      )}

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} isLoading={loading} onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};

export default Login;