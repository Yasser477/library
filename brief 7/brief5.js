var bookName = document.getElementsByTagName("input");
var form = document.getElementsByTagName("form")[0];
var options = document.getElementById("lang");
var radio = document.getElementsByClassName("bookType");
var validation = 0
var para =document.getElementById("para");


function validate(event){
    event.preventDefault();
    for(i=0; i<bookName.length-3;i++){
        if(bookName[i].value==''){
            bookName[i].nextElementSibling.innerHTML = "This fieled required"
            bookName[i].nextElementSibling.style.color = "red"
            validation ++;
        }
        else{
            bookName[i].nextElementSibling.innerHTML ="well"
            bookName[i].nextElementSibling.style.color="green"
            bookName[i].style.borderColor="green"
        }
        //bookname validation
        if(bookName[0].value.length>30){
            bookName[0].nextElementSibling.innerHTML="the name should be less than 30 letter"
            bookName[0].nextElementSibling.style.color="red"
        }

        //author validation

        if(bookName[1].value.length>20){
            bookName[1].nextElementSibling.innerHTML="the name should be less than 20 letter"
            bookName[1].nextElementSibling.style.color="red"

        //price validation
        if(isNaN(Number(bookName[2].value))){

          bookName[2].nextElementSibling.innerHTML="enter the price with number"
            bookName[2].nextElementSibling.style.color="red"  
        }
        else if (Number(bookName[2].value<0)){
            bookName[2].nextElementSibling.innerHTML="positive number"
            bookName[2].nextElementSibling.style.color="red" 
        }
         



            }
    
    
    }
        //type validation
        var is_checked = false
            for(i=0 ; i<radio.length;i++){
                if(radio[i].checked){
                    is_checked = true;
                    break;
                }
                else{
                    is_checked = false
                }

                if(is_checked){
                        para.innerHTML="well"
                        para.style.color="green"
                }
                else{
                    para.innerHTML="chose one"
                    para.style.color="red"
                }

    }
}


form.addEventListener("submit", validate)