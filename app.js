const button1=document.querySelector('#btn1');
const button2=document.querySelector('#btn2');
const display1=document.querySelector('#display1');
const display2=document.querySelector('#display2');
const resetButton=document.querySelector('#reset');



let playGame= document.querySelector('#playGame');

   let score1=0;
   let score2=0;
   let  maxScore=2;
   let gameOver=false;
 button1.addEventListener('click',(e)=>{
    if(!gameOver){
        score1+=1;
        
            if(score1 === maxScore){
                gameOver=true;
                display1.classList.add('winner');
                display2.classList.add('loser');
             }
             display1.textContent=score1;
    
    }
    
    
    display1.textContent=score1
 });
 button2.addEventListener('click',(e)=>{
    if(!gameOver){
        score2+=1;
        
            if(score2 === maxScore){
                gameOver=true;
                display2.classList.add('winner');
                display1.classList.add('loser');
             }
             display2.textContent=score2;
    
    }
    
    
    display2.textContent=score2
 });

resetButton.addEventListener('click', refresh);

 function refresh(){
    gameOver=false;
    score1=0;
    score2=0;
    display1.textContent=0;
    display2.textContent=0;
    display1.classList.remove('winner', 'loser');
    display2.classList.remove('winner', 'loser');
 }

playGame.addEventListener('change' ,function(){
    maxScore= parseInt(this.value);
   
    
    refresh();
});