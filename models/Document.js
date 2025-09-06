// const mongoose = require('mongoose');

// const documentSchema = new mongoose.Schema({
//   fileName: String,
//   rawJson: Object,        // raw Azure response
//   cleanedJson: Object,    // cleaned extracted fields
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Document', documentSchema);



const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    rawJson: { type: Object },
    cleanedJson: { type: Object },
    pdfBase64: { type: String }, // ✅ store base64 string
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema);
