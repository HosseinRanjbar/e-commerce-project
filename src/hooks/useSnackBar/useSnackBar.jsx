import { useCallback, useState } from 'react'
import './assets/snackbar.css'

const useSnackBar = () => {

    // const [time, setTime] = useState(5)
    let time = 5
    const open = useCallback(({ type, message = "An error has occurred.", showErrorMessage = false, hasCloseButton = false, hasTimer = true }, operation) => {



        const snackBar = document.createElement("div")
        snackBar.className = `${type}-snackbar snackbar ${hasTimer ? "justify-around" : "justify-center"}`

        const messageElement = document.createElement('span');
        messageElement.textContent = showErrorMessage ? message : "An error has occurred.";
        snackBar.appendChild(messageElement);

        if (hasTimer) {
            const timer = document.createElement('div');
            timer.textContent = time;

            snackBar.appendChild(timer);

            let remainingTime = time;
            const timerInterval = setInterval(() => {
                remainingTime--;
                timer.textContent = remainingTime;

                if (remainingTime <= 0) {
                    clearInterval(timerInterval);

                }
            }, 1000);
        }

        if (hasCloseButton) {
            const close = document.createElement("div")
            close.textContent = "x"
            close.className = "close-snackbar"
            close.addEventListener("click", () => snackBar.remove())

            snackBar.appendChild(close)
        }


        document.getElementById("snackbar-wrapper").append(snackBar)

        setTimeout(() => {
            snackBar.remove();
            operation()
        }, 5000)

    }, [time, document])



    return { open }
}



export default useSnackBar