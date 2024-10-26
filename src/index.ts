import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


const api_url = `https://oauth.reddit.com/api/v1/me`;

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzMwMDQ4MDcxLjcyMDMwNCwiaWF0IjoxNzI5OTYxNjcxLjcyMDMwMywianRpIjoicktKX3FRQzU4LUU0X1BFUW1KMld0OUlHTHJsNi1nIiwiY2lkIjoiVW0tNjZPS29hQlNRc0oxZHI0bE5XZyIsImxpZCI6InQyXzFibnViaHAyeTIiLCJhaWQiOiJ0Ml8xYm51YmhwMnkyIiwibGNhIjoxNzI5OTYxMzg1NTI3LCJzY3AiOiJlSnlLVnRKU2lnVUVBQURfX3dOekFTYyIsImZsbyI6OX0.dPHgJADWWtbXoZyNJ7hQ_Chrqm3BHkc69AxDlF4_4-alfNPjqRqNGjZui_PPQ9G2h9H-H17SwyaDk8-GzgoNWev4lcG6cBg4C1kMtn4GEhM01pGPP1uEHan0qeijek_zGR4x0PWSZQziFWfTDuQpbwD8IEXHYJM3PL5dHcvZO7zw3zcQPVsi3W8MXyaH9VoHrVwmekHUp7YSpcDHT7eFxC-xa5Hc8ZpKSSosUugFO9Kn06RgcWjDKzGCDQIj_vgtuGitFJTr3bW76yVHGVSCGsSBgJIiUMIkkTipbOcgF9DhJAnseh7f1uoQdj_xcxuevk8jOMrY22iPkree8YaaPg";

const header = { 
    headers: {Authorization: `Bearer ${accessToken}`}
}


app.get('/', async () => {
  fetch(api_url, header)
  .then(resp => resp.json())
   .then(json => console.log(JSON.stringify(json)))
  .catch(function (err) {
    console.log("Unable to fetch -", err);
  });
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});