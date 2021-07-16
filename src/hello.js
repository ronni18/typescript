var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: "soccer",
    descripcion: "este es el meor deporte del mundo !!"
};
var picture = {
    id: 3,
    title: "el mundial de clubs",
    orientation: PhotoOrientation.Landscape
};
var newPicture = {};
newPicture.id = 2;
newPicture.title = "las fantasias";
newPicture.orientation = PhotoOrientation.Landscape;
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
/* function showPicture(picture: Picture) {
    console.log(`
                 id: ${picture.id}
                 title: ${picture.title},
                 date: ${picture.date},
                 orientation: ${picture.orientation}`);
    
}

let myPic = {
    id: 1,
    title: 'test title',
    date: '2020-07-16',
    orientation: PhotoOrientation.Landscape,
  
};
showPicture(myPic); */
/* interface pictureConfig {
   readonly title?: string;
    date?: string;
    orientation?:PhotoOrientation;
}


function generatePicture(config:pictureConfig) {

    const pic = {title: 'default', date:'2020-07-15'};
    if (config.title) {
        pic.title = config.title;
        
    }if (config.date) {
        pic.date = config.date;
        
    }

    return pic;
    
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({title: ' hola mundo', date:'2020-11-18'});
console.log('picture', picture);


interface User {
   readonly id:number;
    userName:string;
    isPro:boolean;

}
 let user: User;
 user = {id: 10, userName:"roni carrascal", isPro: true};
 console.log('user', user);
 user.userName = "goel carrascal";
//user.id = 101;
 console.log('user', user);
 */
