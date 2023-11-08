const convert = document.querySelector('.convert').addEventListener('click', () => {
     const inp = document.querySelector('.in')
     const radCel = document.querySelector('#celcius')
     const radFah = document.querySelector('#farahn')
     const out = document.querySelector('.output')

     if (radCel.checked) {
          const calCel = ((inp.value - 32) * (5/9))
          out.innerHTML = calCel
     } else if (radFah.checked) {
          const calFah = ((inp.value * (9/5)) * 32)
          out.innerHTML = calFah
     } else {
          alert('Select a Unit to Convert to')
     };
})