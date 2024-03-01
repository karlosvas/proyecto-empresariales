'use strict'
import { products, category } from '../../db/mongodb.js';
export const controller = {}
export let selectCategory = {};
let actualCategory = {};

controller.index = async (req, res) => {
   try {
      if (Object.keys(selectCategory).length != 0 && actualCategory != selectCategory) {
         actualCategory = selectCategory;
         res.render("index", { products: selectCategory });
      } else {
         res.render("index", { products });
      }
   } catch (error) {
      console.error(error)
   }
}

controller.postData = async (req, res) => {
   let userInput;

   if (req.body.textContent) {
      userInput = req.body.textContent
   } else if (req.body.searchInp) {
      userInput = req.body.searchInp.toLowerCase().trim();
   } else {
      console.log('No existe la categoría');
      return;
   }

   // Se valida si el usuario ingresó una categoría valida.
   if (category[userInput]) {
      selectCategory = category[userInput]
      console.log(`Categoria ${userInput} selecionada`)
      res.status(200).send('ok');
   }
}

controller.contacto = (req, res) => {
   res.render("contacto");
}

controller.robot = async (req, res) => {
   try {
      let data = products;
      const cookie = req.cookies.robot;
      const robot = data.find((element) => element.name === cookie);
      if (robot === undefined) res.redirect("/");
      else res.render("robot", { robot, category });
   } catch (error) {
      console.error(error)
   }
}