/**
 * dane zapisane w pamięci/w zmiennych możecie o nich też myśleć jako o danych które są trzymane w bazie danych
 * i są dostępne dzięki backendowi
 */

const users = [
  { id: 1, name: "Jane" },
  { id: 2, name: "Joe" },
  { id: 3, name: "Json" },
  { id: 4, name: "Jack" },
];

/* zmienna potrzeba do wykonania zadania */
let results;

/**
 * Obsłużmy to jak należy - ✅promisy✅ - do wszelkiego rodzaju asynchronicznych⌚ sytuacji w tym zapytań HTTP używamy
 * Promisów lub API (co oznacza to słowo w tym kontekście❓) bazującego na promisach dlatego jest to bardzo ważne przed pójściem dalej
 *
 * EXAMPLE TIME
 * co to jest w ogóle promisa?
 * kiedy stosujemy?
 * czy już będe robił/a requesty?
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 */

// const promise = new Promise((resolve, reject) => {
//   const isSuccess = Math.random() > 0.5;
//   console.log("zaczynam odliczać");
//   setTimeout(() => {
//     // if (isSuccess) {
//     //   console.log("resolve");
//     //   resolve();
//     // } else {
//     //   console.log("reject");
//     resolve();
//     // }
//   }, 1000);

//   // isSuccess ? resolve() : reject()
// });

// promise
//   .then(() => {
//     console.log("request po dane");
//     const data = [1, 2, 3];

//     return "pierwszy then";
//   })
//   .then((somestring) => {
//     console.log(somestring);

//     return somestring;
//   })
//   .then((somestring) => {
//     console.log(somestring + "1");
//   });

/*
 ********************************************************************************************************************
 *
 * Podobnie jak w poprzednich sekcjach "before" stwórz funkcje getResults która będzie
 * na podstawie przekazywanego parametru przypisywała kolekcje do zmiennej results.
 * Funckja ma być opóźniona podobnie jak w poprzednich przykładach jednak ma ona również zwracać Promise.
 *
 * istotna różnica niż w poprzednich ćwiczeniach 🔑 "jednak ma ona również zwracać Promise"
 *
 * po stworzeniu funkcji wywołaj ją 📢 przetestuj różne parametry
 * 👇🏻 kod napisz pod komentarzem
 */

// const getResults = (dataYouWant) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (dataYouWant === "todos") {
//         results = todos;
//       } else if (dataYouWant === "users") {
//         results = users;
//       }
//       // 'todos/3'
//       if(dataYouWant.includes('/')){

//       }

//       resolve();
//     }, 1000);
//   });
// };

// new Promise((res, rej) => {
//   res();
// })
//   .then((param) => {
//     console.log(param); // 1
//     return 456;
//   })
//   .then((param) => {
//     console.log(param); // 2
//     return 123;
//   })
//   .then((param) => {
//     console.log(param); // 3

//     throw new Error("error inny tekst");
//     return 678;
//   })
//   .catch((param) => {
//     console.log(param); // 4
//   });

// const displayResultsOnTheScreen = () => {
//   console.table(results);
// };

// const getResults2 = (dataYouWant) => {
//   const promise = new Promise((resolve, reject) => {
//     const colletionName = dataYouWant.split("/")[0];
//     const id = dataYouWant.split("/")[1];

//     setTimeout(() => {
//       if (colletionName === "todos") {
//         results = todos.find((todo) => {
//           if (todo.id === id * 1) {
//             return true;
//           }
//           return false;
//         });
//       } else if (dataYouWant === "users") {
//         results = users[id];
//       }

//       resolve();
//     }, 1000);
//   });

//   return promise;
// };

/*
 *
 * Rozszerz funkcje getResults o opcję wyciągania i przypisywania jednego rekordu z kolecji do zmiennej results
 * czyli po wywołaniu funkcji getResults chce wykonsolować tylko jeden element tablicy
 * TEN KTÓRY ZPRECYZUJE W PARAMETRZE a nie całą tablice
 * dodatkowo nie zmieniaj ilosci przekazywanych parametrów możesz zmienić to co przekazujesz ale ilość parametrów
 * ma zostać taka sama + musi to być dalej string
 *
 *
 * po stworzeniu funkcji wywołaj ją 📢 przetestuj różne parametry
 * 👇🏻 kod napisz pod komentarzem
 */

/**
 * part2:
 * swtórz następną funkcję która wyświetla w konsoli zmienną results
 *
 * ps: zadanie zostało wykonane na rzecz folderu before001
 * jednak użycie będzie się nieco różniło
 * 👇🏻 kod napisz pod komentarzem
 */

/**
 * part1
 * żeby trochę dodać życia do naszej aplikacji dodajmy możliwość wprowadzenia parametru 'dataYouWant' - czyli tego który przekażemy później do funkcji
 * do tego celu użyj funkcji wbudowanej w przeglądarkę prompt - wywołanie tej funkcji przypisz do zmiennej
 * którą potem przekażemy do funkcji getResults
 *
 * - stworzyć zmienną do przechowania tego co zwraca promp -- user wpisuje jakiś tekst który będzie
 * przechowany w tej zmiennej
 *
 * - użyj tej zmiennej razem z funkcjią getResults
 *
 *
 *
 * part2
 * dodajmy obsługę nieistniejącej kolekcji i wyświetlmy stosowny komunikat
 * tzn. jezeli user wpisze słowo inne niż 'todos' lub 'users' wyświetlmy np alert
 *
 * hint 1💡 w tym celu trzeba przerobić funkcje getResults i wykorzystać funkcje reject
 * (drugi parametr w funkcji która sama jest parameterm w konstruktorze Promisy - JavaScript jest dziwny)
 *
 * 👇🏻 kod napisz pod komentarzem
 */

// const getResults3 = (dataYouWant) => {
//   const promise = new Promise((resolve, reject) => {
//     const [el1, el2] = dataYouWant.split("/");
//     setTimeout(() => {
//       if (el1 === "todos") {
//         if (el2 > todos.length) {
//           reject("Nie ma takiego rekordu.");
//         }
//         results = todos.find((todo) => {
//           if (todo.id * 1 === el2 * 1) {
//             // if(Number(todo.id)  === Number(el2)){
//             return todo;
//           }
//           return false;
//         });
//       } else if (el1 === "users") {
//         if (el2 > users.length) {
//           reject("Nie ma takiego rekordu.");
//         }
//         results = users.find((user) => {
//           if (user.id * 1 === el2 * 1) {
//             return user;
//           }
//           return false;
//         });
//       } else {
//         reject("Nie ma takiej kolekcji.");
//       }
//       resolve();
//     }, 1000);
//   });
//   return promise;
// };
// const value = prompt("endpoint np. todos/2 lub users/1");
// getResults3(value)
//   .then(() => displayResultsOnTheScreen())
//   .catch((err) => console.log(err));

// getResults3(dataYouWant)
//   .then(displayResultsOnTheScreen)
//   .catch((err) => {
//     console.log(err);
//   });

/**
 *
 * okay mamy jakąś kolekcje a co jeżeli chcemy zrobić kilka operacji
 * na raz albo jedna po drugiej?
 *
 *
 * czyli np chcemy zedytować jakiś rekord, inny chcemy usunąć itd jak to "ograć"??
 *
 * stówrz funkcje opżnioną przez setTmieout o nazwie createTodo która przyjmie parametr typu string - będzie to nasz nowy
 * todos w koleckji czyli zmiennej która przechowuje tablice na górze pliku
 *
 *
 * - funkcja o nazwei createTodo
 * - ma przyjmować parameter content
 * - ma tworzyć z opóźnieniem nowy elemnt w tablicy todos
 *
 * - ma
 *
 * ⭐ tak samo swtórz funkcje która edytuje wybrany rekord, zdaje się na Ciebie ile parametrów będziesz potrzebować 🤔🤔🤔
 *
 * 🏠⭐⭐ stwórz funkcje usuwającą wybrany rekord z wybranej kolekcji spróbuj ograniczyć się do jednego parametru
 *
 */

// const createTodo = () => {
//   return new Promise((res, rej) => {
//     /**
//      * tutuaj ma być setTimeout
//      * a w środku dodanie nowego elementu do tablicy todos
//      * Pamiętaj todos jest teraz obiektem a nie tylko stringiem!!
//      * pole nowego obiektu będzie pochodzić z parametru przekazanego do tej funckji
//      * a id (też mamy takie pole w obiekcie todo) masz stworzyć sam np używając todos.length + 5
//      */
//   });
// };

// const createTodo2 = (content) => {
//   // console.log([...todos]);
//   console.log(todos);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       todos.push({
//         id: todos.length + 1,
//         content,
//       });

//       resolve({ temp: `wykonałem się ${todos.length + 1}` });
//     }, 1000);
//   });
// };

// createTodo2("temp1")
//   .then(() => {
//     return createTodo2("temp2");
//   })
//   .then(() => {
//     return createTodo2("temp3");
//   });

/**
 *
 * stwórz funckje updateTodo która przyjmuje id todosa który chcemy edytować i jego nową wartośc
 *
 * opcja1) updateTodo({})
 * opcja2) updateTodo(id, nowyContent)
 *
 * funckja ma być opóźniona
 * i wsadzona w promisa
 *
 */

let todos = [
  { id: 4, content: "pooglądać netflixa" },
  { id: 2, content: "zrobić zakupy" },
  { id: 3, content: "uzupełnić ankietę" },
  { id: 1, content: "pouczyć się JSa" },
];
// Uncaught TypeError: Assignment to constant variable.
const updateTodo = (id, newContent) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newTodos = todos.map((todo) => {
        console.log({ todo, idDoUpdatu: id, newContent });

        if (todo.id === id) {
          const newTodo = {
            id: todo.id,
            content: newContent,
          };

          return newTodo;
        }

        return todo;
      });

      todos = newTodos;
      resolve();
    }, 1000);
  });
};

updateTodo(2, "nsadasdas ").then(() => {
  console.log("zupdatowałem rekord który chciałeś oto nowa tablica ", todos);
});

// [1,2,3,4].map((elemnt, index, array)=>{

// })

// const promise1 = createTodo2("nauczyć się promisów");
// const promise2 = createTodo2("asdfasdf");
// const promise3 = createTodo2("test123");
// const promise4 = createTodo2("tes321");
// const promise5 = createTodo2("temp");

// Promise.all([promise1, promise2, promise3, promise4, promise5]).then((resp) => {
//   console.log(resp);
// });

function addTwoNumbers(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    console.log({
      a: typeof a,
      b: typeof b,
    });
    throw Error("Ej dodajemy tylko liczby");
  }

  return a + b;
}
