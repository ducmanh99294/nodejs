import os from 'os';
import fs from 'fs';
import path from 'path';

// Get system information
const systemInfo = {
    OSType: os.type(),
    Platform: os.platform(),
    RAM: os.totalmem(),
    USEDRAM: os.totalmem() - os.freemem(),
    CPU: os.cpus()
};

// Log information to the console (Step 1)
console.log(systemInfo);

// Define the path and filename for saving the file
const filePath = path.join('D:', 'Homework', 'systemInfo.json');

// Save system information to a file (Step 2)
fs.writeFile(filePath, JSON.stringify(systemInfo, null, 2), (err) => {
    if (err) {
        return console.error('Error saving file:', err);
    }

    // Emit a completion message after saving (Step 3)
    console.log('Completed task!');
});

export default systemInfo