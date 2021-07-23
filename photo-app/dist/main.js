"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const photo_orientation_1 = require("./photo-orientation");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(10, "roni", "carrascal", true);
const picture = new picture_1.Picture(1, "la maravilla", '12-11-2021', photo_orientation_1.PhotoOrientation.Portrait);
const album = new album_1.Album(1, "paisajes");
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
//borramos album
user.removeAlbum(album);
console.log('user', user);
