export const vHighLight = (el: HTMLElement, binding: any) => {
  const { word, text } = binding.value
  el.innerHTML = text.replace(new RegExp(word, "gi"), `<span class="text-bold">${word}</span>`)
}
