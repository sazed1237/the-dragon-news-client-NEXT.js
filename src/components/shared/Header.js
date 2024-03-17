import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { displayCurrentDate } from '../../utils/getCurrentDate';


import dragonNews from '@/assets/The Dragon News.png';

const Header = () => {

    const currentDate = displayCurrentDate()

    return (
        <Box className="w-full py-3" textAlign="center" >
            <Container>
                <Image
                    src={dragonNews}
                    width={500}
                    height={500}
                    className='mx-auto py-2'
                    alt='logo'
                ></Image>

                <Typography variant='subtitle2' color="gray" >
                    Journalism Without Fear or Favour
                </Typography>

                <Typography variant='subtitle2' color="gray" >
                    {currentDate}
                </Typography>

            </Container>
        </Box>
    );
};

export default Header;