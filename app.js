const express = require('express');
const fs = require('fs');
const YAML = require('js-yaml');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint to retrieve employee data
app.get('/api/employees', (req, res) => {
    try {
        const raw = fs.readFileSync('data.yaml', 'utf8');
        const data = YAML.load(raw);
        res.json(data);
    } catch (error) {
        console.error('Error reading YAML file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT endpoint to update MinTimeInHours
app.put('/api/employees/min-time', (req, res) => {
    const { email, minTime } = req.body;
    try {
        const raw = fs.readFileSync('data.yaml', 'utf8');
        const data = YAML.load(raw);
        if (data[email]) {
            data[email].MinTimeInHours = minTime;
            const yaml = YAML.dump(data);
            fs.writeFileSync('data.yaml', yaml, 'utf8');
            res.json({ message: `MinTimeInHours updated successfully for ${email}` });
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        console.error('Error updating MinTimeInHours:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT endpoint to update MaxTimeInHours
app.put('/api/employees/max-time', (req, res) => {
    const { email, maxTime } = req.body;
    try {
        const raw = fs.readFileSync('data.yaml', 'utf8');
        const data = YAML.load(raw);
        if (data[email]) {
            data[email].MaxTimeInHours = maxTime;
            const yaml = YAML.dump(data);
            fs.writeFileSync('data.yaml', yaml, 'utf8');
            res.json({ message: `MaxTimeInHours updated successfully for ${email} ${maxTime}` });
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    } catch (error) {
        console.error('Error updating MaxTimeInHours:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
