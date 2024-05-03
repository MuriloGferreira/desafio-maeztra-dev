function findYearsWithMostWorkers(data) {
    // Cria um objeto para armazenar a contagem de pessoas trabalhando por ano
    const countByYear = {};

    // Itera sobre cada pessoa nos dados
    for (const [startYear, endYear] of data) {
        // Para cada ano entre o início e o fim do trabalho, incrementa a contagem
        for (let year = startYear; year <= endYear; year++) {
            if (countByYear[year]) {
                countByYear[year]++;
            } else {
                countByYear[year] = 1;
            }
        }
    }

    // Encontra o(s) ano(s) com maior contagem de pessoas trabalhando
    const yearsWithMostWorkers = [];
    let highestCount = 0;

    for (const [year, count] of Object.entries(countByYear)) {
        if (count > highestCount) {
            highestCount = count;
            yearsWithMostWorkers = [year];
        } else if (count === highestCount) {
            yearsWithMostWorkers.push(year);
        }
    }

    // Retorna o(s) ano(s) com maior contagem de pessoas trabalhando
    return yearsWithMostWorkers;
}