function fim(){
    var op = document.getElementsByName('option')
    var option2 = document.getElementsByName('option2')
    var option3 = document.getElementsByName('option3')
    var res = document.getElementById('res')
    if(op[0].checked){
        if(option2[0].checked){
            if(option3[0].checked){
                res.innerHTML = `Muitoooo gay`
            }else if(option3[1].checked){
                res.innerHTML = `Bem gay`
            }
        }else if (option2[1].checked){
            if(option3[0].checked){
                res.innerHTML = `Bem gay`
            }else if(option3[1].checked){
                res.innerHTML = `Pouco gay`
            }
        }
    
    
    }else if(op[1].checked){
        if(option2[0].checked){
            if(option3[0].checked){
                res.innerHTML = `Bem gay`
            }else if(option3[1].checked){
                res.innerHTML = `Pouco gay`
            }
        }else if(option2[1].checked){
            if(option3[0].checked){
                res.innerHTML = `Porque vc mamou seu amigo cara?`
            }else if(option3[1].checked){
                res.innerHTML = `1% gay`
            }
        }

    }
}    



