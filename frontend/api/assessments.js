// pages/api/assessments.js (Frontend-side API route)

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const formData = req.body;
  
        // Perform logic, e.g., save to a database or forward data to another server
  
        return res.status(200).json({ message: 'Assessment started successfully!' });
      } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'An error occurred. Please try again.' });
      }
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  