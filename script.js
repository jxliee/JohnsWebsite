// Sample photo data (you can replace it with your own data)
const photos = [
    { src: 'Images/archi.jpg', orientation: 'portrait' },
    { src: 'Images/bird.jpg', orientation: 'portrait' },
    { src: 'Images/halifax.jpg', orientation: 'landscape' },
    { src: 'Images/street.jpg', orientation: 'portrait' },
    // Add more photos as needed by copying the above lines and changing the src and orientation values accordingly
  ];
  
  // Function to create a gallery item with the photo
  function createGalleryItem(photo) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const img = document.createElement('img');
    img.src = photo.src;
    item.appendChild(img);
    return item;
  }
  
  // Function to calculate the appropriate flex-basis for gallery items
  function calculateFlexBasis(orientation) {
    const containerWidth = document.getElementById('gallery').clientWidth;
    const numItems = Math.floor(containerWidth / 320); 
    const spacing = (containerWidth - numItems * 320) / (2 * numItems); //maffs
    const landscapeFlexBasis = `calc(${200 / numItems}% - ${2 * spacing}px)`;
    const portraitFlexBasis = `calc(2 * ${100 / numItems}% - ${4 * spacing}px)`;
    return orientation === 'landscape' ? landscapeFlexBasis : portraitFlexBasis;
  }
  
  // Function to create the gallery
  function createGallery() {
    const gallery = document.getElementById('gallery'); // Get the gallery element
    gallery.innerHTML = ''; // Clear the gallery element
  
    photos.forEach((photo) => { // For each photo object in photos, call the createGalleryItem function and append the returned item to the gallery, this will create the gallery
      const item = createGalleryItem(photo);
      item.style.flexBasis = calculateFlexBasis(photo.orientation); // this will set the flex-basis for the gallery item based on the orientation of the photo
      gallery.appendChild(item);
    });
  }
  
  // Call the createGallery function when the page loads, we will create media queries later to call this function again when the page is resized
  window.addEventListener('DOMContentLoaded', createGallery);
  