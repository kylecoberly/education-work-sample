addScrollBehavior("[href='#instruction']", "#instruction")
addScrollBehavior("[href='#assessment']", "#assessment")
addScrollBehavior("[href='#philosophy']", "#philosophy")

function addScrollBehavior(linkSelector, targetSelector){
  const $link = document.querySelector(linkSelector);
  const $target = document.querySelector(targetSelector);

  $link.addEventListener("click", event => {
    event.preventDefault()
    history.pushState({}, "", targetSelector)
    try {
      $target.scrollIntoView({ behavior: "smooth" })
    } catch (_){
      $target.scrollIntoView(true)
    }
  })
}
