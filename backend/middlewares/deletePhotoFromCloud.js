const cloudinary = require('cloudinary').v2;
    const deletePhoto = async (publicId) => {
    try {
        // Delete the photo by its public ID
        const result = await cloudinary.uploader.destroy(publicId);
        console.log(`Deleted photo with public ID: ${publicId}`);
        console.log(result);
    } catch (error) {
        console.error(`Error deleting photo: ${error.message}`);
    }
    };

module.exports = deletePhoto;