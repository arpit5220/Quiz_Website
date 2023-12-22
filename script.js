const questions=[
    {
        'que':'What is the full form of HTML?',
        'a':'Hyper Text Markup Language',
        'b':'Hyper Text Makeup Language',
        'c':'Hyper Text Marking Language',
        'd':'Hyper Text Mark Language',
        'correct':'a'
    },

    {
        'que':'What is the full form of CSS?',
        'a':'Cascading Style Sheet',
        'b':'Cascading Style Sheep',
        'c':'Cascading Super Sheet',
        'd':'Cascading Super Sheep',
        'correct':'a'
    },

    {
        'que':'What is the full form of HTTP?',
        'a':'Hyper Text Transfer Protocol',
        'b':'Hyper Text Transfer Product',
        'c':'Hyper Text Transfer Process',
        'd':'Hyper Text Transfer Program',
        'correct':'a'
    },

    {
        'que':'What is the full form of JS?',
        'a':'JavaScript',
        'b':'JavaSuper',
        'c':'JavaSheet',
        'd':'JavaScripting',
        'correct':'a'
    },
    
]

let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll(".options");
const loadQuestion=()=>{
    if(index===total){
        return endQuiz();
    }
    
    reset();
    const data=questions[index];
    quesBox.innerText=` ${index+1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}


// const submit=document.
const submitQuiz=()=>{
      const ans=getAnswer();
      if(ans===questions[index].correct){
          right++;
      }
      else{
            wrong++;  
      }
        index++;
        loadQuestion();
      return;
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach((inputs)=>{
        if(inputs.checked){
            answer= inputs.value;
        }
    }
      )

    return answer;
}

const reset=()=>{
    optionInputs.forEach((inputs)=>{
        inputs.checked=false;
    })
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
              <div style="margin-top:25%; margin-left:25%;" >
              <h3>Quiz Completed</h3>
              <h2> ${right} / ${total} are correct </h2>
              </div>
              `;
}

// intial call
loadQuestion();