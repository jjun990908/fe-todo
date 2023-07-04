const { log } = require("console");
var readline = require("readline");
// const { todos } = require("./todos");

let todos = [
  {
    name: "자바스크립트 공부하기",
    tags: ["programming", "javascript"],
    status: "todo",
    id: 12123123,
  },
  {
    name: "자바스크립트 공부",
    tags: ["programming", "javascript"],
    status: "todo",
    id: 123,
  },
  {
    name: "그림 그리기",
    tags: ["picture", "favorite"],
    status: "doing",
    id: 312323,
  },
];

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var recursiveAsyncReadLine = function () {
  rl.question("명령어를 입력하세요: ", function (answer) {
    if (answer == "exit") return rl.close();

    input = answer.split("$");
    if (input[0] === "show") {
      show(input[1]);
    }

    recursiveAsyncReadLine();
  });
};

recursiveAsyncReadLine();

const show = function (status) {
  parameter = status;
  let todo = 0;
  let doing = 0;
  let done = 0;
  todos.forEach((element) => {
    status = element.status;
    if (status === "todo") {
      todo += 1;
    } else if (status === "doing") {
      doing += 1;
    } else if (status === "done") {
      done += 1;
    }
  });
  if (parameter === "all") {
    console.log(`todo: ${todo}개, doing: ${doing}개, done: ${done}개`);
  } else if (parameter === "todo") {
    const result = todos.filter((todo) => todo.status === "todo");
    let st = "todo리스트 : 총";
    st += `${todo}건: `;
    result.map((item) => (st += `'${item.name}, ${item.id}', `));
    console.log(st);
  } else if (parameter === "doing") {
  } else if (parameter === "done") {
  } else {
  }
};
