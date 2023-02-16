const cardQ=document.querySelector('.card__questions')
let qArray=[]
class Questions{
    constructor(questionAt, answerAt, numberAt){
        this.question=questionAt
        this.answer=answerAt
        this.number=numberAt
    }
}
let q1= new Questions("How many team members can I invite?", "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.", 1)
let q2= new Questions("What is the maximum file upload size?","No more than 2GB. All files in your account must fit your allotted storage space.", 2)
let q3= new Questions("How do I reset my password?","Click \“Forgot password\” from the login page or \“Change password\” from your profile page. A reset link will be emailed to you.", 3)
let q4= new Questions("Can I cancel my subscription?","Yes! Send us a message and we’ll process your request no questions asked.", 4)
let q5= new Questions("Do you provide additional support?","Chat and email support is available 24/7. Phone lines are open during normal business hours.", 5)

qArray.push(q1, q2, q3, q4, q5)

function createQuestions(){
    qArray.forEach((q)=>{
        let structure=`<div class="questionWrap" id="q${q.number}">
        <div class="titleContainer">
          <p class="questionTitle">${q.question}</p>
          <img src="./images/icon-arrow-down.svg" alt="arrow down" class="arrowDown">
          <div class="question inactive q${q.number}">
            ${q.answer}
          </div>
        </div>`
        cardQ.innerHTML+=structure
    })
    wraps=document.querySelectorAll('.questionWrap')
    console.log(wraps)
}
createQuestions()
