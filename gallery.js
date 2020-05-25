function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }

  // select the elements we need
  const images = Array.from(gallery.querySelector('img'));
  console.log(images);
}

// Use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
