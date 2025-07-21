import fs from 'fs';
import path from 'path';

export default function handler(request, response) {
  const filePath = path.resolve('./data', 'db.json');
  
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);
    
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    response.status(200).json(jsonData.products);
  } catch (error) {
    response.status(500).json({ error: 'Failed to read data' });
  }
}