import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search = ({handleChange,search}) => {
  const navigate = useNavigate();

  return (
    <Box  width="85%" mx="auto">
      <form>
        <Stack >
          <InputGroup width="100%">
            <Input
              type="text"
              value={search}
              placeholder="Search blog"
              onChange={handleChange}
              width="100%"
            />
            <InputRightElement>
              <Button type="submit" colorScheme="teal" variant="outline">
                <SearchIcon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </form>
    </Box>
  );
};

export default Search;
