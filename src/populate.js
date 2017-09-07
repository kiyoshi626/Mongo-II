const fs = require('fs');
const Posts = require('./post');

let savedPosts = null;

const readPosts = () => {
  // cache posts after reading them once
  if (!savedPosts) {
    const contents = fs.readFileSync('posts.json', 'utf8');
    savedPosts = JSON.parse(contents);
  }
  return savedPosts;
};

const populatePosts = () => {
// TODO: implement this
  const allPosts = readPosts();
  const promises = allPosts.map(p => new Posts(p).save());
  return Promise.all(promises);
};

//   const populate = () => {
//     const allPosts = readPosts();
//     const promises = allPosts.map(p => new Posts(p).save());
//     return Promise.all(promises);
//   };
//   populate();
//   return populatePosts()
//   .then(() => {
//     console.log('done');
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//     throw new Error(err);
//   });
// };
populatePosts();

module.exports = { readPosts, populatePosts };
