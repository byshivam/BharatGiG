let string = ""

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.calculator button');
    Array.from(buttons).forEach((button) =>{
        button.addEventListener('click',(e) =>{
            if (e.target.innerHTML === '='){
                string = eval(string)
                document.querySelector('input').value = string
            } 

            else if(e.target.innerHTML === 'AC'){
                string = "0"
                document.querySelector('input').value = string
            }

            else if (e.target.innerHTML === 'C'){
                string = string.slice(0,-1)
                document.querySelector('input').value = string
            }

            else if (e.target.innerHTML === '%'){
                string = (parseFloat(string) / 100).toString();
                document.querySelector('input').value = string
            }
            
            else{
                string =  string + e.target.innerHTML
                document.querySelector('input').value =string
            }
        })
    })
});
