import express, { Request, Response, NextFunction } from "express";
import { randomBytes } from "crypto";

const app = express();
app.use(express.json());

interface IPost {
  [key: string]: {
    title: string;
    comments: string[]
  }
}

const posts: IPost = {};

app.get("/all", (req: Request, res: Response, next: NextFunction) => {
  res.json(posts);
});

app.post("/", async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  const id = randomBytes(4).toString("hex");
  posts[id] = {
    title: req.body.title,
    comments: []
  };
  return res.json(posts);
});


app.listen(3000, () => {
  console.log(`Server running on port 3000`)
})
