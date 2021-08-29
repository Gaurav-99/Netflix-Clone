let question = document.getElementsByClassName("faq-question");

for (let i = 0; i < question.length; i++)
{ 
  question[i].addEventListener("click", function () {
    
    if (this.childNodes[1].classList.contains("fa-plus"))
    {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
        this.childNodes[1].classList.remove("fa-times");
        this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    /* console.log(content); */
    if (content.style.maxHeight)
    {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })

} 