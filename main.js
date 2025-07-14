/*INI VERSI SAYA

const task = document.getElementById("task");
const search = document.getElementById("search");
const taskList = document.getElementById("taskList"); //nantinya untuk list tugas yang di input

search.addEventListener("click", function () {
  const inputValue = task.value.trim();
  if (inputValue === "") {
    alert("Tolong isi dulu tugas kamu!");
    return;
  }

  const listTugas = document.createElement("li");
  listTugas.textContent = inputValue;

  const tasktext = document.createElement("span");
  tasktext.textContent = inputValue;
  tasktext.classList.add("task-text");

  const doneButton = document.createElement("span");
  doneButton.innerHTML = "\u2713";
  doneButton.classList.add("done-button");

  const deleteButton = document.createElement("span");
  deleteButton.textContent = "\u00D7";
  deleteButton.classList.add("delete-button"); //membuat class untuk memodifikasi tanda silang nya

  taskList.appendChild(listTugas);
  listTugas.appendChild(doneButton);
  listTugas.appendChild(deleteButton);
});
**/

//INI VERSI AI
const task = document.getElementById("task");
const search = document.getElementById("search");
const taskList = document.getElementById("taskList");

search.addEventListener("click", function () {
  const inputValue = task.value.trim();
  if (inputValue === "") {
    alert("Tolong isi dulu tugas kamu!");
    return;
  }

  const listTugas = document.createElement("li");

  // Bungkus teks tugas dengan span agar mudah diatur posisinya
  const taskText = document.createElement("span");
  taskText.textContent = inputValue;
  taskText.classList.add("task-text");

  const deleteButton = document.createElement("span");
  deleteButton.textContent = "\u00D7";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", function () {
    listTugas.remove(); //remove untuk menghapus jika diklik
  });

  const doneButton = document.createElement("span");
  doneButton.innerHTML = "\u2713";
  task.classList.add("done-button");

  doneButton.addEventListener("click", function () {
    taskText.classList.toggle("complete"); //mengarah ke variable taskText karena teks tugas sudash di bungkus ke variable ini
  });

  // Tambahkan dalam urutan: done, teks, delete
  listTugas.appendChild(taskText);
  listTugas.appendChild(doneButton);
  listTugas.appendChild(deleteButton);

  taskList.appendChild(listTugas);
  task.value = ""; // Kosongkan input setelah submit
});
