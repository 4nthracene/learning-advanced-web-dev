import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Tod {
  id: number;
  completed: boolean;
  title: string;
}

axios.get(url).then(data => {
  const todo = data.data as Todo;
  console.log(todo.id);
}).catch(error => {
  console.log(error.message);
});
