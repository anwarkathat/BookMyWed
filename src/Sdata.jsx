import catering from "../src/images/catering.jpg";
import photo from "../src/images/photographer.jpg";
import decor from "../src/images/decor.jpg";
import makeup from "../src/images/makeup.jpg";
import venues from "../src/images/venues.jpg";
import food  from "../src/images/food.jpg"


//array of objects to fetch the data of card just to be not creating hell by writing code for each card smply writing the code for one card and taking the differnet value from array.
const Sdata = [
    {
        imgsrc: venues,
        title : "Venues",
        content: "Banquet Halls,Lawns/Farmhouses,Small Function Halls,Resorts,Destination Wedding",
    },
    {
        imgsrc: catering,
        title : "Catering",
        content: "Catering Services, RO services,"
    },
    {
        imgsrc: photo,
        title : "Photographer",
        content : "Photographers, Cinema/Video, Pre Wedding Shoot",
    },
    {
        imgsrc: decor,
        title : "Decorators",
        content : "Wedding planners , Decorators",
    },
    {
        imgsrc: makeup,
        title : "Bridal Makeup",
        content: "Bridal Makeup, Family Makeup, Groom Wear, Bridal Wear, Mehndi",
    },
   
    {
        imgsrc: food,
        title : "Food",
        content: "Cake,Chaat & Food stalls, Bartenders, Home catering"
    },

];

export default Sdata;