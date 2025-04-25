document.addEventListener("DOMContentLoaded",()=>{
    const currentYear = new Date().getFullYear();
    const currentYearSpans = document.querySelectorAll(['data-year']);
    currentYearSpans.forEach(element =>{
        element.textContent = currentYear;
    });
});
