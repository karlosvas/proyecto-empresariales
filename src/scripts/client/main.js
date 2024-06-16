'use strict'

const imagenes = document.querySelectorAll('.card');
imagenes.forEach((imagen) => {
   imagen.addEventListener('click', () => {
      const id = imagen.getAttribute('id');
      document.cookie = `robot=${id}`;
   });
});

const btnSearch = document.getElementById('search-btn');
const inputSearch = document.getElementById('searchInp');

btnSearch.addEventListener('click', validateData);
inputSearch.addEventListener('keyup', (event) => {
   if (event.keyCode === 13) {
      event.preventDefault();
      validateData()
   }
});

function validateData() {
   fetch('/api/post', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ searchInp: inputSearch.value })
   }).then((res) => {
      if (res.ok) location.reload();
      else console.log("Fail with response")
   }).catch((err) => {
      console.error(err)
   })
   inputSearch.value = '';
}

const btnCategory = document.querySelectorAll('.btn-category');
btnCategory.forEach((btn) => {
   btn.addEventListener('click', async (event) => {
      event.preventDefault();
      btn.disabled = true;
      try {
         let category = btn.textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();
         requestData(category);
         btn.disabled = false;
      } catch (error) {
         console.error(error)
      }
   });
});


function requestData(textContent) {
   fetch('/api/post', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ textContent })
   }).then((res) => {
      if (res.ok) location.reload();
      else console.log("Fail with response")
   }).catch((err) => {
      console.error(err)
   })
}