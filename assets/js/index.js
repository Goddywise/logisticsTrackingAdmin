// alert('Hello world') 

const eyeOpen = document.getElementById('eye-open')
const eyeClose = document.getElementById('eye-close');
const eyeInput = document.getElementById('password');
const mainIcon = document.getElementById('mainIcon')
// console.log(mainIcon);

let isEyeOpen = false

mainIcon.onclick =()=>{
    // alert('Testing!')
    if(isEyeOpen){
        isEyeOpen = false;
        eyeClose.style.display = 'inline-block';
        eyeOpen.style.display = 'none';
        eyeInput.type = 'password';
    }
    else{
        isEyeOpen = true;
        eyeOpen.style.display ='inline-block';
        eyeClose.style.display = 'none';
        eyeInput.type = 'text';
    }
}


const user_error = document.getElementById('user_error');
const pass_error = document.getElementById('pass_error');

// form.addEventListener('submit', (e)=>{
//    
//    }


//     // if(password.value.length <= 4){
//     //     e.preventDefault();
//     //     pass_error.innerHTML = " Password cannot be less than 5 characters "
//     // }



// })
 // INPUT/FONTEND VALIDATIONS HERE!

 const validateInput = ()=>{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
   
    if(username === '' || username == null){
            user_error.innerHTML = "Username must not be empty!"
            }
            else{
                user_error.innerHTML = ""
    };
    
    if(password === '' || password == null ){
             pass_error.innerHTML = "Password must not be empty!"
             }
            else{
            pass_error.innerHTML = "" 
    }
   
}
const handleSubmit = async (e)=>{  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    e.preventDefault(); 
    validateInput();

    try {
        let res = await fetch(`/adminUser/login`,{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({username,password})
        });
        
        let data = await res.json();
    
        if(data.messageSuccess==="SuccesString"){
            alert(data.message);
            localStorage.setItem('usr',username);
            location.href='/dashboard/admin';
            return false;
        }
        alert(data.errMessage);  
    } catch (e) {
       console.log(e) 
    }


}
