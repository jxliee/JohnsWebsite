// Sample photo data (you can replace it with your own data)
const photos = [
    { src: 'Images/archi.jpg', orientation: 'portrait' },
    { src: 'Images/bird.jpg', orientation: 'portrait' },
    { src: 'Images/halifax.jpg', orientation: 'landscape' },
    { src: 'Images/street.jpg', orientation: 'portrait' },
    // Add more photos as needed
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
    const numItems = Math.floor(containerWidth / 320); // Adjust 320 to your desired width
    const spacing = (containerWidth - numItems * 320) / (2 * numItems);
    const landscapeFlexBasis = `calc(${100 / numItems}% - ${2 * spacing}px)`;
    const portraitFlexBasis = `calc(2 * ${100 / numItems}% - ${4 * spacing}px)`;
    return orientation === 'landscape' ? landscapeFlexBasis : portraitFlexBasis;
  }
  
  // Function to create the gallery
  function createGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  
    photos.forEach((photo) => {
      const item = createGalleryItem(photo);
      item.style.flexBasis = calculateFlexBasis(photo.orientation);
      gallery.appendChild(item);
    });
  }
  
  // Call the createGallery function when the page loads or whenever the window is resized
  window.addEventListener('DOMContentLoaded', createGallery);
  window.addEventListener('resize', createGallery);
  