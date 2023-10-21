import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `image-${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("image");

export default upload;
