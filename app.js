let bBox=document.querySelectorAll(".btnbox");
let rBtn=document.querySelector("#reset-btn");
let turnO=true;
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

let checkWinner=()=>{
    for(let pattern of winPattern){
        
       
           let pos1Val= bBox[pattern[0]].innerText;
           let pos2Val= bBox[pattern[1]].innerText;
           let pos3Val= bBox[pattern[2]].innerText;
         
           if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner",pos1Val);
                
            }
           }

    }
    }