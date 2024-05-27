function ready(){
    let input = document.getElementById('file');
    let label = input.nextElementSibling;
    let labelVal = label.innerHTML;

    input.addEventListener('change', function(event){
        console.log(this.files);
        let fileName = '';
        if(this.files && this.files.length > 1){
            fileName = (this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length)
        }
        else{
            fileName = this.files[0].name;
        }
        if(fileName){
            label.querySelector('span').innerHTML = fileName;
        }
        else{
            label.innerHTML = labelVal;
        }
    })
}

document.addEventListener('DOMContentLoaded', ready());