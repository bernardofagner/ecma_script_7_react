

/*#######################################################################################################*/
{
    console.log('**************************************** SEÇÃO 1 ****************************************');
    console.log();
    /*Exemplo com array */
    const vetorDeNumeros = [1, 2, 3, 4];
    const vetorComNovosElementos = [...vetorDeNumeros, 5, 6];
    const vetorDeVetorEElementos = [vetorDeNumeros, 5, 6];

    /*Exemplo com objeto */
    const objetoAnteroir = {
        nome: 'Fagner de Oliveira'
    };

    const novoObjeto = {
        ...objetoAnteroir,
        qualidade: 'Ser foda'
    };

    console.log('***SPREAD OPERATOR COM VETOR***')
    console.log('Vetor de numeros: ', vetorDeNumeros);
    console.log('Vetor com novos elementos(SpreadAndOperators): ', vetorComNovosElementos);
    console.log('vetorDeVetorEElementos(Normal): ', vetorDeVetorEElementos);

    console.log();

    console.log('***SPREAD OPERATOR COM OBJETOS**')
    console.log('Objeto anterior: ', objetoAnteroir);
    console.log('Novo objeto: ', novoObjeto);
    console.log();

    console.log('***SPREAD OPERATOR COM FUNÇÃO***')
    const primeiraFuncao = (...argumentos) => {
        console.log('Vetor de argumentos da primeiraFuncao: ', argumentos);
    };
    primeiraFuncao(1, 2, 3, 'Fagner', 'Julia', true, 3*5);
    console.log();
}

/*#######################################################################################################*/
{
    console.log('**************************************** SEÇÃO 2 ****************************************');
    console.log();

    console.log('***DESTRUCTING COM VETOR***');
    /*Usado para extrair elementos de vetores ou propriedades de objetos e armazená-los em variáveis */
    const vetorDePessoasENumeros = ['Fagner', 'Julia', 45];
    const [variavelFagner, variavelJulia, variavelNumero] = vetorDePessoasENumeros;
    const [var1, , var3] = vetorDePessoasENumeros;
    console.log('Vetor de pessoas: ', vetorDePessoasENumeros);
    console.log('Pessoa 1 extraída do vetor: ', variavelFagner);
    console.log('Pessoa 2 extraída do vetor: ', variavelJulia);
    console.log('Valor extraída do vetor: ', variavelNumero);
    console.log('Variáveis filtradas na destrução: ', var1, var3);
    console.log();

    console.log('***DESTRUCTING COM OBJETO***');
    const objetoCarro = {
        fabricante: 'Ford',
        modelo: 'Fusion',
        ano: 2020
    };

    const { fabricante } = objetoCarro;

    console.log('Objeto carro: ', objetoCarro);
    console.log('Propriedade extraida do carro(fabricante): ', fabricante);
    console.log();
}

/*#######################################################################################################*/
{
    console.log('**************************************** SEÇÃO 3 ****************************************');
    console.log();

    console.log('***ATRIBUIÇÃO DE VALOR POR CÓPIA (PARA VARIÁVEIS E CONSTANTES)***');
    /*Constantes e variaveis realizam passagem por cópia de valor */
    /*Objetos e vetores realizam passagem por referência*/

    var variavel1 = 7;
    const variavel2 = variavel1;
    var variavel3 = variavel1;

    console.log('variavel1(COPIA):', variavel1);
    console.log('variavel2(COPIA):', variavel2);
    console.log('variavel3(COPIA)', variavel3);
    console.log();

    console.log('***ATRIBUIÇÃO DE VALOR POR REFERÊNCIA (PARA VETORES E OBJETOS)***');
    var pessoa1 = {
        nome: 'Fagner',
        idade: 31
    };

    console.log('Pessoa1 antes de mudar de nome: ', pessoa1);
    const pessoa2 = pessoa1;
    pessoa1.nome = 'João';

    console.log('Pessoa1 após mudar de nome: ', pessoa1);
    console.log('Pessoa2 copiada da pessoa 1, antes da pessoa1 mudar o nome (recebeu a referência): ', pessoa2);

    const pessoa3 = {
        ...pessoa1
    };

    pessoa1.nome = 'Maria';
    console.log('Pessoa 1 mudou de nome de novo: ', pessoa1);
    console.log('Pessoa 2 seguiu a mudança de nome da pessoa 1: ', pessoa2);
    console.log('Pessoa 3 criada a partir da pessoa 1 usando o operador spread (...) manteve o nome antes da mudança ( NOVA REFERÊNCIA): ', pessoa3);

    var vetor1 = [1, 2, 3, 4, 5];
    const vetor2 = vetor1;

    console.log('Vetor1 antes da alteração: ', vetor1);
    vetor1[1] = 'Valor alterado';
    console.log('Vetor2 copiado do vetor1, depois do vetor1 ser alterado (recebeu a referência): ', vetor2);

    const vetor3 = [...vetor1];
    console.log('Vetor3 criado usando o operador spread (...) (NOVA REFERÊNCIA)', vetor3);
    vetor1[0] = 'valor alterado também';
    console.log('Vetor1 com outro valor alterado: ', vetor1);
    console.log('Vetor3 criado antes do vetor1 ter outro valor alterado: ', vetor3);
    console.log();
}

/*#######################################################################################################*/
{
    console.log('**************************************** SEÇÃO 4 ****************************************');
    console.log();

    console.log('***FUNÇÃO MAP PARA VETORES***');
    const vetorDeDados = [1, 2, 3, 'a',true, 'c'];

    console.log('Vetor de dados: ', vetorDeDados);

    const resultado = vetorDeDados.map((elemento) => {
        if(typeof(elemento) === 'number')
            return elemento;
        else
            return NaN;
    });

    const resultado2 = vetorDeDados.filter((elemento) => {
        if(typeof(elemento) === 'number')
            return elemento;
        else
            return NaN;
    });

    console.log('Vetor modificado pela função pela função map(): ', resultado);
    console.log('Vetor filtrado pela função filter(): ', resultado2);

    /* Documentação

        map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
        concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
        slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
        splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     */

}