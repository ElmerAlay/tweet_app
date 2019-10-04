const app = require("./app");


async function main() {
    await app.listen(5000);
    console.log("Server running on port 5000");
};

main();