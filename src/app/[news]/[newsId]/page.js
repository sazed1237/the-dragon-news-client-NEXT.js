import { getSingleNews } from '@/utils/getSingleNews';
import { Avatar, Box, Button, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const NewsDetailsPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.newsId)
    console.log(news)

    return (
        <div>
            <Grid className='mt-7' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                    <CardMedia sx={{
                        "& img": {
                            width: '100%',
                            height: '250'
                        }
                    }}>
                        <Image src={news.thumbnail_url} height={100} width={800} alt='news thumbnail'></Image>
                    </CardMedia>



                    {/* small thumbnail */}
                    <Grid className='my-7' container rowSpacing={1} columnSpacing={{ xs: 2 }}>
                        <Grid item xs={6} >
                            <CardMedia sx={{
                                "& img": {
                                    width: '100%',
                                    height: '100'
                                }
                            }}>
                                <Image src={news.image_url} height={100} width={800} alt='news thumbnail'></Image>
                            </CardMedia>
                        </Grid>

                        <Grid item xs={6}>
                            <CardMedia sx={{
                                "& img": {
                                    width: '100%',
                                    height: '250'
                                }
                            }}>
                                <Image src={news.image_url} height={100} width={800} alt='news thumbnail'></Image>
                            </CardMedia>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={12} sm={6}>
                    <CardContent>
                        <span className='bg-red-500 text-center text-xs text-white rounded p-1  '>{news.category}</span>
                        <Typography gutterBottom variant="h5" component="div" className='font-semibold my-3'>
                            {news.title}
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


                        <Typography
                            style={{
                                textAlign: 'justify',
                                whiteSpace: 'pre-line'
                            }}
                            className='mt-4'
                            variant="body2"
                            color="text.secondary">
                            {news.details}
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
                

        </div>
    );
};

export default NewsDetailsPage;