/**
 * 🎉🎉🎉 BONUS 🎉🎉🎉
 * czy wiemy jak wykonać kod w JS w interwale czasowym czyli np co 5 sekund❓
 * czy wiemy jak korzystać z funkcji setInterval ❓
 */

// eg.1

setInterval(() => {
  // ciało tej funkcji będzie wykonywało się cyklicznie co ok 5 sekund
  console.log("Jesteś zwycięzcą!");
}, 5000);

// eg.2

function handlerFunction() {
  console.log("Jesteś zwycięzcą!");
}

setInterval(handlerFunction, 5000);

// JAK TO ZASTOPOWAĆ❓

// const intervalId = setInterval(()=>{
//     console.log('Jesteś zwycięzcą!');
// },5000);

// clearInterval(intervalId);
