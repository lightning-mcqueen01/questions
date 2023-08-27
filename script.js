const btns = document.querySelectorAll(".btn");
let questions = document.querySelectorAll("question-container");

btns.forEach(function(item) {
    item.addEventListener('click', function(e) {
        questions.forEach(function(ques) {
            if(ques !== questions)
                ques.classList.remove("show-answer");
        })
        let curr = e.currentTarget.parentElement.parentElement;
        curr.classList.toggle("show-answer")

    })
})