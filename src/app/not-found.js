import Image from "next/image";
import notFound from '../assets/404.png';
import { CardMedia } from "@mui/material";

const NotFound = () => {
    return (
        <div>
            <CardMedia sx={{
                "& img": {
                    width: '100%',
                    height: '100%',
                }
            }}>
                <Image src={notFound} width={500} height={100} alt="not Found"></Image>
            </CardMedia>
        </div>
    );
};

export default NotFound;