// Function to get image path based on painting name
export const getImagePath = (paintingName) => {
  try {
    // Remove any special characters and spaces from the painting name
    const sanitizedName = paintingName.replace(/[^a-zA-Z0-9]/g, '');
    
    // Try to import the image
    return require(`../assets/images/${sanitizedName}.jpeg`);
  } catch (error) {
    console.error(`Error loading image for painting: ${paintingName}`, error);
    // Return a default image or null if the image doesn't exist
    return null;
  }
}; 