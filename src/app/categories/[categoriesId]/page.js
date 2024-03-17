import { getCategoryNews } from '@/utils/getCategoryNews';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async ({ params, searchParams }) => {

    const { data: newses } = await getCategoryNews(searchParams.category)
    console.log(newses);
    return (
        <div>
            <h1 className='mt-7 text-center text-2xl'>Total <strong className='uppercase'>{searchParams.category}</strong> News: {newses.length} </h1>

            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        newses.map(news => (
                            <Grid key={news._id} item xs={6}>
                                <Card className='my-5'>
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            "& img": {
                                                width: "100%",
                                                height: '250px'
                                            }
                                        }}>
                                            <Image src={news.thumbnail_url} width={800} height={500} alt='top-news' ></Image>
                                        </CardMedia>
                                        <CardContent>
                                            <span className='bg-red-500 text-center text-xs text-white rounded p-1  '>{news.category}</span>
                                            <Typography gutterBottom variant="h5" component="div" className='font-semibold my-3'>
                                                {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
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


                                            <Typography className='mt-4' variant="body2" color="text.secondary">
                                                {news.details.length > 200
                                                    ? news.details.slice(0, 200) + "..."
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



        </div>
    );
};

export default DynamicNewsPage;