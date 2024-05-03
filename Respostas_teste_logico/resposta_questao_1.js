function checkSequence(number) {
    // Converte o número em uma string e divide os dígitos em um array
    const digits = number.toString().split('');

    // Check if the digits are in ascending order
    let ascending = true;
    for (let i = 0; i < digits.length - 1; i++) {
        if (parseInt(digits[i]) > parseInt(digits[i + 1])) {
            ascending = false;
            break;
        }
    }

    //Verifica se os dígitos estão em ordem crescente
    let descending = true;
    for (let i = 0; i < digits.length - 1; i++) {
        if (parseInt(digits[i]) < parseInt(digits[i + 1])) {
            descending = false;
            break;
        }
    }

    //Retorna o resultado da verificação
    if (ascending || descending) {
        return "It's ordered";
    } else {
        return "It's not ordered";
    }
}