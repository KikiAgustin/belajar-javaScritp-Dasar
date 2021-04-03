const formList = document.querySelector("#tulis-list");
const tulisList = document.querySelector("#form-list");
const kegiatanList = document.querySelector("#list-kegiatan");


formList.addEventListener("submit", createList);

function createList(e) {
    e.preventDefault();

    // Membuat Element LI
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(tulisList.value));

    // Membuat button Delete
    const deleteList = document.createElement("a");
    deleteList.className = "d-flex justify-content-end text-decoration-none mb-2";
    deleteList.style = "margin-top:-20px;";
    deleteList.href = "#";

    const spanDelete = document.createElement("span");
    spanDelete.className = "badge bg-danger";
    spanDelete.innerHTML = "Delete";

    deleteList.appendChild(spanDelete);


    // Membuat button Selesai
    const selesaiList = document.createElement("a");
    selesaiList.className = "d-flex justify-content-end text-decoration-none";

    const spanSelesai = document.createElement("span");
    spanSelesai.className = "badge bg-primary";
    spanSelesai.innerHTML = "Selesai";

    selesaiList.appendChild(spanSelesai);

    // Menggabungkan semaua element
    li.appendChild(deleteList);
    li.appendChild(selesaiList);

    kegiatanList.appendChild(li);

    tulisList.value = "";




}