'use strict'
import { getData } from '../../db/mongodb.js'
export const controller = {}
let selectCategory = [];
let categoryAll = [];
let productsAll = [];

controller.index = async (_req, res) => {
   try {
      const { products, category } = await getData();
      categoryAll = category;
      productsAll = products;
      if (selectCategory.length != 0) {
         res.render("index", { products: selectCategory });
         selectCategory = [];
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
      console.error('No existe la categoría');
      return;
   }

   // Se valida si el usuario ingresó una categoría valida.
   if (categoryAll[userInput]) {
      selectCategory = categoryAll[userInput]
      res.status(200).send('ok');
   }
}

controller.contacto = (req, res) => {
   res.render("contacto");
}

controller.robot = async (req, res) => {
   try {
      const cookie = req.cookies.robot;
      const robot = productsAll.find((element) => element.name === cookie);
      if (robot === undefined) res.redirect("/");
      else res.render("robot", { robot, category: categoryAll });
   } catch (error) {
      console.error(error)
   }
}