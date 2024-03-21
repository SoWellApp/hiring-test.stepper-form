const packageJson = require("./package.json");
const { writeFile } = require("fs");
const storeName = packageJson.versionConfig.storeName;

const splitedStoreNames = storeName.split(" ");

const versionConfig = {
  ...packageJson.versionConfig,
  name: splitedStoreNames
    .map((splitedStoreName: string) => splitedStoreName.toLocaleLowerCase())
    .join("-")
};

packageJson.versionConfig = versionConfig;

writeFile("package.json", JSON.stringify(packageJson, null, 2), () => {
  console.info("DONE: updating package.json")
});
