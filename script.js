let  answer, submit, number, guess ;
    number = document.getElementById("guessedno");
    submit = document.getElementById("submit");
    answer = document.getElementById("answer");
    guess = document.getElementById("guess");
    
    let min = 0, max = 100 ,count=5;
    let randomno = Math.floor(Math.random()* (max - min + 1) ) + min;
    console.log(randomno)
    submit.onclick = function(){
        if(number.value > 0 && number.value < 100){
        if(number.value == randomno){
            answer.textContent = `Yeah, Your guess is correct. You guessed in attempt - ${6- count}`;
            guess.textContent = "Congratulationssss";
            submit.disabled=true;
            number.disabled=true;
            return;
       }
    else{
        if(number.value > randomno){
         answer.textContent = "Too high — try a smaller number";
        }
        else{
         answer.textContent = "Too small — try a larger numberr";
        }
    }
    guess.textContent = `Number of attempts left : ${count-1}`;
    count--;

         }
    else{
       answer.textContent = "Invalid Number"; 
    }  

        if(count==0){
            submit.disabled=true;
            number.disabled=true;
            answer.textContent = `Game Over! The correct number was ${randomno}`;
            return;
        }
    }

