"use strict";
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ",\n                 date: " + picture.date + ",\n                orientation: " + picture.orientation + "]");
}
var myPic = {
    id: 1,
    title: 'test title',
    date: '2020-07-16',
    orientation: PhotoOrientation.Landscape,
    status: '200 ok'
};
showPicture(myPic);
