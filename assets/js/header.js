//Header Toggle Here.....
let count = 0;
let toggleStand = document.getElementById("toggle");
 const handleToggle =()=>{
    if(count==0){
        toggleStand.classList.add('open-menu')
        count+=1;
    }
    else{
        toggleStand.classList.remove('open-menu')  
        count=0;
    }
     
 }