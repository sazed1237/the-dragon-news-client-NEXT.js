
const getAllCategories = async () => {

    const res = await fetch('https://the-dragon-news-server-lyart.vercel.app/categories')

    return res.json()
};

export default getAllCategories;