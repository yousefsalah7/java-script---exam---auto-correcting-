let arr=[];
let qusnum=0;
let arr2=[];

function run(){
  var select = document.getElementById('stdn');
let stdname=document.getElementById("span");
let value = select.options[select.selectedIndex].value;
  stdname.textContent = value;
 }
 let ques=document.querySelector(".ques");
 let anses=document.querySelector(".anses");

     ques.style.display="none"
     anses.style.display="none"
 
 let nex=document.getElementById("next");
 nex.style.display="none"
 let prev=document.getElementById("previous");
 prev.style.display="none"
 let sub=document.getElementById("submit");
 sub.style.display="none"
let start =document.getElementById("start");
let resultbox=document.getElementById("result");
 start.addEventListener("click",function(){
 
    let stdname=document.getElementById("span");
   for (let index = 0; index < 1; index++) {
       
       if (stdname.textContent =="..........")
    {
        alert("plez chose ur name from list ");
     
    }  
                      break;
   }
    
            alert("Exam duration just 2 Miutes\r\nYou have to Answer 5 Questions\r\nPlease Confirm ")

     
let timer=document.getElementById("timer");
timer.style.visibility="visible";
let second=0,mint=0;

interv=setInterval(function(){
    second++;
    timer.innerText="0"+mint+":"+"0"+second;
if(second>9){timer.innerText="0"+mint+":"+second;}
if(second>59){mint++;second=0}
if(mint>9){timer.innerText=mint+":"+"0"+second;}
},1000)//interval

setTimeout(() => {
    clearInterval(interv);
    timer.innerText="00:00"
    second=0;
    mint=0;
    Result();
    alert("time out ");

    
    
}, 120000);
    
 // time out

 let cho=document.getElementById("cho");
 let qtext=document.getElementById("stdn");
 cho.style.display="none";
 qtext.style.display="none";


 let footer=document.getElementById("footer");
 (function () {
    for (var i = 0; i < qus.length; i++) {
      // Keep creating random numbers until the number is unique
      do {
        var randomQuestion = Math.floor(Math.random() * qus.length);
      } while (existingQuestions());
      arr.push(randomQuestion);
    }
    function existingQuestions() {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === randomQuestion) {
          return true;
        }
      }
      return false;
    }
  })();
  resultbox.classList.remove="result";
     ques.style.display="block";
     anses.style.display="block";
     footer.style.marginTop="20px";
     start.style.display="none";
     ques.innerHTML=`<span>${qusnum+1}</span> . <span>${qus[arr[qusnum]].question}</span>`;
     anses.innerHTML=`<label class="anssty" for = "${qus[arr[qusnum]].options[0]}" > <input type ="radio" id ="${qus[arr[qusnum]].options[0]}" name="ans"  value="${qus[arr[qusnum]].options[0]}" />${qus[arr[qusnum]].options[0]}</label><br>
     <label class="anssty" for = "${qus[arr[qusnum]].options[1]}" ><input type="radio" id ="${qus[arr[qusnum]].options[1]}" name="ans">${qus[arr[qusnum]].options[1]}</label><br>
     <label class="anssty" for = "${qus[arr[qusnum]].options[2]}" ><input type="radio" id ="${qus[arr[qusnum]].options[2]}" name="ans">${qus[arr[qusnum]].options[2]}</label><br>
     <label class="anssty" for = "${qus[arr[qusnum]].options[3]}" ><input type="radio" id ="${qus[arr[qusnum]].options[3]}" name="ans">${qus[arr[qusnum]].options[3]}</label>`;
//  }
 nex.style.display="block"
}) // start button
   
nex.addEventListener("click",function(){
  prev.style.display="block";
    if(arr2.length <= qus.length-1)
    arr2.splice(qusnum, 0, document.querySelector("input:checked").id);
    if (qusnum+1 <= qus.length-1){
        qusnum++;
    ques.style.display="block";
    anses.style.display="block";
    footer.style.marginTop="20px";
    start.style.display="none";
    ques.innerHTML=`<span>${qusnum+1}</span> . <span>${qus[arr[qusnum]].question}</span>`;
    anses.innerHTML=`<label class="anssty" for = "${qus[arr[qusnum]].options[0]}" > <input type ="radio" id ="${qus[arr[qusnum]].options[0]}" name="ans"  value="${qus[arr[qusnum]].options[0]}" /> ${qus[arr[qusnum]].options[0]}</label><br>
     <label class="anssty" for = "${qus[arr[qusnum]].options[1]}" ><input type="radio" id ="${qus[arr[qusnum]].options[1]}" name="ans">${qus[arr[qusnum]].options[1]}</label><br>
     <label class="anssty" for = "${qus[arr[qusnum]].options[2]}" ><input type="radio" id ="${qus[arr[qusnum]].options[2]}" name="ans">${qus[arr[qusnum]].options[2]}</label><br>
     <label class="anssty" for = "${qus[arr[qusnum]].options[3]}" ><input type="radio" id ="${qus[arr[qusnum]].options[3]}" name="ans">${qus[arr[qusnum]].options[3]}</label>`;
        if (document.querySelector(`input[id='${arr2[qusnum]}']`) != null) {
      document.querySelector(`input[id='${arr2[qusnum]}']`).checked = true;
      arr2.splice(qusnum, 1);
    }
    if (qusnum+1 == 5) {
      nex.style.display="none";
      sub.style.display="block";
    }
}else {
   Result();
   // console.log("last question");
}

})
let score=0;
let stdname=document.getElementById("span");

function Result(){
    for (let index = 0; index < arr2.length; index++) {
        console.log(arr2[index]);
        console.log(qus[arr[index]].answer);
        if (arr2[index] == qus[arr[index]].answer )  {
            score++;
        } 
        resultbox.innerHTML=`${stdname.textContent}<br><br>you Got ${score} from ${qus.length}`;  
        start.style.display="block";   
    }
}
function stopTime(){
    confirm("are u sure want to stop")
    clearInterval(interv);
    timer.innerText="00:00"
    second=0;
    mint=0;
    
}   
const previousButton = document.getElementById("previous");
previousButton.addEventListener("click",function(){
  nex.style.display="block";
  sub.style.display="none";
      if (document.querySelector("input:checked") != null && qusnum-1 >= 0 && qusnum+1 <= qus.length-1 ) {
        arr2.splice(qusnum, 0, document.querySelector("input:checked").id);
      }
    if (qusnum-1 >= 0){
    qusnum--;
    ques.style.display="block";
    anses.style.display="block";
    footer.style.marginTop="20px";
    start.style.display="none";
    ques.innerHTML=`<span>${qusnum+1}</span> . <span>${qus[arr[qusnum]].question}</span>`;
    anses.innerHTML=`<label class="anssty" for = "${qus[arr[qusnum]].options[0]}"> <input type ="radio" id = "${qus[arr[qusnum]].options[0]}" name="ans"  value=${qus[arr[qusnum]].options[0]}/> ${qus[arr[qusnum]].options[0]}</label><br>
     <span class="anssty" for="ans"><input type="radio" name="ans">${qus[arr[qusnum]].options[1]}</span><br>
     <span class="anssty"><input type="radio" name="ans">${qus[arr[qusnum]].options[2]}</span><br><span class="anssty"><input type="radio" name="ans">${qus[arr[qusnum]].options[3]}</span>`;
     document.querySelector(`input[id='${arr2[qusnum]}']`).checked = true;
     arr2.splice(qusnum, 1);
    }else {
    console.log("last question");
}
});

sub.addEventListener("click",function(){
  ques.style.display="none"
  anses.style.display="none"
  resultbox.style.display="block";
  timer.style.visibility="hidden";
  sub.style.display="none";
  prev.style.display="none";
  Result();

})





function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
  
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag =
      "<span>" +
      questions[index].numb +
      ". " +
      questions[index].question +
      "</span>";
    let option_tag = `<label class="option" for = "${questions[index].options[0]}"> <input type ="radio" id = "${questions[index].options[0]}" name="option" class="quetion-selected" value=${questions[index].options[0]}/> ${questions[index].options[0]}</label><br>
       <label class="option" for = "${questions[index].options[1]}"> <input type ="radio" id = "${questions[index].options[1]}" name="option" class="quetion-selected" value=${questions[index].options[1]}/> ${questions[index].options[1]}</label><br>
       <label class="option" for = "${questions[index].options[2]}"> <input type ="radio" id = "${questions[index].options[2]}" name="option" class="quetion-selected" value=${questions[index].options[2]}/> ${questions[index].options[2]}</label><br>
       <label class="option" for = "${questions[index].options[3]}"> <input type ="radio" id = "${questions[index].options[3]}" name="option" class="quetion-selected" value=${questions[index].options[3]}/> ${questions[index].options[3]}</label>`;
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
    const option = document.querySelectorAll(".option input");
    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
      //if quetion selected
      // let userAns = option[i].parentElement.textContent;
      let correcAns = questions[que_count].answer;
      option[i].addEventListener("input", (e) => {
        if (e.path[1].innerText.trim() === correcAns) {
          userScore += 1;
          //localStorage.setItem("score",userScore);
        } else {
          console.log("incorrect");
        }
        next_btn.classList.add("show");
      });
    }
  }