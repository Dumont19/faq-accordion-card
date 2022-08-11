const btns = document.querySelectorAll('button')

function showAnswers() {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active')

            let answer = btn.nextElementSibling
            let arrow = btn.children[0]

            if (answer.style.display === 'block') {
                answer.style.display = 'none'
                arrow.style.transform = 'rotate(0deg)'
            } else {
                answer.style.display = 'block'
                arrow.style.transform = 'rotate(180deg)'
            }
        })
    })
}
showAnswers()