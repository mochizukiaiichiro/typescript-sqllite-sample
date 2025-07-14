import Database from "better-sqlite3";

//インメモリー
export const func1 = () => {
  const db = new Database(":memory:");

  // テーブル作成
  db.exec(`
  CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT);
`);

  // データ挿入
  const names = ["name1", "name2", "name3", "name4"];
  const insert = db.prepare("INSERT INTO users (name) VALUES (?)");

  names.forEach((name) => {
      insert.run(name);
  })

  // データ取得
  const row = db.prepare("SELECT * FROM users").all();
  console.log(row);

  const row2 = db.prepare("SELECT * FROM users WHERE id = ?").get(2);
  console.log(row2);
};

//データベースファイル
export const func2 = () => {
  const db = new Database("./db/database.sqlite3");

  db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  );
`);

  // データ挿入
  // const names = ["name1", "name2",];
  // const insert = db.prepare("INSERT INTO users (name) VALUES (?)");
  // names.forEach((name) => {
  //   insert.run(name);
  // });

  // データ取得
  const row = db.prepare("SELECT * FROM users").all();
  console.log(row);

  const row2 = db.prepare("SELECT * FROM users WHERE id = ?").get(2);
  console.log(row2);
};
