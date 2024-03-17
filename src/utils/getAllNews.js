
const getAllNews = async () => {

    const res = await fetch('https://the-dragon-news-server-lyart.vercel.app/all-news',{
        next: {
            revalidate: 30
        }
    })
    return res.json()
};

export default getAllNews;