const btn = document.querySelectorAll('button')

function showAnswers() {
    btn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active')

            let answer = btn.nextElementSibling
            let arrow = btn.children[1]
            let question = btn.children[0]

            if (answer.style.display === 'block') {
                answer.style.display = 'none'
                arrow.style.transform = 'rotate(0deg)'
                question.style.color = 'hsl(237, 12%, 33%)'
                question.style.fontWeight = '400'
                
            } else {
                answer.style.display = 'block'
                arrow.style.transform = 'rotate(180deg)'
                question.style.color = 'hsl(0, 0%, 0%)'
                question.style.fontWeight = '700'
            }
        })
    })
}
showAnswers()