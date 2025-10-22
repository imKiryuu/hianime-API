import fs from 'fs';
import path from 'path';

const saveHtml = async (html, fileName) => {
  console.log(html);

  try {
    const fullPath = path.join(
      import.meta.url.replace('file://', '').replace('/src/utils/saveHtml.js', ''),
      '../../htmls',
      fileName
    );
    const dirPath = path.dirname(fullPath);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    console.log(fullPath);

    // Use fs.writeFile instead of Bun.write
    await fs.promises.writeFile(fullPath, html);
  } catch (error) {
    console.log('something went wrong' + error.message);
  }
};

export default saveHtml;
