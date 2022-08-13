

function myNumber(value){
    if(document.getElementById('form_input').value === ''){
        if(value === '.'){
            document.getElementById("point_but").disabled = true;
            return document.getElementById('form_input').value+='0.';      
        }
    } else {
        
        if(value == '+' || value == '-' || value == '*' || value == '/'){
            document.getElementById("point_but").disabled = false;
            return document.getElementById('form_input').value+=value;
        } else if(value === '.') {
            console.log("After")
            document.getElementById("point_but").disabled = true;
            let str = document.getElementById('form_input').value;
            let my_val = str.slice(-1);
            console.log(my_val)
            if(my_val == '+' || my_val == '-' || my_val == '*' || my_val == '/'){
                return document.getElementById('form_input').value+='0.'; 
            }
        }
    }
    return document.getElementById('form_input').value+=value;
}


function reset(){
    document.getElementById('form_input').value="";
    document.getElementById("point_but").disabled = false;
}

function d_pop() {
    let str = document.getElementById('form_input').value;
    let d_pop = str.slice(0, -1);
    document.getElementById('form_input').value=d_pop;
}

function myRes(){
    let arr_numbers = []
    let res = 0;
    let numbers = '';
    let operators = '';
    let a = document.getElementById('form_input').value+="$";
    
    for(i=0; i<a.length; i++){
        if(a[i] == '+' || a[i] == '-' || a[i] == '*' || a[i] == '/' || a[i] == '$'){
            arr_numbers.push(numbers)
            numbers = ''
            if(a[i] != '$'){
                operators+=a[i];
            }
            
        }else{
            numbers+=a[i];
        }
    }
    console.log("The Numbers of Array are ", arr_numbers)
    console.log("The Operators are", operators)
    
    res = arr_numbers[0];
    let count = -1;
    
    for(let x=1; x<arr_numbers.length; x++){
        count++;
        switch (operators[count]) {
            case '+':
                res = parseFloat(res) + parseFloat(arr_numbers[x])
                break;
            case '-':
                res = parseFloat(res) - parseFloat(arr_numbers[x])
                break;
            case '*':
                res = parseFloat(res) * parseFloat(arr_numbers[x])
                break;
            case '/':
                res = parseFloat(res) / parseFloat(arr_numbers[x])
                break;
            default: 
                console.log("Nothing to show");
                break;
        }
    }
    
    console.log("Total = " + res)
    
    reset()

    document.getElementById('form_input').value= res;   
    //res.toFixed(2) 2 decimal, Math.round(res);
    res=0;

    if(document.getElementById('form_input').value=='NaN'){
        document.getElementById('form_input').value='Wrong Input..Press AC'
    }

}









// Main Solution


// let a="123*23+43-56/4*200$"
// let numbers = '';
// let operators = '';

// for(i=0; i<a.length; i++){
//     if(a[i] == '+' || a[i] == '-' || a[i] == '*' || a[i] == '/' || a[i] == '$'){
//         arr_numbers.push(numbers)
//         numbers = ''
//         if(a[i] != '$'){
//             operators+=a[i];
//         }
        
//     }else{
//         numbers+=a[i];
//     }
// }
// console.log("The Numbers of Array are ", arr_numbers)
// console.log("The Operators are", operators)

// let res = arr_numbers[0];
// let count = -1;

// for(let x=1; x<arr_numbers.length; x++){
//     count++;
//     switch (operators[count]) {
//         case '+':
//             res = parseInt(res) + parseInt(arr_numbers[x])
//             break;
//         case '-':
//             res = parseInt(res) - parseInt(arr_numbers[x])
//             break;
//         case '*':
//             res = parseInt(res) * parseInt(arr_numbers[x])
//             break;
//         case '/':
//             res = parseInt(res) / parseInt(arr_numbers[x])
//             break;
//         default: 
//             console.log("Nothing to show")
//             break;
//     }
// }

// console.log("Total = " + res)


