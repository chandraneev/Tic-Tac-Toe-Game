 let boxes=document.querySelectorAll(".box");
 let resetbtn=document.querySelector("#rg");
 let msgcon=document.querySelector("#msg");
 let turnO=true;
 let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],  
 ];
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
         checkwinner();
    });
 });


 let checkwinner=()=>{
    for(pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showwinner(pos1val);
                colorchange();
                disablebox();
            }
            }
        }
    }


  let showwinner=(winner)=>{
    msgcon.style.display="block";
    msgcon.innerHTML=`Congratulation, Winner is ${winner}`; 
 }


 let colorchange=()=>{
    let pos1val=boxes[pattern[0]];
    let pos2val=boxes[pattern[1]];
    let pos3val=boxes[pattern[2]];
    
    pos1val.style.color="blueviolet";
    pos2val.style.color="blueviolet";
    pos3val.style.color="blueviolet";
 }


 let disablebox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
 }


  let enablebox=()=>{
    for(box of boxes){
        box.innerText="";
        msgcon.style.display="none";
        box.disabled=false;
        boxes.forEach((box)=>{
           box.style.color="rgb(224,6,224)";
        })
    }
 }


 resetbtn.addEventListener("click",enablebox);



