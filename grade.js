const { log } = require("console");
var readline = require("readline");
const { todos } = require("./todos");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//  입력 반복 받기
var recursiveAsyncReadLine = function () {
  rl.question("명령어를 입력하세요: ", function (answer) {
    // 명령어 확인
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

// show 명령어 함수
const show = function (status) {
  const count = {
    todo: 0,
    doing: 0,
    done: 0,
    all: 0,
  };
  todos.forEach((element) => {
    count["all"] += 1;
    count[element.status] += 1;
  });

  if (status === "all") {
    console.log(
      `todo: ${count.todo}개, doing: ${count.doing}개, done: ${count.done}개`
    );
  } else if (status === "name") {
    let line = `총 ${all}건의 이름 :`;
    todos.map((item) => (line += `'${item.name}',`));
    line = line.slice(0, -1);
    console.log(line);
  } else if (status === "tag") {
  } else if (status === "id") {
  } else {
    const result = todos.filter((todo) => todo.status === status);
    let line = `${status} 리스트 : 총 ${count[status]}건 : `;
    result.map((item) => (line += `'${item.name}, ${item.id}',`));
    line = line.slice(0, -1);
    console.log(line);
  }
};

// add 명령어 함수
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

// delete 명령어 함수
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

// update 명령어 함수
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
