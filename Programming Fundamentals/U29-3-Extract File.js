function extractFile(input) {
    let arr = input.split("\\");
    let file = arr[arr.length - 1]; // тук може .pop();
    let index = file.lastIndexOf(".");
    let fileName = file.slice(0, index);
    let fileExtension = file.slice(index + 1, file.length); // тук file.length може и да го няма
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
