let n1 = document.getElementById("num");
let sel = document.getElementById("selnum");
let res = document.getElementById("res");
let numbers = []

function adicionar() {
    if (n1.value.length == 0 || n1.value < 1 || n1.value > 100) {
        alert("[ERRO] Valor inválido ou não digitado!")
    } else {
        var num1 = Number(n1.value);
        numbers.push(num1)
        let op = document.createElement("option")
        op.text = `O valor ${num1} foi adicionado!`;
        sel.appendChild(op)
        n1.value = ""
        res.innerHTML = ""
        n1.focus()
    }
}

function finalizar() {
    if (sel.length == 0) {
        alert("[ERRO] Sem Número para Analisar!")
    } else {
        let soma = 0
        for (pos in numbers) {
            soma += numbers[pos]
        }
        numbers.sort()
        res.innerHTML += `Ao total, ${numbers.length} números foram cadastrados.<br>`;
        res.innerHTML += `O maior número informado foi: ${Math.max(...numbers)}<br>`;
        res.innerHTML += `O menor número informado foi: ${Math.min(...numbers)}<br>`;
        res.innerHTML += `A soma de todos os números é: ${soma}<br>`;
        res.innerHTML += `A média dos números é: ${soma / numbers.length}<br>`;
    }
}