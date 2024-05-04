'use strict'
import { login, isloged } from './login.js'

login();

document.getElementById('buy').addEventListener('click', () => {
   if (!localStorage.getItem('logeado'))
      isloged('login')
})