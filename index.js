const cardQ=document.querySelector('.card__questions')
let qArray=[]
class Questions{
    constructor(questionAt, answerAt, numberAt){
        this.question=questionAt
        this.answer=answerAt
        this.number=numberAt
    }
}
let q1= new Questions("How many team members can I invite?", "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.", "q1")
let q2= new Questions("What is the maximum file upload size?","No more than 2GB. All files in your account must fit your allotted storage space.", "q2")
let q3= new Questions("How do I reset my password?","Click \“Forgot password\” from the login page or \“Change password\” from your profile page. A reset link will be emailed to you.", "q3")
let q4= new Questions("Can I cancel my subscription?","Yes! Send us a message and we’ll process your request no questions asked.", "q4")
let q5= new Questions("Do you provide additional support?","Chat and email support is available 24/7. Phone lines are open during normal business hours.", "q5")

qArray.push(q1, q2, q3, q4, q5)

createQuestions()
function createQuestions(){
    qArray.forEach((q)=>{
        let structure=`
        <div class="questionWrap" id="wrap${q.number}">
            <div class="titleContainer" >
                <p id="title${q.number}" class="questionTitle">${q.question}</p>
                <img id="img${q.number}" src="./images/icon-arrow-down.svg" alt="arrow down" class="arrowDown">
            </div>
                <div class="inactive question ${q.number}" id="ans${q.number}">
                    ${q.answer}
                </div>
        </div>
        `
        cardQ.innerHTML+=structure
    })
    titles=document.querySelectorAll('.questionTitle')
    arrows=document.querySelectorAll('.arrowDown')
    eventListenersTitles(titles)
    eventListenersArrows(arrows)
}
function eventListenersTitles(objectArray){
    objectArray.forEach((object)=>{
        object.addEventListener('click', (title)=>{
            let idselectedTitle=title.target.id
            for(let i=0; i<qArray.length; i++){
                if(idselectedTitle==`title${qArray[i].number}`){
                    element=qArray[i]
                    idElement=qArray[i].number
                    let answerSelected=document.querySelector(`#ans${idElement}`)
                    let wrapSelected=document.querySelector(`#wrap${idElement}`)
                    let titleSelected=object
                    inactiveLogic(answerSelected)
                    modifiedLogic(wrapSelected, titleSelected)
                    answerSelected.classList.toggle('inactive')
                    wrapSelected.classList.toggle('modifier')
                    object.classList.toggle('titlemodified')
                }
            }

        })
    })
}
function eventListenersArrows(objectArray){
    objectArray.forEach((object)=>{
        object.addEventListener('click', (arrow)=>{
            let idSelectedArrow=arrow.target.id
            for(let i=0; i<qArray.length; i++){
                if(idSelectedArrow==`img${qArray[i].number}`){
                    element=qArray[i]
                    idElement=qArray[i].number
                    let answerSelected=document.querySelector(`#ans${idElement}`)
                    let wrapSelected=document.querySelector(`#wrap${idElement}`)
                    let titleSelected=document.querySelector(`#title${idElement}`)
                    inactiveLogic(answerSelected)
                    modifiedLogic(wrapSelected, titleSelected)
                    answerSelected.classList.toggle('inactive')
                    wrapSelected.classList.toggle('modifier')
                    titleSelected.classList.toggle('titlemodified')
                }
            }
        })
    })
}
function inactiveLogic(answer){
    let q1html=document.querySelector('#ansq1')
    let q2html=document.querySelector('#ansq2')
    let q3html=document.querySelector('#ansq3')
    let q4html=document.querySelector('#ansq4')
    let q5html=document.querySelector('#ansq5')
    let qhtmlArray=[q1html, q2html, q3html, q4html, q5html]
    qhtmlArray.forEach((q)=>{
        if(answer==q){
        }
        else{
            if(q.classList.contains('inactive')){
            }
            else{
                q.classList.add('inactive')
            }
        }
    })

}
function modifiedLogic(wrap, title){
    let w1html=document.querySelector('#wrapq1')
    let w2html=document.querySelector('#wrapq2')
    let w3html=document.querySelector('#wrapq3')
    let w4html=document.querySelector('#wrapq4')
    let w5html=document.querySelector('#wrapq5')
    let t1html=document.querySelector('#titleq1')
    let t2html=document.querySelector('#titleq2')
    let t3html=document.querySelector('#titleq3')
    let t4html=document.querySelector('#titleq4')
    let t5html=document.querySelector('#titleq5')
    let whtmlArray=[w1html, w2html, w3html, w4html, w5html]
    let thtmlArray=[t1html, t2html, t3html, t4html, t5html]
    whtmlArray.forEach((w)=>{
        if(wrap==w){
        }
        else{
            if(w.classList.contains('modifier')){
                w.classList.remove('modifier')
            }
        }
    })
    thtmlArray.forEach((t)=>{
        if(title==t){
        }
        else{
            if(t.classList.contains('titlemodified')){
                t.classList.remove('titlemodified')
            }
        }
    })
}