/**
 * dane zapisane w pamięci/w zmiennych możecie o nich też myśleć jako o danych które są trzymane w bazie danych
 * i są dostępne dzięki backendowi
 */
const todos = [
  { id: 1, content: "pouczyć się JSa" },
  { id: 2, content: "zrobić zakupy" },
  { id: 3, content: "uzupełnić ankietę" },
  { id: 4, content: "pooglądać netflixa" },
];
const users = [
  { id: 1, content: "Jane" },
  { id: 2, content: "Joe" },
  { id: 3, content: "Json" },
  { id: 4, content: "Jack" },
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
 * part2
 * dodajmy obsługę nieistniejącej kolekcji i wyświetlmy stosowny komunikat
 * tzn. jezeli user wpisze słowo inne niż 'todos' lub 'users' wyświetlmy np alert
 *
 * hint 1💡 w tym celu trzeba przerobić funkcje getResults i wykorzystać funkcje reject
 * (drugi parametr w funkcji która sama jest parameterm w konstruktorze Promisy - JavaScript jest dziwny)
 *
 * 👇🏻 kod napisz pod komentarzem
 */

/**
 *
 * okay mamy jakąś kolekcje a co jeżeli chcemy zrobić kilka operacji
 * na raz albo jedna po drugiej?
 *
 * promise chaining
 *
 * czyli np chcemy zedytować jakiś rekord, inny chcemy usunąć itd jak to "ograć"??
 *
 * stówrz funkcje opżnioną przez setTmieout o nazwie createTodo która przyjmie parametr typu string - będzie to nasz nowy
 * todos w koleckji czyli zmiennej która przechowuje tablice na górze pliku
 *
 * ⭐ tak samo swtórz funkcje która edytuje wybrany rekord, zdaje się na Ciebie ile parametrów będziesz potrzebować 🤔🤔🤔
 *
 * 🏠⭐⭐ stwórz funkcje usuwającą wybrany rekord z wybranej kolekcji spróbuj ograniczyć się do jednego parametru
 *
 */
