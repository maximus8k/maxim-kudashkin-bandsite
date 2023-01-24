const link = "https://project-1-api.herokuapp.com/comments";
const apiKey = "?api_key=55ad76c1-462d-4a73-a270-efbab320dd6a";

//Function to converty comment data and receive HTML card
function displayComment(comment){
        const commentLi = document.createElement("li");
      commentLi.classList.add("item");
      commentsList.appendChild(commentLi);

      const itemImg = document.createElement("avatar");
      itemImg.classList.add("item__avatar");
      itemImg.setAttribute("src", " ");
      commentLi.appendChild(itemImg);

      const itemSection = document.createElement("div");
      itemSection.classList.add("item__section");
      commentLi.appendChild(itemSection);

      const itemHeader = document.createElement("div");
      itemHeader.classList.add("item__title");
      itemSection.appendChild(itemHeader);

      const itemName = document.createElement("p");
      itemName.classList.add("item__name");
      itemName.innerHTML = comment.name;
      itemHeader.appendChild(itemName);

      const itemDate = document.createElement("p");
      itemDate.classList.add("item__date");
      itemDate.innerText = new Date(comment.timestamp).toLocaleDateString(
        "en-US"
      );
      itemHeader.appendChild(itemDate);

      const itemBody = document.createElement("div");
      itemBody.classList.add("item__body");
      itemSection.appendChild(itemBody);

      const bodyCopy = document.createElement("p");
      bodyCopy.innerText = comment.comment;
      itemBody.appendChild(bodyCopy);


}
//Function to return comments
function showCommentsList() {
  const getComments = axios.get(link + apiKey);
  getComments.then((res) => {
    const commentsData = res.data;
    const commentsArrey = commentsData.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    commentsList.innerHTML = "";
    commentsArrey.forEach((comment) => {
      displayComment(comment);

    });
  });
}

const form = document.querySelector(".form");
const commentsList = document.querySelector(".comments__list");
showCommentsList();

//Function to check valid characters
function formValidation (nameField, commentField) {
  const re = /^[a-zA-Z]/
  if (!re.test(nameField.value)) {
    nameField.focus();
    nameField.value = "";
    nameField.classList.add("form__input--error");
    return false

  } else if (!re.test(commentField.value)) {
      commentField.focus();
      commentField.value = ""
      commentField.classList.add("form__input--error");
      return false
  } else {
    return true
  }
}

//Add Comment
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const submittedName = event.target.formName;
  const submittedComment = event.target.formComment;
  if (formValidation(submittedName,submittedComment)) {
    const postedComment = {
      name: submittedName.value,
      comment: submittedComment.value,
    };
    const addComment = axios.post(link + apiKey, postedComment);
    addComment.then((res) => {
      event.target.reset();
      showCommentsList();
    });
  }
});

