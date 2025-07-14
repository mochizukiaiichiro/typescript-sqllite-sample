import { func1, func2 } from "./components/db.mjs";

console.log("インメモリーを使用");
func1();

console.log("ファイルベースモードを使用");
func2();
