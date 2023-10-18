/////////////////////////////////////////////////////////////////////////// autorize code input
const inputs = document.querySelectorAll('.linked-input')

inputs.forEach((input, index) => {
    input.addEventListener('input', e => {
        if (e.target.value) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus()
            }
        }

        document.querySelector('#sms-code-input').value = inputs[0].value + inputs[1].value + inputs[2].value + inputs[3].value + inputs[4].value
    })
})


/////////////////////////////////////////////////////////////////////////// resend
const resendBtn = document.querySelector('#resend-btn')
const resendBtnNumber = document.querySelector('#resend-btn span')

let count = 10

resendBtnNumber.innerHTML = `(${count})`

function resendTimer() {
    const interval = setInterval(() => {
        count--
        resendBtnNumber.innerHTML = `(${count})`

        if (count === 0) {
            resendBtn.removeAttribute('disabled')
            resendBtn.style.paddingRight = '1.5rem'
            resendBtnNumber.innerHTML = ''
            clearInterval(interval)
        }
    }, 1000)
}

resendTimer()