    var op = document.getElementsByName('option')
    var option2 = document.getElementsByName('option2')
    var option3 = document.getElementsByName('option3')
    var p2 = document.getElementById('página2')
    var res = p2.document.getElementById('res')
    if(op[0].checked){
        res.innerHTML= `Sim`
    }else if(op[1].checked){
        res.innerHTML =`Não`

    }
    



