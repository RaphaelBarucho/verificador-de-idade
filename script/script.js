    function botao() {
    var dataAno = new Date()
    var AnoAtual = dataAno.getFullYear()
    var inputAno = window.document.getElementById("input-ano-nascimento")
    var inputFemi = window.document.getElementById("input-femi")
    var inputMasc = window.document.getElementById("input-masc")
    var paragrafo_resul = window.document.getElementById("resul")
    var img = window.document.getElementById("imagem")
    var submit = window.document.getElementById("input-submit")
    var idade = AnoAtual - inputAno.value

        //Feminino

    if (inputFemi.checked && idade < 18) {
        paragrafo_resul.innerText = `Você é de menor ainda, seu gênero é feminino e você tem ${idade} anos.`
        img.src = "./img/f1.jpg"
    } else if (inputFemi.checked && idade >= 18 < 60) {
        paragrafo_resul.innerText = `Você já é adulta, seu gênero é feminino e você tem ${idade} anos.`
        img.src = "./img/f2.jpg"
    } if (inputFemi.checked && idade >= 60) {
        paragrafo_resul.innerText = `seu gênero é feminino e você tem ${idade} anos.`
        img.src = "./img/f3.jpg"
    }

    //masculino

    if (inputMasc.checked && idade < 18) {
        paragrafo_resul.innerText = `Você é de menor ainda, seu gênero é Masculino e você tem ${idade} anos.`
        img.src = "./img/m1.jpg"
    } else if (inputMasc.checked && idade >= 18 < 60) {
        paragrafo_resul.innerText = `Você já é adulto, seu gênero é Masculino e você tem ${idade} anos.`
        img.src = "./img/m2.jpg"
    } if (inputMasc.checked && idade >= 60) {
        paragrafo_resul.innerText = `seu gênero é Masculino e você tem ${idade} anos.`
        img.src = "./img/m3.jpg"
    }
    }
