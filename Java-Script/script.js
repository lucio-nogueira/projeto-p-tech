openMenu.addEventListener('click', () => { 
        menu.style.display = 'flex'
        menu.style.rigth = (menu.offsetWidth * -1) + 'px'
        openMenu.style.display = 'none'
         
        setTimeout(() => {
         menu.style.opacity = '1'
         }, 10)
         })
        
closeMenu.addEventListener('click', () => {
         menu.style.opacity = '0'
         menu.style.rigth = (menu.offsetWidth * -1) + 'px'
         
         setTimeout(() => {
         menu.removeAttribute('style')
         openMenu.removeAttribute('style')
         }, 200)
         })