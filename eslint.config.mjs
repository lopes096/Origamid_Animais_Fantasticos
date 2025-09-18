export default [
  {
    rules: {
      //'no-console': 'error'
      indent: ["error", 2],
      "keyword-spacing": "error",
      "no-multiple-empty-lines": "error",
      "eol-last": ["error", "always"],
      semi: ["error", "always"],
      "no-trailing-spaces": "error",
      "operator-assignment": "error",
      "no-inner-declarations": [
        "error",
        "functions",
        { blockScopedFunctions: "disallow" },
      ],
    },
  },
];

// REGRAS
// -SEM IDENTAÇÃO SUPERIOR A 2 ESPAÇOS
// -ADICIONAR ESPAÇAMENTO APOS PALAVRAS CHAVES
// -NÃO DEIXAR ESPAÇAMENTO SUPERIOR A 2 LINHAS
// -ADICIONAR UMA LINHA DE ESPAÇO APÓS A ULTIMA LINHA DO CODIGO
// -SEMPRE ADICIONAR PONTO E VIRGULA (;)
// -NÃO DEIXAR ESPAÇOS EXTRAS AO FIM DA LINHA
// -NÃO REUTILIZAR A VARIAVEL PARA INCREMENTAÇÃO (I=I+1, UTILIZAR I+=1)
// -NÃO REALIZAR DECLARAÇÃO DE FUNÇÃO LOCAL, SEMPRE GLOBAL
