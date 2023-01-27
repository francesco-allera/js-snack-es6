/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto.
*/

/* ----- Functions ----- */
function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

/* ----- Variables ----- */
const outputTeams = document.getElementById('teams');
const outputTeams2 = document.getElementById('teams2');
const teams = [
   { nome: 'Roma',      punti: 0,  falli_subiti: 0 },
   { nome: 'Juventus',  punti: 0,  falli_subiti: 0 },
   { nome: 'Inter',     punti: 0,  falli_subiti: 0 },
   { nome: 'Milan',     punti: 0,  falli_subiti: 0 }
];
const minPoints = 50, maxPoints = 100, minFalls = 1, maxFalls = 10;
const teams2 = [];
let text = '', text2 = '';

/* ----- Application ----- */
for (let i = 0; i < teams.length; i++) {
   teams[i].punti = randomNumber(minPoints, maxPoints);
   teams[i].falli_subiti = randomNumber(minFalls, maxFalls);

   const { nome, falli_subiti } = teams[i];

   teams2.push({ nome, falli_subiti });

   text += '<li>';
   for (let key in teams[i]) {
      text += `${key}: ${teams[i][key]}<br>`;
   }
   text += '</li>';

   text2 += '<li>';
   for (let key in teams2[i]) {
      text2 += `${key}: ${teams2[i][key]}<br>`;
   }
   text2 += '</li>';
}

outputTeams.innerHTML = text;
outputTeams2.innerHTML = text2;