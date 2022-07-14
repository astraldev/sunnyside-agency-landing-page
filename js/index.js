function toggleClass(klass, el, anim){
  const elm = document.querySelector(el);
  if(elm) {
    let in_out = !elm.classList.contains(klass)
    if(anim == "scale-up"){
      let scale = in_out ? 0 : 1;
      elm.style.transform = `scale(${scale})`
      let interval = setInterval(()=>{
        scale += ( () => in_out ? +0.01 : -0.01 )();
        elm.style.transform = `scale(${scale})`;
        if(scale > 1 || scale < 0){
          clearInterval(interval)
          if(!in_out){
            elm.classList.toggle(klass)
          }
        }
      }, 0.1)
    }
    if(in_out){
      elm.classList.toggle(klass)
    }
  }
}
function removeClass(klass, el){
  const elm = document.querySelector(el);
  if(elm) elm.classList.remove(klass)
}