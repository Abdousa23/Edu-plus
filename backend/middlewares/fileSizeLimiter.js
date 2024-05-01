// const MB = 5


const fileSizeLimiter = (MB) => {
    return (req, res, next) => {
    const FILE_SIZE_LIMIT = MB * 1024 * 1024
      const files = req.files || req.file;
      if (!files) {
        next();
      } else {
        const filesOverLimit = [];
        Object.keys(files).forEach(key => {
          if (files[key].size > FILE_SIZE_LIMIT) filesOverLimit.push(files[key].name);
        });
  
        if (filesOverLimit.length) {
          const properVerb = filesOverLimit.length > 1 ? "are" : "is";
          const sentence = `Upload failed: ${filesOverLimit.toString()} ${properVerb} over the size limit of ${MB} MB`;
          return res.status(413).json({ "status": "error", "message": sentence });
        }
  
        next();
      }
    };
  };
  

module.exports = fileSizeLimiter