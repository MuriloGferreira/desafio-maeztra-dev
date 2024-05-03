function findDuplicates(array) {
    const duplicateNumbers = [];

    // Percorrendo o array original
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i];

        // Verificando se o elemento atual já existe em 'numerosDuplicados
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] === currentElement && !duplicateNumbers.includes(currentElement)) {
                duplicateNumbers.push(currentElement);
            }
        }
    }

    // Retornando o array com os valores duplicados
    return duplicateNumbers;
}