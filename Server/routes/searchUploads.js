import express from 'express';
import Upload from '../dbSchemas/upload.js';

const router = express.Router();

router.get('/searchuploads', async (req, res) => {
    const { title, tag } = req.query;
    const filters = {};
    if (title) {
        filters.Title = { $regex: title, $options: 'i' };
    }
    if (tag) {
        filters.Tags = { $in: [tag] };
    }
    try {
        const uploads = await Upload.find(filters).populate({ path: 'Uploader', model: 'Users' });
        res.json(uploads);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error searching uploads' });
    }
});

export { router as searchUploads };
