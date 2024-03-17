import getAllCategories from '@/utils/getAllCategories';
import { Box, Button, Divider, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {
    const { data: categories } = await getAllCategories()
    console.log(categories)
    return (
        <Box className="bg-gray-100 mt-14 px-3 md:px-10 py-5" >
            <h1 className='text-xl font-semibold'>Categories</h1>
            <Divider></Divider>


            <Stack sx={{ mt: 2.5 }}>
                {
                    categories.map(category => <Button
                        key={category._id}
                        variant='outlined'
                        sx={{ mt: 1 }}
                    >
                        <Link href={`news?category=${category.title.toLowerCase()}`}>
                            {category.title}
                        </Link>
                    </Button>)
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;