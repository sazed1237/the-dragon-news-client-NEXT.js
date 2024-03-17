import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

const Footer = () => {


    const navItems = [
        {
            route: 'Home',
            pathname: '/'
        },
        {
            route: 'Pages',
            pathname: '/pages'
        },
        {
            route: 'Category',
            pathname: '/categories/news?category=all news'
        },
        {
            route: 'About us',
            pathname: '/about'
        },
        {
            route: 'Contact',
            pathname: '/contact'
        },
    ];

    return (
        <Box className='bg-black text-center py-10'>
            <Container>
                <Box sx={{
                    flexGrow: 0,
                    "& svg": {
                        color: 'white',
                    },
                }}>

                    <IconButton>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton>
                        <TwitterIcon></TwitterIcon>
                    </IconButton>
                    <IconButton>
                        <InstagramIcon></InstagramIcon>
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon></YouTubeIcon>
                    </IconButton>

                </Box>

                <Box className="w-full text-center py-6" >
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={item.pathname}
                            sx={{ my: 2, color: 'white', }}
                            className='text-center'

                        >
                            <Button className='text-white' >
                                {item.route}
                            </Button>
                        </Link>

                    ))}
                </Box>
                <Typography variant='subtitle2' color="gray" >
                    @2024 The Dragon News | Design by SazeD Creations
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;