export const vHighLight = (el: HTMLElement, binding: any) => {
  const { searched, text } = binding.value
  el.innerHTML = text.replace(new RegExp(searched, "gi"), `<span class="text-bold">${searched}</span>`)
}
