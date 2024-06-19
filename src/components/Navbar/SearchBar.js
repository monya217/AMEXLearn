import React, { useRef, useState, useEffect } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import useSearchUser from '../../hooks/useSearchUser';
import SuggestedUser from '../GetInTouch/Sidebar/SuggestedUser';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const searchRef = useRef(null);
    const resultsRef = useRef(null);
    const { user, isLoading, getUserProfile, setUser } = useSearchUser();
    const navigate = useNavigate();
    const [showResults, setShowResults] = useState(false);
    const [isFocused, setIsFocused] = useState(false); // Track focus state

    // Close results box when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target) && !searchRef.current.contains(event.target)) {
                setShowResults(false);
                setUser(null); // Clear the search results
                setIsFocused(false); // Remove focus state when clicking outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [resultsRef, setUser]);

    const handleSearchUser = (e) => {
        e.preventDefault();
        getUserProfile(searchRef.current.value);
        setShowResults(true);
    };

    const handleUserClick = (user) => {
        navigate(`/${user.username}`, { state: { user } });
        setShowResults(false);
        setUser(null); // Clear the search results
        setIsFocused(false); // Remove focus state when navigating
    };

    return (
        <Box position="relative" width="100%" maxWidth="300px">
            <form 
                onSubmit={handleSearchUser} 
                className="searchBar" 
                style={{ display: 'flex', alignItems: 'center' }}
            >
                <Input
                    id="searchQueryInput"
                    type="text"
                    placeholder="Search"
                    ref={searchRef}
                    className="searchInput"
                    onFocus={() => setIsFocused(true)} // Set focus state
                    onBlur={() => setIsFocused(false)} // Remove focus state
                    onChange={() => setShowResults(false)} // Hide results when typing
                    style={{ 
                        color: 'black', 
                        caretColor: 'black',
                        height: '2rem', // Adjust the height of the input
                        padding: '0 1rem', // Adjust padding for the input
                        fontSize: '0.875rem', // Adjust the font size
                        border: isFocused ? '1px solid blue' : '1px solid lightgray', // Conditional border color
                        boxShadow: isFocused ? '0 0 5px rgba(0, 0, 255, 0.5)' : 'none' // Conditional box shadow
                    }}
                />
                <Button
                    id="searchQuerySubmit"
                    type="submit"
                    isLoading={isLoading}
                    className="searchButton"
                    style={{ 
                        height: '2rem', // Match the height of the input
                        width: '2rem', // Make the button square
                        minWidth: '2rem', // Ensure the button remains square
                        padding: '0', // Remove extra padding
                        marginLeft: '-2rem', // Overlap the button with the input
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <svg style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24">
                        <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                </Button>
            </form>
            {showResults && user && (
                <Box
                    ref={resultsRef}
                    position="absolute"
                    top="100%"
                    width="100%"
                    maxWidth="300px" // Reduced width for suggested user box
                    bg="white"
                    boxShadow={isFocused ? '0 0 5px rgba(0, 0, 255, 0.5)' : 'md'} // Conditional box shadow
                    borderRadius="md"
                    zIndex="1"
                    p={2}
                    border={isFocused ? '1px solid blue' : '1px solid lightgray'} // Conditional border color
                >
                    <Box onClick={() => handleUserClick(user)} cursor="pointer">
                        <SuggestedUser user={user} setUser={setUser} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default SearchBar;
