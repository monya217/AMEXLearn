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
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target) && !searchRef.current.contains(event.target)) {
                setShowResults(false);
                setUser(null);
                setIsFocused(false);
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
        setUser(null);
        setIsFocused(false);
    };

    return (
        <Box  width={['100%', '100%', '100%', '300px']} maxWidth="100%" >
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
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={() => setShowResults(false)}
                    style={{ 
                        color: 'black', 
                        caretColor: 'black',
                        height: '2rem',
                        padding: '0 1rem',
                        fontSize: '0.875rem',
                        boxShadow: isFocused ? '0 0 5px rgba(0, 0, 255, 0.5)' : 'none',
                        width: '100%',
                        borderRadius:'7px',
                        backgroundColor: '#EEF3F9'

                    }}
                />
                <Button
                    id="searchQuerySubmit"
                    type="submit"
                    isLoading={isLoading}
                    className="searchButton"
                    style={{ 
                        height: '2rem',
                        width: '2rem',
                        minWidth: '2rem',
                        padding: '0',
                        marginLeft: '-2rem',
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius:'25px'
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
                    maxWidth="100%"
                    bg="white"
                    boxShadow={'md'}
                    borderRadius="md"
                    zIndex="1"
                    marginTop={0.5}
                    paddingTop={2}
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
