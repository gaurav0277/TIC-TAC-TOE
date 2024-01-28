let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontener=document.querySelector(".msg-contaner");
let msg=document.querySelector("#msg");

let turn0=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,5],
];
boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            box.style.color="#CE796B";
            turn0=false;
        }else{
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        checkwiner();
    })
})

const resetgame=()=>{
    turn0=true;
    enablebox();
    msgcontener.classList.add('hide');
}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}




const showwinner=(winer)=>{
    msg.innerText=`congratulations winner is ${winer}`;
    msgcontener.classList.remove("hide");
    disablebox();
}

const checkwiner=()=>{
    for(let patterns of winpatterns){
        let pos1val=boxes[patterns[0]].innerText;
        let pos2val=boxes[patterns[1]].innerText;
        let pos3val=boxes[patterns[2]].innerText;

        if(pos1val!=""&& pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&& pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }



    }




}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);