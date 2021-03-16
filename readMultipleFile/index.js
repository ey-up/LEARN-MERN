var glob = require("glob");
const fs = require("fs");

const getPaths = async () =>
  new Promise((res, rej) => {
    glob("./read/*", function (_err, files) {
      res(files);
    });
  });

const readFiles = (path) =>
  new Promise((res, req) => {
    fs.readFile(path, "utf8", async function (err, data) {
      obj = { data, path };
      res(obj);
    });
  });

async function doAll() {
  const paths = await getPaths();
  const len = paths.length;
  for (let i = 0; i < len; i++) {
    await readFiles(paths[i]).then((value)=> {
    console.log(`path-> ${value.path} value--> ${value.data}`)
   });
  }
}

doAll();
