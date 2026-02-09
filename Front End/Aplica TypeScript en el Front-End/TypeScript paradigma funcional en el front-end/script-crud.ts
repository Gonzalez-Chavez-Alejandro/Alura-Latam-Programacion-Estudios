const btnAgregarTarea = document.querySelector(".app__button--add-task") as HTMLButtonElement
const formAgregarTarea = document.querySelector(".app__form-add-task") as HTMLFormElement//form
const textarea = document.querySelector(".app__form-textarea") as HTMLTextAreaElement//textarea
const ulTareas = document.querySelector(".app__section-task-list") as HTMLUListElement//ul
const pDescTarea = document.querySelector(".app__section-active-task-description") as HTMLParagraphElement //p
const removerConcluidasBtn = document.getElementById("btn-remover-concluidas") as HTMLButtonElement//button
const removerTodasBtn = document.getElementById("btn-remover-todas") as HTMLButtonElement

