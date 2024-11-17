import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { ScreenPath } from '../../navigation';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '5px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo - 20% */}
                <Box
                    sx={{ flex: '1 1 0%', cursor: 'pointer' }}
                    onClick={() => navigate(ScreenPath.HOME)} // Navigate to Home Screen
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'bold',
                            color: 'black',
                            userSelect: 'none', // Disable text selection
                        }}
                    >
                        MuseumMate
                    </Typography>
                </Box>

                {/* Navigation - 40% */}
                <Box sx={{ flex: '1 1 40%', display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <Button
                        onClick={() => navigate(ScreenPath.EXPLORE)}
                        color="inherit"
                        sx={{
                            color: 'black',
                            textDecoration: currentPath === ScreenPath.EXPLORE ? 'underline' : 'none',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Explore
                    </Button>
                    <Button
                        onClick={() => navigate(ScreenPath.SAVED)}
                        color="inherit"
                        sx={{
                            color: 'black',
                            textDecoration: currentPath === ScreenPath.SAVED ? 'underline' : 'none',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Saved
                    </Button>
                    <Button
                        onClick={() => navigate(ScreenPath.VISITS)}
                        color="inherit"
                        sx={{
                            color: 'black',
                            textDecoration: currentPath === ScreenPath.VISITS ? 'underline' : 'none',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                        }}
                    >
                        My Visits
                    </Button>
                    <Button
                        onClick={() => navigate(ScreenPath.ACCOUNT)}
                        color="inherit"
                        sx={{
                            color: 'black',
                            textDecoration: currentPath === ScreenPath.ACCOUNT ? 'underline' : 'none',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Account
                    </Button>
                </Box>

                {/* Search Bar - 40% */}
                <Box
                    sx={{
                        flex: '1 1 40%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '0 10px',
                    }}
                >
                    <SearchIcon sx={{ color: '#666' }} />
                    <InputBase placeholder="Search" sx={{ marginLeft: 1, width: '100%' }} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

