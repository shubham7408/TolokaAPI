const axios = require('axios');

const BASE_URL = 'https://notlabel-studio.toloka-test.ai/api/tasks';
const AUTH_TOKEN = '4473eba2bc5b4f2b1d293b839dd3e9c705a5c490'; // Replace with your actual token

const getTasks = async (req, res) => {
    try {
        const { page = 1, page_size = 10, view, project, include } = req.query;

        const response = await axios.get(BASE_URL, {
            headers: {
                'Authorization': `Token ${AUTH_TOKEN}` // Use 'Token' prefix instead of 'Bearer'
            },
            params: { page, page_size, view, project, include }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching tasks:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ error: error.message });
    }
};

module.exports = { getTasks };
