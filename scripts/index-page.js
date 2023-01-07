let getComments = () => {
    axios.get('${apiURL}').then((response) => {
        console.log(response.data);
        let commentsData = response.data;
        displayComment(sortCommentsArray(commentsData));
    });  
};


getComments();

const commentsOL = document.querySelector(".commentsList");
const commentForm = document.querySelector(".comments__form--body");

//Event Listener
commentForm.addEventListener("submit", carryFormSubmit);

//Function 1 Loops through the comment array and creating DOM elements

function displayComment(commentArray) {
    commentsOL.innerHTML = "";

    for (let i=0; i < commentArray.length; i++) {
        //Comment List Item
        const commentItem = document.createElement("li");
        commentItem.classList.add("commentsList__comment--item");
        commentsOL.appendChild(commentItem);

        //Comment Item Wrap - Avatar and Body and Button
        const commentWrap = document.createElement("div");
        commentWrap.classList.add("commentsList___comment--wrap");
        commentItem.appendChild(commentWrap);

        //Comment Avatar
        const commentAvatar = document.createElement("div");
        commentAvatar.classList.add("commentsList__comment--avatar");
        commentWrap.appendChild(commentAvatar);

        //Comment Body
        const commentBody = document.createElement("div");
        commentBody.classList.add("comments_List__comment--body");
        commentWrap.appendChild(commentBody);

        //comment Author wrap - author + date
        var commentAuthorWrap = document.createElement("div");
        commentAuthorWrap.classList.add("commentsList__comment--authorwrap");
        commentBody.appendChild(commentAuthorWrap);

        //comment Author
        const commentAuthor = document.createElement("div");
        commentAuthor.classList.add("commentsList__comment--author");
        commentAuthor.innerText = commentArray [i].name;
        commentAuthorWrap.appendChild(commentAuthor);

        //comment date
        const commentDate = document.createElement("time");
        commentDate.classList.add("commentsList__comment--date");
        commentDate.innerText = commentArray[i].date.getMonth() + 1;
        commentDate.innerText += "/" + commentArray[i].date.getDate();
        commentDate.innerText += "/" + commentArray[i].date.getFullYear();
        commentAuthorWrap.appendChild(commentDate);

        }
}

//Function 2 create a new comment
function carryFormSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");

    let commentAuthor = event.target.author.value;
    let commentContent = event.target.userCommentContent.value;

    if (commentAuthor !== "" && commentContent !== "") {
        coomentForm.reset();

        axios({
            method: "post",
            url: apiURL,
            data: {
                name: commentAuthor,
                comment: commentContent,
            },
            headers: {
                "Content-Type": "application/json",
            },
        })

            .then((responsepostnewcomment) => {
                console.log(responsepostnewcomment.data);
                getComments();
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        alert("insert comment to join the conversation");
    }
}

//Function 3 sort most recent

const sortCommentsArray = (array) => {
    const sortedCommentsArray = array
    .slice()
    .sort((a,b) => b.timestamp - a.timestamp);
    return sortedCommentsArray;
}

// displayComment(sortCommentArray(commentsUrl));
