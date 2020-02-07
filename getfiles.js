/*
 * Iterate through a directory, get all files.
 * push to a new array ammended with the path.
 */
const fs = require('fs');
const util = require('util');
const folder = 'assets/images/gallery images';

const readdir = util.promisify(fs.readdir);

module.exports = async () => {
  let images = await readdir(folder);
  let gallery = [];

  images.forEach(image => {
    gallery.push(`/${folder}/${image}`);
  })

  return gallery;
}
