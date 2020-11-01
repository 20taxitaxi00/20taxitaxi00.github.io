// チェックマークとゴミ箱マークと追加マークのアイコン
let doneIcon = '<i class="far fa-check-square fa-2x"></i>';
let removeIcon = '<i class="far fa-trash-alt fa-2x"></i>';
let addBtn = document.getElementById("add");
let data;

// let displayText = data;
// console.log(displayText);

// ローカルストレージの処理
// データがあったら
if (localStorage.getItem("todoList")){
	// データを取り出して、配列dataに代入
	data = JSON.parse(localStorage.getItem("todoList"));
	for (let value of data){
		add_li_tag(value);
	}
// なかったら
} else {
	// 空の配列を代入する
	data = [];
}

console.log(data);

// addボタンの処理
addBtn.addEventListener("click", function(){
	let task_input = document.getElementById("input");
	if (task_input != ""){
		add_li_tag(task_input.value);
		// ローカルストレージへの保存
		data.push(task_input.value);
		localStorageData();
		// 入力欄をからにする
		task_input.value = "";
	}
});



// ----- 関数 -----
// 追加マークを押した時
function add_li_tag(task_text){
	let todo_list = document.getElementById("not-yet");
	// liタグ作成
	let new_li = document.createElement("li");
	new_li.textContent = task_text;
	// divタグ作成
	let div_button = document.createElement("div");
	div_button.classList.add("buttons");
	// 完了ボタン作成
	let done = document.createElement("button");
	done.classList.add("done");
	done.innerHTML = doneIcon;
	done.addEventListener("click", doneTask);
	// 削除ボタン作成
	let remove = document.createElement("button");
	remove.classList.add("remove");
	remove.innerHTML = removeIcon;
	remove.addEventListener("click", removeTask);
	// それぞれの要素に追加
	div_button.appendChild(done);
	div_button.appendChild(remove);
	new_li.appendChild(div_button);
	todo_list.appendChild(new_li);
}

// 完了マークを押した時
function doneTask(){
	let task = this.parentNode.parentNode;
	let id = task.parentNode.id;
	if (id !== "not-yet") {
		return;
	}
	let value = task.textContent;	
	// doneに追加
	let target = document.getElementById("done");
	target.insertBefore(task, target.childNodes[0]);
	};

//削除マークを押した時 
function removeTask(){
	let hantei = confirm("本当に削除しますか？");
	if (hantei == true){
		// 画面から削除
		console.log(this.parentNode.parentNode.textContent);
		let task = this.parentNode.parentNode;
		let id = task.parentNode.id;
		let value = task.textContent;
		data.splice(data.indexOf(value))
		// ローカルストレージ
		localStorageData();
		task.remove();
	}
};

// ローカルストレージに保存
function localStorageData(){
	localStorage.setItem("todoList",JSON.stringify(data));
};








