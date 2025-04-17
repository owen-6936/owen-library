const FileSystemRouter = require("express").Router();
const { getAvailableDrives } = require('../../data-access/storage-repository');

FileSystemRouter.get("/", (req, res) => res.send("<h2>All Request Recieved Are Handled By File System Routes</h2>"))

FileSystemRouter.get("/storage", async (req, res) => {
    const drives = await getAvailableDrives();
    res.json(drives)
})


module.exports = FileSystemRouter;