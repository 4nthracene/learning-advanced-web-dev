import express, {Request, Response, NextFunction} from "express";
import { randomBytes } from "crypto";

const app = express();
app.use(express.json());

interface ICommentsById {
  [key: string]: { id: string; comment: string }[]
}

const commmentsById: ICommentsById = {}

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.json(commmentsById);
});

app.post("/", (req: Request, res: Response, next: NextFunction) => {
  const postId = req.body.id;
  const commentId = randomBytes(4).toString("hex");
  const newComment = {
    id: commentId,
    comment: req.body.comment as string
  };
  
  const comment: { id: string; comment: string; }[] = commmentsById[postId] || [];
  comment.push(newComment);
  commmentsById[postId] = comment

});

app.listen(3001, () => {
  console.log(`Comments service running.`);
})

