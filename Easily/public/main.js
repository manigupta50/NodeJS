import fs from 'fs';
function openFileStaticPublic(filePath){
    const pdfFilePath = `./${filePath}`;
    try {
        const data = fs.readFileSync(pdfFilePath);
    
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename=your-pdf-file.pdf');
        res.end(data);
      } catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('PDF file not found.');
      }
}


