const { log } = require("console");
const readline = require("readline");
let { todos } = require("./todos");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//  입력 반복 받기
const recursiveAsyncReadLine = function () {
  rl.question("명령어를 입력하세요: ", function (answer) {
    // 명령어 확인
    input = answer.split("$");
    const command = input[0];
    switch (command) {
      case "show":
        showItem(input[1]);
        break;
      case "add":
        const tag = JSON.parse(input[2]);
        addItem(input[1], tag);
        break;
      case "delete":
        if (isIn("id", input[1])) {
          deleteItem(input[1]);
        } else {
          console.log("입력하신 id 값에 해당하는 항목이 없습니다.");
        }
        break;
      case "update":
        if (isIn("id", input[1])) {
          updateItem(input[1], input[2]);
        } else {
          console.log("입력하신 id 값에 해당하는 항목이 없습니다.");
        }
        break;
      case "help":
        printHelp();
        break;
      case "exit":
        return rl.close();
      default:
        console.log("명령어가 없습니다.");
    }
    recursiveAsyncReadLine();
  });
};

recursiveAsyncReadLine();

// show 명령어 함수
const showItem = function (status) {
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
  } else if (status === "tags" || status === "name" || status === "id") {
    let line = `총 ${count.all}건의 ${status} :`;
    todos.forEach((item) => (line += `'${item[status]}',`));
    line = line.slice(0, -1);
    console.log(line);
  } else {
    const selectedTodo = todos.filter((todo) => todo.status === status);
    let line = `${status} 리스트 : 총 ${count[status]}건 : `;
    selectedTodo.forEach((item) => (line += `'${item.name}, ${item.id}',`));
    line = line.slice(0, -1);
    console.log(line);
  }
};

// add 명령어 함수
const addItem = function (name, tag) {
  let newId = getId();
  if (isIn("name", name)) {
    return;
  }
  const newItem = {
    name: name,
    tag: tag,
    status: "todo",
    id: newId,
  };
  todos.push(newItem);
  console.log(`${name}이 1개가 추가됐습니다.(id:${newId})`);
  showItem("all");
};

// delete 명령어 함수
const deleteItem = function (id) {
  todos = todos.filter((item) => {
    if (item.id === parseInt(id)) {
      console.log(`${item.name} ${item.status}가 목록에서 삭제되었습니다.`);
    }
    return item.id != id;
  });
  showItem("all");
};

// update 명령어 함수
const updateItem = function (id, status) {
  todos.forEach((item) => {
    if (item.id === parseInt(id)) {
      item.status = status;
      console.log(`${item.name} ${item.status}으로 상태가 변경됐습니다`);
    }
  });
  showItem("all");
};

const getId = function () {
  const getRandomId = () => Math.floor(Math.random() * 10000000) + 1;
  let newId = getRandomId();
  while (true) {
    let idValidation = true;
    todos.forEach((item) => {
      if (item.id === newId) {
        newId = getRandomId();
        idValidation = false;
      }
    });
    if (idValidation) {
      return newId;
    }
  }
};

const isIn = function (type, value) {
  let valueValidation = false;
  todos.forEach((item) => {
    if (item[type].toString() === value) {
      valueValidation = true;
    }
  });
  if (valueValidation) {
    return true;
  }
  return false;
};

function printHelp() {
  console.log("\n\t\t\t사용 가능한 명령어 목록");
  console.log(
    "===================================================================="
  );
  console.log(
    " show\t: [ all || status(todo, doing, done) || name || tags || id ]"
  );
  console.log(" add\t: [ name $ id ]");
  console.log(" delete : [ id ]");
  console.log(" update : [ id $ status ]");
  console.log(" help");
  console.log(" exit");
  console.log(
    "====================================================================\n\n"
  );
}
