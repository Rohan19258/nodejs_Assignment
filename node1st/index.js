const fs = require('fs/promises')


const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

fs.writeFile(fileName,fileContent);
console.log("written")
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name

	 let data=await fs.readFile(fileName, "utf8")
	 console.log(data)
	 console.log("readfile is executed")
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

	fs.appendFile(fileName,fileContent)
	console.log("update success")
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	 fs.unlink(fileName);
	console.log("delete success");
}

 
myFileWriter("index.html","<h1>skdkkd</h1>")
myFileReader("index.html")
myFileDeleter("index.html")

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }