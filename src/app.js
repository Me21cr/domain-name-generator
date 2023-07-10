let pronoun = ["I", "they", "She"];
let adj = ["big", "white", "wonderful"];
let noun = ["family", "house", "love"];
let action = ["love", "eat", "enjoy"];

function generarNombresDominio(pronombres, adjetivos, sustantivos) {
  let nombresDominio = [];
  let conteo = 0;
  pronoun.forEach(pronoun => {
    adj.forEach(adj => {
      noun.forEach(noun => {
        action.forEach(action => {
          let nombreDominio = pronoun + adj + noun + action + ".com";
          nombresDominio.push(nombreDominio);
          conteo++;
        });
      });
    });
  });
  console.log(conteo);
  return nombresDominio;
}

let nombresDominio = generarNombresDominio(pronoun, adj, noun, action);
console.log(nombresDominio);
