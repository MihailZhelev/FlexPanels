const panels = document.querySelectorAll('.panel');

function toggleOplen() {
    this.classList.toggle('open');
}
function toggleActive(e) {
     if(e.propertyName.includes('flex')) {
          this.classList.toggle('open-active');
     }
   console.log(e.propertyName);
}
panels.forEach(panel => panel.addEventListener('click', toggleOplen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));