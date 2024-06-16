// AddPodcastForm.js
import React, { useState } from "react";
import useAddPodcast from "../../hooks/useAddPodcasts"; // Adjust the import path as necessary
import { Box, Button, Input, Textarea, FormControl, FormLabel, Alert, AlertIcon } from "@chakra-ui/react";

const AddPodcastForm = () => {
  const { addPodcast, loading, error } = useAddPodcast();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);
  const [artist, setArtist] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPodcast = { title, image, description, type, artist };
    await addPodcast(newPodcast, file);
    setTitle("");
    setImage("");
    setDescription("");
    setType("");
    setFile(null);
    setArtist("");
  };

  return (
    <Box maxW="md" mx="auto" mt="6">
      {error && (
        <Alert status="error" mb="4">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl id="title" mb="4" isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="image" mb="4" isRequired>
          <FormLabel>Image URL</FormLabel>
          <Input value={image} onChange={(e) => setImage(e.target.value)} />
        </FormControl>
        <FormControl id="description" mb="4" isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="type" mb="4" isRequired>
          <FormLabel>Type</FormLabel>
          <Input value={type} onChange={(e) => setType(e.target.value)} />
        </FormControl>
        <FormControl id="file" mb="4" isRequired>
          <FormLabel>Podcast File</FormLabel>
          <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </FormControl>
        <FormControl id="artist" mb="4" isRequired>
          <FormLabel>Artist</FormLabel>
          <Input value={artist} onChange={(e) => setArtist(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" isLoading={loading}>
          Add Podcast
        </Button>
      </form>
    </Box>
  );
};

export default AddPodcastForm;