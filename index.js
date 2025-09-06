// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const { mongoUri } = require('./config');
// const { analyzeDocument } = require('./services/azureService');
// const { extractCleanedData } = require('./services/jsonExtractor');
// const Document = require('./models/Document');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(express.json());

// // Connect MongoDB
// mongoose.connect(mongoUri)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('❌ MongoDB error:', err));

// // Upload PDF & analyze
// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const filePath = req.file.path;
//     const rawResult = await analyzeDocument(filePath);
//     const cleanedResult = extractCleanedData(rawResult);

//     const doc = new Document({
//       fileName: req.file.originalname,
//       rawJson: rawResult,
//       cleanedJson: cleanedResult,
//     });

//     await doc.save();
//     res.json({
//       message: 'File processed successfully',
//       data: {
//         id: doc._id,
//         fileName: doc.fileName,
//         cleanedJson: doc.cleanedJson,
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Fetch all extracted docs (file info + cleaned only)
// app.get('/documents', async (req, res) => {
//   const docs = await Document.find().select('fileName cleanedJson createdAt');
//   res.json(docs);
// });

// // Fetch full (raw + cleaned) by ID
// app.get('/documents/:id', async (req, res) => {
//   const doc = await Document.findById(req.params.id);
//   if (!doc) return res.status(404).json({ error: 'Not found' });
//   res.json(doc);
// });

// // 🔹 NEW: frontend-friendly endpoint (just cleaned JSON for all docs)
// app.get('/documents/cleaned', async (req, res) => {
//   const docs = await Document.find().select('cleanedJson -_id');
//   const cleanedOnly = docs.map(d => d.cleanedJson);
//   res.json(cleanedOnly);
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));













// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const { mongoUri } = require('./config');
// const { analyzeDocument } = require('./services/azureService');
// const { extractCleanedData } = require('./services/jsonExtractor');
// const Document = require('./models/Document');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(express.json());

// // Connect MongoDB
// mongoose.connect(mongoUri)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('❌ MongoDB error:', err));

// // Upload PDF & analyze
// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const filePath = req.file.path;
//     const rawResult = await analyzeDocument(filePath);
//     const cleanedResult = extractCleanedData(rawResult);

//     const doc = new Document({
//       fileName: req.file.originalname,
//       rawJson: rawResult,
//       cleanedJson: cleanedResult,
//     });

//     await doc.save();
//     res.json({
//       message: 'File processed successfully',
//       data: {
//         id: doc._id,
//         fileName: doc.fileName,
//         cleanedJson: doc.cleanedJson,
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ frontend-friendly endpoint (just cleaned JSON for all docs)
// app.get('/documents/cleaned', async (req, res) => {
//   const docs = await Document.find().select('cleanedJson -_id');
//   const cleanedOnly = docs.map(d => d.cleanedJson);
//   res.json(cleanedOnly);
// });

// // Fetch all extracted docs (file info + cleaned only)
// app.get('/documents', async (req, res) => {
//   const docs = await Document.find().select('fileName cleanedJson createdAt');
//   res.json(docs);
// });

// // Fetch full (raw + cleaned) by ID
// app.get('/documents/:id', async (req, res) => {
//   const doc = await Document.findById(req.params.id);
//   if (!doc) return res.status(404).json({ error: 'Not found' });
//   res.json(doc);
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));













// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const cors = require('cors');  // ⬅️ add this
// const { mongoUri } = require('./config');
// const { analyzeDocument } = require('./services/azureService');
// const { extractCleanedData } = require('./services/jsonExtractor');
// const Document = require('./models/Document');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(express.json());

// // ✅ Enable CORS for frontend (Vite on :5173)
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// // Connect MongoDB
// mongoose.connect(mongoUri)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch(err => console.error('❌ MongoDB error:', err));

// // Upload PDF & analyze
// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const filePath = req.file.path;
//     const rawResult = await analyzeDocument(filePath);
//     const cleanedResult = extractCleanedData(rawResult);

//     const doc = new Document({
//       fileName: req.file.originalname,
//       rawJson: rawResult,
//       cleanedJson: cleanedResult,
//     });

//     await doc.save();
//     res.json({
//       message: 'File processed successfully',
//       data: {
//         id: doc._id,
//         fileName: doc.fileName,
//         cleanedJson: doc.cleanedJson,
//       }
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ frontend-friendly endpoint (just cleaned JSON for all docs)
// app.get('/documents/cleaned', async (req, res) => {
//   const docs = await Document.find().select('cleanedJson -_id');
//   const cleanedOnly = docs.map(d => d.cleanedJson);
//   res.json(cleanedOnly);
// });

// // Fetch all extracted docs (file info + cleaned only)
// app.get('/documents', async (req, res) => {
//   const docs = await Document.find().select('fileName cleanedJson createdAt');
//   res.json(docs);
// });

// // Fetch full (raw + cleaned) by ID
// app.get('/documents/:id', async (req, res) => {
//   const doc = await Document.findById(req.params.id);
//   if (!doc) return res.status(404).json({ error: 'Not found' });
//   res.json(doc);
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
















// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const { mongoUri } = require('./config');
// const { analyzeDocument } = require('./services/azureService');
// const { extractCleanedData } = require('./services/jsonExtractor');
// const Document = require('./models/Document');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(express.json());

// // ✅ Enable CORS for frontend (Vite on :5173)
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

// // ✅ Serve uploaded PDFs statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Connect MongoDB
// mongoose
//   .connect(mongoUri)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.error('❌ MongoDB error:', err));

// // Upload PDF & analyze
// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const filePath = req.file.path;
//     const rawResult = await analyzeDocument(filePath);
//     const cleanedResult = extractCleanedData(rawResult);

//     const doc = new Document({
//       fileName: req.file.originalname,
//       rawJson: rawResult,
//       cleanedJson: cleanedResult,
//     });

//     await doc.save();

//     // ✅ Rename uploaded file to <docId>.pdf
//     const newFilePath = path.join(__dirname, 'uploads', `${doc._id}.pdf`);
//     fs.renameSync(filePath, newFilePath);

//     res.json({
//       message: 'File processed successfully',
//       data: {
//         id: doc._id,
//         fileName: doc.fileName,
//         cleanedJson: doc.cleanedJson,
//         pdfUrl: `http://localhost:5000/uploads/${doc._id}.pdf`,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ frontend-friendly endpoint (just cleaned JSON for all docs)
// app.get('/documents/cleaned', async (req, res) => {
//   const docs = await Document.find().select('cleanedJson -_id');
//   const cleanedOnly = docs.map((d) => d.cleanedJson);
//   res.json(cleanedOnly);
// });

// // Fetch all extracted docs (file info + cleaned only)
// app.get('/documents', async (req, res) => {
//   const docs = await Document.find().select('fileName createdAt');
//   const result = docs.map((d) => ({
//     id: d._id,
//     fileName: d.fileName,
//     createdAt: d.createdAt,
//     pdfUrl: `http://localhost:5000/uploads/${d._id}.pdf`,
//   }));
//   res.json(result);
// });

// // Fetch full (raw + cleaned) by ID
// app.get('/documents/:id', async (req, res) => {
//   const doc = await Document.findById(req.params.id);
//   if (!doc) return res.status(404).json({ error: 'Not found' });

//   res.json({
//     id: doc._id,
//     fileName: doc.fileName,
//     cleanedJson: doc.cleanedJson,
//     rawJson: doc.rawJson,
//     pdfUrl: `http://localhost:5000/uploads/${doc._id}.pdf`,
//   });
// });

// const PORT = 5000;
// app.listen(PORT, () =>
//   console.log(`🚀 Server running on http://localhost:${PORT}`)
// );



















// const express = require('express');
// const multer = require('multer');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const fs = require('fs');
// const path = require('path');
// const { mongoUri } = require('./config');
// const { analyzeDocument } = require('./services/azureService');
// const { extractCleanedData } = require('./services/jsonExtractor');
// const Document = require('./models/Document');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(express.json());

// // ✅ Enable CORS for frontend (Vite on :5173)
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

// // Connect MongoDB
// mongoose
//   .connect(mongoUri)
//   .then(() => console.log('✅ MongoDB connected'))
//   .catch((err) => console.error('❌ MongoDB error:', err));

// // Upload PDF & analyze
// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const filePath = req.file.path;
//     const rawResult = await analyzeDocument(filePath);
//     const cleanedResult = extractCleanedData(rawResult);

//     const doc = new Document({
//       fileName: req.file.originalname,
//       rawJson: rawResult,
//       cleanedJson: cleanedResult,
//     });

//     await doc.save();

//     // ✅ Rename uploaded file to <docId>.pdf
//     const newFilePath = path.join(__dirname, 'uploads', `${doc._id}.pdf`);
//     fs.renameSync(filePath, newFilePath);

//     res.json({
//       message: 'File processed successfully',
//       data: {
//         id: doc._id,
//         fileName: doc.fileName,
//         cleanedJson: doc.cleanedJson,
//         pdfUrl: `http://localhost:5000/documents/${doc._id}/pdf`,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });


// // Serve PDF inline by ID
// app.get("/documents/:id/pdf", async (req, res) => {
//     try {
//       const filePath = path.join(__dirname, "uploads", `${req.params.id}.pdf`);
  
//       if (!fs.existsSync(filePath)) {
//         return res.status(404).json({ error: "PDF not found" });
//       }
  
//       res.setHeader("Content-Type", "application/pdf");
//       res.setHeader("Content-Disposition", "inline"); // 👈 force inline display
//       fs.createReadStream(filePath).pipe(res);
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: "Error serving PDF" });
//     }
//   });
  

// // ✅ frontend-friendly endpoint (just cleaned JSON for all docs)
// app.get('/documents/cleaned', async (req, res) => {
//   const docs = await Document.find().select('cleanedJson -_id');
//   const cleanedOnly = docs.map((d) => d.cleanedJson);
//   res.json(cleanedOnly);
// });

// // Fetch all extracted docs (file info + cleaned only)
// app.get('/documents', async (req, res) => {
//   const docs = await Document.find().select('fileName createdAt');
//   const result = docs.map((d) => ({
//     id: d._id,
//     fileName: d.fileName,
//     createdAt: d.createdAt,
//     pdfUrl: `http://localhost:5000/documents/${d._id}/pdf`,
//   }));
//   res.json(result);
// });

// // Fetch full (raw + cleaned) by ID
// app.get('/documents/:id', async (req, res) => {
//   const doc = await Document.findById(req.params.id);
//   if (!doc) return res.status(404).json({ error: 'Not found' });

//   res.json({
//     id: doc._id,
//     fileName: doc.fileName,
//     cleanedJson: doc.cleanedJson,
//     rawJson: doc.rawJson,
//     pdfUrl: `http://localhost:5000/documents/${doc._id}/pdf`,
//   });
// });

// const PORT = 5000;
// app.listen(PORT, () =>
//   console.log(`🚀 Server running on http://localhost:${PORT}`)
// );















// const express = require("express");
// const multer = require("multer");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");
// const { mongoUri } = require("./config");
// const { analyzeDocument } = require("./services/azureService");
// const { extractCleanedData } = require("./services/jsonExtractor");
// const Document = require("./models/Document");

// const app = express();
// const upload = multer({ dest: "uploads/" });

// app.use(express.json());

// // ✅ Enable CORS for frontend
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// // Connect MongoDB
// mongoose
//   .connect(mongoUri)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB error:", err));

// // Upload PDF & analyze
// app.post("/upload", upload.single("file"), async (req, res) => {
//   try {
//     const filePath = req.file.path;
//     const rawResult = await analyzeDocument(filePath);
//     const cleanedResult = extractCleanedData(rawResult);

//     const doc = new Document({
//       fileName: req.file.originalname,
//       rawJson: rawResult,
//       cleanedJson: cleanedResult,
//     });

//     await doc.save();

//     // ✅ Rename uploaded file to <docId>.pdf
//     const newFilePath = path.join(__dirname, "uploads", `${doc._id}.pdf`);
//     fs.renameSync(filePath, newFilePath);

//     res.json({
//       message: "File processed successfully",
//       data: {
//         id: doc._id,
//         fileName: doc.fileName,
//         cleanedJson: doc.cleanedJson,
//         pdfUrl: `http://localhost:5000/documents/${doc._id}/pdf`, // ✅ send pdfUrl
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // Serve PDF inline by ID
// app.get("/documents/:id/pdf", async (req, res) => {
//   try {
//     const filePath = path.join(__dirname, "uploads", `${req.params.id}.pdf`);

//     if (!fs.existsSync(filePath)) {
//       return res.status(404).json({ error: "PDF not found" });
//     }

//     res.setHeader("Content-Type", "application/pdf");
//     res.setHeader("Content-Disposition", "inline"); // 👈 force inline display
//     fs.createReadStream(filePath).pipe(res);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error serving PDF" });
//   }
// });

// // ✅ frontend-friendly endpoint (just cleaned JSON for all docs)
// app.get("/documents/cleaned", async (req, res) => {
//   const docs = await Document.find().select("cleanedJson -_id");
//   const cleanedOnly = docs.map((d) => d.cleanedJson);
//   res.json(cleanedOnly);
// });

// // Fetch all extracted docs (file info + cleaned only)
// app.get("/documents", async (req, res) => {
//   const docs = await Document.find().select("fileName createdAt");
//   const result = docs.map((d) => ({
//     id: d._id,
//     fileName: d.fileName,
//     createdAt: d.createdAt,
//     pdfUrl: `http://localhost:5000/documents/${d._id}/pdf`,
//   }));
//   res.json(result);
// });

// // Fetch full (raw + cleaned) by ID
// app.get("/documents/:id", async (req, res) => {
//   const doc = await Document.findById(req.params.id);
//   if (!doc) return res.status(404).json({ error: "Not found" });

//   res.json({
//     id: doc._id,
//     fileName: doc.fileName,
//     cleanedJson: doc.cleanedJson,
//     rawJson: doc.rawJson,
//     pdfUrl: `http://localhost:5000/documents/${doc._id}/pdf`,
//   });
// });

// const PORT = 5000;
// app.listen(PORT, () =>
//   console.log(`🚀 Server running on http://localhost:${PORT}`)
// );








const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const { mongoUri } = require("./config");
const { analyzeDocument } = require("./services/azureService");
const { extractCleanedData } = require("./services/jsonExtractor");
const Document = require("./models/Document");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());

// ✅ Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// ✅ Connect MongoDB
mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Upload PDF & analyze
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;

    // Analyze PDF with Azure
    const rawResult = await analyzeDocument(filePath);
    const cleanedResult = extractCleanedData(rawResult);

    // Convert file -> Base64
    const pdfBuffer = fs.readFileSync(filePath);
    const pdfBase64 = pdfBuffer.toString("base64");

    // Save document in DB
    const doc = new Document({
      fileName: req.file.originalname,
      rawJson: rawResult,
      cleanedJson: cleanedResult,
      pdfBase64, // ✅ base64 string stored
    });

    await doc.save();

    // Delete local temp file
    fs.unlinkSync(filePath);

    res.json({
      message: "File processed successfully",
      data: {
        id: doc._id,
        fileName: doc.fileName,
        cleanedJson: doc.cleanedJson,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Serve Base64 PDF directly
app.get("/documents/:id/pdf", async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id).select("pdfBase64");
    if (!doc || !doc.pdfBase64) {
      return res.status(404).json({ error: "PDF not found" });
    }

    res.json({
      id: doc._id,
      base64: doc.pdfBase64, // ✅ send base64 string
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error serving PDF" });
  }
});

// ✅ Only cleaned JSON for all docs
app.get("/documents/cleaned", async (req, res) => {
  const docs = await Document.find().select("cleanedJson -_id");
  const cleanedOnly = docs.map((d) => d.cleanedJson);
  res.json(cleanedOnly);
});

// ✅ All docs (info only)
app.get("/documents", async (req, res) => {
  const docs = await Document.find().select("fileName createdAt");
  const result = docs.map((d) => ({
    id: d._id,
    fileName: d.fileName,
    createdAt: d.createdAt,
  }));
  res.json(result);
});

// ✅ Full details by ID
app.get("/documents/:id", async (req, res) => {
  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: "Not found" });

  res.json({
    id: doc._id,
    fileName: doc.fileName,
    cleanedJson: doc.cleanedJson,
    rawJson: doc.rawJson,
    pdfBase64: doc.pdfBase64, // ✅ include base64 here too
  });
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
