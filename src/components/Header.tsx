import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

const Header: React.FC = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ padding: '10px' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo - 20% */}
                <Box sx={{ flex: '1 1 0%' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
                        MuseumMate
                    </Typography>
                </Box>

                {/* Navigation - 40% */}
                <Box sx={{ flex: '1 1 40%', display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <Button
                        color="inherit"
                        sx={{
                            color: 'black',
                            textDecoration: 'underline',
                            fontSize: '1.1rem', // Adjust font size
                            fontWeight: 'bold',
                        }}
                    >
                        Explore
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            color: 'black',
                            fontSize: '1.1rem', // Adjust font size
                            fontWeight: 'bold',
                        }}
                    >
                        Saved
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            color: 'black',
                            fontSize: '1.1rem', // Adjust font size
                            fontWeight: 'bold',
                        }}
                    >
                        My Visits
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            color: 'black',
                            fontSize: '1.1rem', // Adjust font size
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
