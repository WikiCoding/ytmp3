const { dlAudio } = require("youtube-exec");
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'))

app.post('/dlaudio', async (req, res) => {
  // on the req.body we must get the url and filename

  if (req.body.filename.trim() === "") {
    alert("You need to specify a file name");
    return
  }

  // Using async/await
  try {
    await dlAudio({
      url: req.body.url,
      folder: "downloads", // optional, default: "youtube-exec"
      filename: req.body.filename, // optional, default: video title
      quality: "best", // or "lowest"; default: "best"
    });
    console.log("Audio downloaded successfully! 🔊🎉");
    res.status(200).send({ message: "Success" });
  } catch (err) {
    console.error("An error occurred:", err.message);
    res.status(500).send({ message: `Error ${err.message}` });
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
})