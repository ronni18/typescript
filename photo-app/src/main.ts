import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";



const user = new User(10, "roni", "carrascal",true);
const picture = new Picture (1, "la maravilla", '12-11-2021',
                             PhotoOrientation.Portrait);
const album = new Album(1, "paisajes");

user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);


//borramos album
user.removeAlbum(album);
console.log('user', user);
