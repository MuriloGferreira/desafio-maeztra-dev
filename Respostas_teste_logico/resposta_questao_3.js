function isValidSequence(str) {
    // Cria uma pilha para armazenar caracteres de abertura
    const stack = [];

    // Percorre cada caractere da string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Casos de acordo com o caractere
        switch (char) {
            case '(':
            case '{':
            case '[':
                // Empilha os caracteres de abertura na pilha
                stack.push(char);
                break;
            case ')':
            case '}':
            case ']':
                // Verifica se a pilha está vazia (sequência não pode iniciar com um caractere de fechamento)
                if (stack.length === 0) {
                    return false;
                }

                // Remove o último caractere da pilha (topo)
                const topStackChar = stack.pop();

                // Determine the valid pair character
                const validPairChar = topStackChar === '(' ? ')' :
                    topStackChar === '{' ? '}' : ']';

                // Verifica se o caractere atual é o caractere de par válido
                if (char !== validPairChar) {
                    return false;
                }
                break;
        }
    }

    // Verifica se a pilha está vazia (todos os caracteres de abertura foram fechados)
    return stack.length === 0;
}