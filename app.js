let bBox=document.querySelectorAll(".btnbox");
let rBtn=document.querySelector("#reset-btn");
let turnO=true;
let newBtn=document.querySelector("#new-btn");
let msgWin=document.querySelector("#msg-win");
let msgContainer=document.querySelector(".msg-container");

const winPattern =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
bBox.forEach((btnbox) =>{
    btnbox.addEventListener("click",()=>
    {
       if(turnO){
        //For playr O
        btnbox.innerText="O";
        turnO=false;
       }
       else{
        //for player X
        btnbox.innerText="X"
        turnO=true;
       }
       btnbox.disabled =true;
       checkWinner();
    }
    )
});

const resetGame=()=>{
for (let box of bBox){
    box.disabled=false;
    box.innerText="";
    msgContainer.classList.add("hide");
    rBtn.classList.remove("hide");
}
};

const disableBtnBoxes=()=>{
for (let box of bBox){
    box.disabled="true";
}
};

showWinner=(winner)=>{
 msgWin.innerText=`Congratulation ! Winner is ${winner}`   
msgContainer.classList.remove("hide");
rBtn.classList.add("hide");
disableBtnBoxes();
};

let checkWinner=()=>{
    for(let pattern of winPattern){
        
       
           let pos1Val= bBox[pattern[0]].innerText;
           let pos2Val= bBox[pattern[1]].innerText;
           let pos3Val= bBox[pattern[2]].innerText;
         
           if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
                
            }
            else{
                
            }
           }

    }
    };

    rBtn.addEventListener("click",resetGame);
    newBtn.addEventListener("click",resetGame);