let screen=document.querySelector(".screen");
let button=document.querySelectorAll("button");
let value="";
button.forEach((btn) => {
    btn.addEventListener("click",()=>{
    let btntxt=btn.innerText;
    if(btntxt==="AC"){
        value="";
        screen.innerText="";
    }else if(btntxt==="del"){
        value=value.slice(0,-1);
        screen.innerText=value;
    }else if(btntxt==="%"){
        value=value+"/100";
        screen.innerText=value;
    }else if(btntxt==="="){
        value=eval(value);
        screen.innerText=value;
    }else{
        value=value+btntxt;
        screen.innerText=value;
    }
});
});
