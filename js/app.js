


cosnt targets = document.querySelectorAll('img');

window.addEventListener('scroll', (event) => {
  targets.forEach(img => {
    console.log("😀")
    const rect = img.getBoundingClientRect().top;
    if (rect <= window.innerHeight) {
      const src = img.getAttribute('data-lazy');
      img.setAttributes('src', src);
      img.classList.add('fade')
    }
  })
})