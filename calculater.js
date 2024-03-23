let string="";
let buttons=document.querySelectorAll(".pnk");
Array.from(buttons).forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.innerHTML=="="){
      string=eval(string);
      document.querySelector("input").value=string;
     
    }
    else if(e.target.innerHTML=="DEL"){
      string=string.slice(0,-1);
      document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="%"){
      string=string/100;
      document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="C"){
      string="";
      document.querySelector("input").value=string;}  
    

    else {
    
    string= string + e.target.innerHTML;
    document.querySelector("input").value=string;
    }
  })
})