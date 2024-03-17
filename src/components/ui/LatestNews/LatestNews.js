import { Avatar, Box, Button, CardHeader, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import topNews from '../../../assets/top-news.png';
import topNews2 from '../../../assets/top-news2.png';
import Image from 'next/image';
import getAllNews from '@/utils/getAllNews';
import Link from 'next/link';


const LatestNews = async () => {
    const { data: newses } = await getAllNews()
    console.log(newses)

    return (
        <Box>
            {/* TOP NEWS */}
            <Card className='my-10'>
                <CardActionArea>
                    <CardMedia sx={{
                        "& img": {
                            width: '100%',
                            height: '50%'
                        }
                    }}>
                        <Image src={newses[0].thumbnail_url} width={800} height={500} alt='top-news' ></Image>
                    </CardMedia>
                    <CardContent>
                        <span className='bg-red-500 text-center text-white rounded p-1  '>{newses[0].category}</span>
                        <Typography gutterBottom variant="h5" component="div" className='font-semibold my-3'>
                            {newses[0].title}
                        </Typography>
                        {/* author */}
                        <CardHeader
                            className='m-0 p-0'
                            avatar={
                                <Avatar aria-label="recipe">
                                    <Image src={newses[0].author.img} height={100} width={100} alt='author img'></Image>
                                </Avatar>
                            }

                            title={newses[0].author.name}
                            subheader={newses[0].author.published_date}
                        >
                        </CardHeader>
                        <Typography variant="body2" color="text.secondary">
                            {newses[0].details.length > 200
                                ? newses[0].details.slice(0, 200) + '...'
                                : newses[0].details}
                            <Link href={`/${newses[0].category.toLowerCase()}/${newses[0]._id}`} className='text-red-500' >See Details</Link>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>

                    {
                        newses.slice(2, 6).map(news => (
                            <Grid key={news._id} item xs={6} md={6}>
                                <Card className='my-10'>
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            "& img": {
                                                width: '100%',
                                                height: '250px'
                                            }
                                        }}>
                                            <Image src={news.thumbnail_url} height={250} width={800} alt='top-news' ></Image>
                                        </CardMedia>

                                        <CardContent>
                                            <span className='bg-red-500 text-center text-white rounded p-1  '>{news.category}</span>
                                            <Typography gutterBottom variant="h5" component="div" className='font-semibold my-3'>
                                                {news.title.length > 30
                                                    ? news.title.slice(0, 30) + '...'
                                                    : news.title}
                                            </Typography>
                                            {/* author */}
                                            <CardHeader
                                                className='m-0 p-0'
                                                avatar={
                                                    <Avatar aria-label="recipe">
                                                        <Image src={news.author.img} height={100} width={100} alt='author img'></Image>
                                                    </Avatar>
                                                }

                                                title={news.author.name}
                                                subheader={news.author.published_date}
                                            >
                                            </CardHeader>
                                            <Typography variant="body2" color="text.secondary">
                                                {news.details.length > 200
                                                    ? news.details.slice(0, 200) + '...'
                                                    : news.details}
                                                <Link href={`/${news.category.toLowerCase()}/${news._id}`} className='text-red-500' >See Details</Link>
                                            </Typography>
                                        </CardContent>

                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    }

                </Grid>
            </Box>

            <Box className="my-5" textAlign="center">
                <Link href={'/categories/news?category=all news'}><Button variant='outlined'>More News</Button></Link>
            </Box>

        </Box>
    );
};

export default LatestNews;