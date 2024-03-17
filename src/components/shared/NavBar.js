
"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import logo from '@/assets/logo (1).png';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';




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

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };




    return (
        <AppBar position="static" className='bg-black '>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                        }}
                    >

                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt='logo'
                        ></Image>

                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navItems.map((item) => (
                                <Link key={item} href={item.pathname}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <button textAlign="center text-white">{item.route}</button>
                                    </MenuItem >
                                </Link>
                            ))}
                        </Menu>
                    </Box>


                    <Typography
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                        }}
                    >
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt='logo'
                        ></Image>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={item.pathname}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}

                            >
                                <Button className='text-white'>
                                    {item.route}
                                </Button>
                            </Link>

                        ))}
                    </Box>

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

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;