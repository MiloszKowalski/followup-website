function AddAnimation() {
  let sections = document.querySelectorAll('section');
  let firstSection = document.getElementById('see-you-soon');
  ForEach(sections, (e) => {
    if(e != firstSection) {
      e.setAttribute("data-scroll-into-view", "fade-in");
      e.setAttribute("data-scroll-into-view-offset", "35");
      let children = e.children;
      ForEach(children, (child) => {
        child.classList.add("will-fade-in");
      })
    }
  })

  // let texts = document.querySelectorAll('.text');
  // ForEach(texts, (e) => {
  //   e.setAttribute("data-scroll-into-view", "fade-in");
  //   e.setAttribute("data-scroll-into-view-offset", "50");
  //   e.classList.add("will-fade-in");
  // })
}

OnLoad(AddAnimation);