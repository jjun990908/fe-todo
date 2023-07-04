const { log } = require("console");
var readline = require("readline");
const { todos } = require("./todos");

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
    } else if (input[0] === "add") {
      const tag = JSON.parse(input[2]);
      add(input[1], tag);
    } else if (input[0] === "delete") {
      delete_item(input[1]);
    } else if (input[0] === "update") {
      update(input[1], input[2]);
    } else {
      console.log("명령어가 없습니다.");
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
  } else {
    const result = todos.filter((todo) => todo.status === parameter);
    let count = 0;
    if (parameter === "todo") {
      count = todo;
    } else if (parameter === "doing") {
      count = doing;
    } else if (parameter === "done") {
      count = done;
    } else {
      console.log("해당 status가 없습니다.");
      return;
    }
    let st = `${parameter} 리스트 : 총 ${count}건 : `;
    result.map((item) => (st += `'${item.name}, ${item.id}', `));
    console.log(st);
  }
};

const add = function (name, tag) {
  const random = Math.random() * 1000000 + 1;
  const check = todos.filter((item) => item.name === name);
  if (check) {
    console.log("입력하신 이름과 같은 TODO리스트가 존재합니다.");
    return;
  }
  const newItem = {
    name: name,
    tag: tag,
    status: "todo",
    id: random,
  };
  todos.push(newItem);
  console.log(`${name}이 1개가 추가됐습니다.(id:${random})`);
  show("all");
};

const delete_item = function (id) {
  let flag = false;
  todos.forEach((item, idx) => {
    if (item.id === parseInt(id)) {
      todos.splice(idx, 1);
      console.log(`${item.name} ${item.status}가 목록에서 삭제되었습니다.`);
      flag = true;
      show("all");
    }
  });
  if (!flag) {
    console.log("입력하신 id값에 해당하는 값이 존재하지 않습니다.");
  }
};

const update = function (id, status) {
  let flag = false;
  todos.forEach((item, idx) => {
    if (item.id === parseInt(id)) {
      item.status = status;
      console.log(`${item.name} ${item.status}으로 상태가 변경됐습니다`);
      flag = true;
      show("all");
    }
  });
  if (!flag) {
    console.log("입력하신 id값에 해당하는 값이 존재하지 않습니다.");
  }
};
