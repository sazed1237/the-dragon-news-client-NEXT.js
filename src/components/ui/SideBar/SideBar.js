import { Avatar, Box, CardHeader, IconButton } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import sideTop from '../../../assets/side-top-news.png';
import sideBottom from '../../../assets/side-bottom-img.png';
import sideBlank from '../../../assets/blankImage.png';


import Image from 'next/image';
import getAllNews from '@/utils/getAllNews';
import getAllCategories from '@/utils/getAllCategories';
import Link from 'next/link';

const SideBar = async () => {

    const { data: newses } = await getAllNews()
    const { data: categories } = await getAllCategories()

    return (
        <Box>
            <Card className='my-10'>
                <CardActionArea>
                    <CardMedia>
                        <Image src={newses[1].thumbnail_url} width={800} height={300} alt='top-news' ></Image>
                    </CardMedia>
                    <CardContent>
                        <span className='bg-red-500 text-center text-white rounded p-1  '>{newses[1].category}</span>
                        <Typography gutterBottom variant="h5" component="div" className='font-semibold my-3'>
                            {newses[1].title.length > 30
                                ? newses[1].title.slice(0, 30) + '...'
                                : newses[1].title}
                        </Typography>
                        {/* author */}
                        <CardHeader
                            className='m-0 p-0'
                            avatar={
                                <Avatar aria-label="recipe">
                                    <Image src={newses[1].author.img} height={100} width={100} alt='author img'></Image>
                                </Avatar>
                            }

                            title={newses[1].author.name}
                            subheader={newses[1].author.published_date}
                        >
                        </CardHeader>
                        <Typography variant="body2" color="text.secondary">
                            {newses[1].details.length > 200
                                ? newses[1].details.slice(0, 200) + '...'
                                : newses[1].details}
                            <Link href={`/${newses[1].category.toLowerCase()}/${newses[1]._id}`} className='text-red-500' >See Details</Link>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


            <Box>
                {
                    categories.map(category => (
                        <Card key={category._id} sx={{ display: 'flex', height: 70, marginTop: '10px' }}>
                            <CardMedia>
                                <Image
                                    src={sideBlank}
                                    width={70}
                                    alt='blank'
                                ></Image>
                            </CardMedia>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="body1">
                                        {category.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Mac Miller
                                    </Typography>
                                </CardContent>

                            </Box>
                        </Card>
                    ))
                }

            </Box>

            <Card className='my-5'>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideBottom} width={800} alt='top-news' ></Image>
                    </CardMedia>

                </CardActionArea>
            </Card>

        </Box>
    );
};

export default SideBar;