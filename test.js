function tempButtonDisable() {
    const btn = document.getElementById('estimateSubmit')
    btn.setAttribute('disabled')
    setTimeout(()=>btn.removeAttribute('disabled'), 3000)
}

tempButtonDisable()