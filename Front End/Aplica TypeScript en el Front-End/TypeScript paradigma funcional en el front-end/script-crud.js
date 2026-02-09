"use strict";
const btnAgregarTarea = document.querySelector(".app__button--add-task");
const formAgregarTarea = document.querySelector(".app__form-add-task"); //form
const textarea = document.querySelector(".app__form-textarea"); //textarea
const ulTareas = document.querySelector(".app__section-task-list"); //ul
const pDescTarea = document.querySelector(".app__section-active-task-description"); //p
const removerConcluidasBtn = document.getElementById("btn-remover-concluidas"); //button
const removerTodasBtn = document.getElementById("btn-remover-todas");
let tareas = JSON.parse(localStorage.getItem("tareas") || '""') || [];
let tareaSeleccionada = null;
let liTareaSeleccionada = null;
console.log(tareas);
