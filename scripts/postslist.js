function loadHeader() {
  document.querySelector("header").innerHTML = header;
}

loadHeader();

function openDeleteModal(postId) {
  openModal("deletePostModal");
  document.querySelector(".delete-confirm-msg").setAttribute("id", postId);
}

function deletePost() {
  let postId = document.querySelector(".delete-confirm-msg").getAttribute("id");
  document.querySelector(`#${postId}`).style.display = "none";
  document.querySelector(".delete-confirm-msg").setAttribute("id", "");
  closeModal("deletePostModal");
}
