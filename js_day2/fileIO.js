const fs = require('fs');

// 비동기적으로 파일 읽기
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File content:', data);
});
// 비동기적으로 파일 쓰기
const content = 'Hello, World!';
fs.writeFile('newFile.txt', content, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully!');
});