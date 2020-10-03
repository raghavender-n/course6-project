var likesCount = 0;
var comments = [];
function loadHeader() {
  document.querySelector("header").innerHTML = header;
}

loadHeader();

function editPost() {
  document.querySelector("#editPostBtn").style.display = "none";
  document.querySelector("#savePostBtn").style.display = "block";
}

function savePost() {
  document.querySelector("#editPostBtn").style.display = "block";
  document.querySelector("#savePostBtn").style.display = "none";
}

function likePost() {
  likesCount++;

  document.querySelector("#likeBtnText").innerHTML = "Liked";
  document.querySelector("#likeCountMsg").innerHTML = `${likesCount} ${
    likesCount > 1 ? "people like this!" : "person likes this!"
  }`;
}

function createPostComment() {
  comments.push(document.querySelector("#postComment").value);
  var node = document.createElement("div");
  node.setAttribute("class", "comment-box");
  var textnode = document.createTextNode(
    document.querySelector("#postComment").value
  );
  node.appendChild(textnode);
  document.getElementById("commentList").appendChild(node);
  document.querySelector("#postComment").value = "";
}
