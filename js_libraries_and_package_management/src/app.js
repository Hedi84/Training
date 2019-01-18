const sharp = require('sharp');
var readlineSync = require('readline-sync');

var filePath = readlineSync.question('May I have the path of your image file? ');
var fileName = readlineSync.question('What shall we call the outputted file? (just the name no file extension) ');
// var outputHeight = readlineSync.question('What height would you like for your circular image? (must be less than image height that you are using)) ');
// var outputWidth = readlineSync.question('What width would you like for your circular image? (must be less than image height that you are using)) ');
const roundedCorners = Buffer.from(
  '<svg><rect x="0" y="0" width="1000" height="1000" rx="500" ry="500"/></svg>'
);
// /Users/mitesh/Desktop/Projects/jslibraries/images/image2.png

sharp(filePath)
  .overlayWith(roundedCorners, { cutout: true })
  .toFile(fileName + '.jpg', function(err){
    console.log(err)
  });
