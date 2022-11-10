/**
 *
 * Pierszy request HTTP
 *
 * napisz kod który robi zapytanie/request/(strzał do backu) HTTP typu GET pod następujący URL/endpoint
 * a następnie wyświetli resultat w konsoli. Do rozwiażania użyj konstruktora XMLHttpRequest
 *
 * btw XML vs JSON?
 *
 * https://jsonplaceholder.typicode.com/todos/1
 *
 * Co to jest jsonplaceholder.typicode.com❓
 * darmowe otwarte restowe (REST) API z którego można korzystać w celach edukacyjnych/testowych
 *
 */

const _URL = "https://jsonplaceholder.typicode.com/posts/";

function load(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    // mamy 5 różnych stanów zaczynając od 0 https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  };

  // "otwarcie" połączenia
  xhr.open("GET", url);
  // tutaj startuje request
  xhr.send("");
}

// load(_URL, (response) => {
//   console.log(response);
// });

/**
 * utwórz funckje deleteItem która wykonuje zapytanie HTTP typu DELETE
 * endpoint na który trzeba wykonać request to /posts/:id gdzie id to number
 * co to jest endpoint ❓❓❓
 * 
 * /posts/1/comments
/albums/1/photos
/users/1/albums
/users/1/todos
/users/1/posts
 *
 * sprawdź jakie są dostępne eventy na które można reagować
 * eventy ❓❓❓
 *
 * utwórz prosty handling na wystąpienie errora zrób to w ciele funkcji onreadystatechange
 * błąd zasymuluj wpisując nie prawidłowy URL
 * do wykonania zadania będziesz potrzebował pola status
 *
 */

// const idToDele = prompt("podaj id do usunięcia");

// const _URL1 = `https://jsonplaceholder.typicode.com/posts/${idToDele}`;

function deleteItem(url, callback) {
  const xhr = new XMLHttpRequest();

  // musicie "przypiąć" funkcje strzałkową która obłuży zmiane "zmiennej" readyState
  xhr.onreadystatechange = () => {
    console.log({ readyState: xhr.readyState });

    if (xhr.readyState === 4) {
      console.log({ status: xhr.status });
      callback(xhr.response);

      if (xhr.status === 200) {
        console.log("usunięcie się powiodło");
      }
    }
  };

  // musicie określić jaką metode musicie zastosować chcemy usunąć czyli?
  xhr.open("DELETE", url);

  // musicie ostatecznie wystartować/uruchomić request pewną metodą po jej wywołaniu rozpocznie sie request
  xhr.send();
}

// deleteItem(_URL1, (response) => {
//   console.log(response);
// });

/**
 * stwórz funkcje która pobiera komentarze posta określnego w parametrze, jako parametr przekaż postId zgodnie z wymaganiami API
 * w celu ożywienia apki możesz użyć funkcji promot która pobierze od Ciebie postId
 */

/**
 * https://jsonplaceholder.typicode.com/comments?postId=1
 */

// const id_from_prompt = prompt("Podaj id posta:");
// const post_url = `https://jsonplaceholder.typicode.com/comments?postId=${id_from_prompt}`;
// const getComments = (url, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       callback(xhr.response);
//     }
//   };
//   xhr.open("GET", url);
//   xhr.send("");
// };

// getComments(post_url, console.log);

/**
 * zadanie 2 częściowe
 * 
 * jako frontend deweloper będziesz pracować/ała z różnymi listami i filtrami które pozwolą na pobranie 
 * tylko intetresujących dla usera rekordów
 * 
 * poniżej znajdują się trzy bloki (nie musisz wiedzieć co one robią ale tldr obsługują elementy/inputy na 
 * stronie i dają Ci wartości z którymi możesz pracować)
 * wykorzystaj miejsca na twój kod i stwórzcie przykładowe scenariusze
 * 
 * np.
 * stwórz zmienną w global scopie na przechowywanie collectionName i userId
 * wykonaj request w momencie gdy user kliknie przycisk (patrz 3 blok)
 * 
 * zachęcam do skorzystania z guide https://jsonplaceholder.typicode.com/guide/
 * praca z dokumentacją to nieodłączona część pracy programisty
 * 
 * 
/posts/1/comments
/albums/1/photos




/users/1/albums
/users/1/todos
/users/1/posts
 * 
 */

const getUsersData = (userId, collectionName, callback) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/${collectionName}`;

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  };

  xhr.open("GET", url);

  xhr.send();
};

let collectionName = "todos";

let userId = "1";

document.querySelector("#collectionSelect").addEventListener("change", (e) => {
  const _collectionName = e.target.value; // todos || posts || albums
  collectionName = _collectionName;
});

document.querySelector("#userId").addEventListener("change", (e) => {
  const _userId = e.target.valueAsNumber;
  userId = _userId;
});

document.querySelector("#submit").addEventListener("click", () => {
  /**
   * Miejsce na twój kod
   * kod zadziała jak user kliknie przycisk submit
   *
   *
   */
  getUsersData(userId, collectionName, console.log);

  console.log("click");
});
