function extractFile(str) {
    let strArr = str.split('\\');
    let fileName = strArr[strArr.length - 1].split('.');
    let extension = fileName.pop();

    fileName = fileName.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
console.log('______________');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');