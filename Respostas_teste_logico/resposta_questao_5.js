function calculateFriendArrangements(numberOfPeople) {
    // Validar o input
    if (numberOfPeople <= 0 || numberOfPeople !== parseInt(numberOfPeople)) {
        throw new Error("Número invalido de pessoas. Deve ser um numero inteiro.");
    } 
    
    // Calcular o fatorial
    let factorial = 1;
    for (let i = 1; i <= numberOfPeople; i++) {
        factorial *= i;
    }

    // Retorne o número
    return factorial;
}
