/**
 *
 * Wróćmy na chwilę do starego dobrego XMLHttpRequesta ALE w nowej odsłonie
 *
 * Axios - biblioteka do wykonywania zapytań HTTP
 * jest zaimplementowana na bazie XMLHttpRequesta
 * bardzo szeroko stosowana w branży nie tylko na froncie
 *
 * składniowo przypomina fetcha aczkolwiek może być nawet trochę łatwiejszy
 *
 * https://axios-http.com/docs/intro
 *
 * axios.get('/user?ID=12345')
 * .then(function (response) {
 *   // handle success
 *  console.log(response);
 *  })
 * .catch(function (error) {
 *   // handle error
 *   console.log(error);
 *  })
 *
 */

document.querySelector("#createPost").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const cleanFormFields = () => e.target.reset();

  console.log(formProps);
  const data = {
    title: formProps.title,
    body: formProps.content,
    userId: formProps.userSelect,
  };

  showSpinner();

  axios
    .post("https://jsonplaceholder.typicode.com/posts", { data })
    .then((data) => {
      console.log(data);
    })
    .finally(() => {
      showToast("jupii sukces", "success");
      hideSpinner();
      cleanFormFields();
    });

  /**
   * Miejsce na twój kod
   *
   *
   *
   */
});
