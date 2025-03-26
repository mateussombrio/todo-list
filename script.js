/* Removing the input's border when clicked*/
const removeBorder = () => {
    document.querySelector('.input-text').addEventListener('click',function (){
        this.style.border = 'none'
    })
}