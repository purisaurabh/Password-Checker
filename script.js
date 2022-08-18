
//select the input tag
const input = document.querySelector("input");

// select the message tag
const message = document.querySelector(".message");

// select the btn tag
const show = document.querySelector(".show");


// contains all letters
let weak_password = /[a-z]/;

//contains all number
let medium_password = /\d+/;

//contains all character
let strong_password = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;


function run() 
{
    if(input.value !== '') 
    {
        show.style.display = "block";

        if((input.value.length <= 3) && (input.value.match(weak_password) || input.value.match(medium_password) || input.value.match(strong_password))) 
        {
            message.textContent = "Your password is too weak";
        }


        else if (input.value.length > 3 && input.value.match(weak_password) && input.value.match(medium_password)) 
        {
            message.textContent = "Your password is medium";
        }

        if (input.value.length > 8 && input.value.match(weak_password) && input.value.match(medium_password) && input.value.match(strong_password)) 
        {
            message.textContent = "Your password is strong";
        }

        show.onclick = function() 
        {
            if(input.type == "password") 
            {
                input.type = "text";
                show.textContent = "HIDE"
                show.style.color = "red"
            } 
            
            else 
            {
                input.type = "password";
                show.textContent = "SHOW"
                show.style.color = "black"
            }   
        }
    }

    else 
    {
        show.style.display = "none"
        message.textContent = '';
    }

}