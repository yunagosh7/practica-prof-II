const body = document.querySelector("body")
const main = document.querySelector("main")
const header = document.querySelector("header")

const dialog = document.querySelector(".modal__screen-wrapper")
const dialogContent = document.querySelector(".diagram__content")


const diagramImagesContainer = document.querySelectorAll(".main__diagram__img-container")


console.log(diagramImagesContainer[0])
console.log(dialog)
diagramImagesContainer.forEach((diagramContainer) => {
  diagramContainer.addEventListener("click", (e) => {
    main.classList.add("modal-open");
    header.classList.add("modal-open");
    dialog.classList.remove("closed");
    body.classList.add("modal-open")
  });
});
// diagramImagesContainer.entries(([key, element]) => {
//   console.log("aslkalsf")
//   element.addEventListener("click", (e) => {
//     main.classList.toggle("modal-open")
//     header.classList.toggle("modal-open")
//     dialog.classList.remove("closed")
//     e.stopPropagation()
//   })
// })

dialog.addEventListener("click", (e) => {
  main.classList.toggle("modal-open")
  header.classList.toggle("modal-open")
  dialog.classList.add("closed")
  body.classList.remove("modal-open")
  console.log("asdafklas")
})



dialogContent.addEventListener("click", (e) => {
  e.stopPropagation()
})