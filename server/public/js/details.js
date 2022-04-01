const send = document.querySelector(".send");
const trash = document.querySelector(".delete");
const edit = document.querySelector(".edit");

trash.addEventListener("click", (e) => {
	const endpoint = `/blogs/${trash.dataset.doc}`;

	deleteBtn().catch((err) => console.log(err));

	async function deleteBtn() {
		const response = await fetch(endpoint, {
			method: "DELETE",
		});

		const res = await response.json();
		window.location.href = await res.redirect;
	}
});

edit.addEventListener("click", () => {
	let text = document.querySelector("#title");
	let text2 = document.querySelector("#blog");

	if (text) {
		text.setAttribute("contenteditable", "true");
		text2.setAttribute("contenteditable", "true");
	}
});

send.addEventListener("click", (e) => {
	const endpoint = `/blogs/${edit.dataset.doc}`;

	editBtn().catch((err) => console.log(err));

	async function editBtn() {
		const response = await fetch(endpoint, {
			method: "PUT",
		});

		const res = await response.json();
		window.location.href = await res.redirect;
	}
});
