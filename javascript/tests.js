window.location.hash="no-back-button";
window.location.hash="Again-No-back-button";//again because google chrome don't insert first hash into history
window.onhashchange=function(){window.location.hash="no-back-button";}

const modal = document.querySelector(".modal");
// const GMATmodal = document.querySelector(".GMATmodal");
    const trigger = document.querySelector("#GREtrigger");
    const trigger1 = document.querySelector("#GMATtrigger");
    const trigger2 = document.querySelector("#IELTStrigger");
    const trigger3 = document.querySelector("#TOEFLtrigger");
    const trigger4 = document.querySelector("#PTEtrigger");
    const trigger5 = document.querySelector("#IAStrigger");
    const examName = document.querySelector("#exam-name")
    const closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "GRE"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
        const examStart = document.querySelector('#start')
        examStart.addEventListener('click', () => {
            localStorage.setItem('Exam', "GRE")
            location.assign('/html/GREtest.html')
            
        })
    });
    trigger1.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "GMAT"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
        const examStart = document.querySelector('#start')
        examStart.addEventListener('click', () => {
            localStorage.setItem('Exam', "GMAT")
            location.assign('/html/GMATtest.html')
        })
    });
    trigger2.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "IELTS"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
        const examStart = document.querySelector('#start')
        examStart.addEventListener('click', () => {
            localStorage.setItem('Exam', "IELTS")
            location.assign('/html/IELTStest.html')
        })
    });
    trigger3.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "TOEFL"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
        const examStart = document.querySelector('#start')
        examStart.addEventListener('click', () => {
            localStorage.setItem('Exam', "TOEFL")
            location.assign('/html/TOEFLtest.html')
        })
    });
    trigger4.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "PTE"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
        const examStart = document.querySelector('#start')
        examStart.addEventListener('click', () => {
            localStorage.setItem('Exam', "PTE")
            location.assign('/html/PTEtest.html')
        })
    });
    trigger5.addEventListener("click", () => {
        if(examName) {
            examName.innerHTML = ''
        }
        const spanName = document.createElement('p')
        spanName.textContent = "DELF"
        examName.appendChild(spanName);
        modal.classList.toggle("show-modal");
        const examStart = document.querySelector('#start')
        examStart.addEventListener('click', () => {
            localStorage.setItem('Exam', "DELF")
            location.assign('/html/DELFtest.html')
        })
    });
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

