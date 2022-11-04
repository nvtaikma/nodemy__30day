var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnremove = document.querySelector('.remove-all')
var tags = ['nodejs', 'reactjs']

function render(){
    content.innerHTML ='';
    for(let i=0; i< tags.length; i++){
        const tag = tags[i];
        content.innerHTML +=`
                    <li>
                                ${tag}
                                <i class="fa fa-times " onclick="removeTag(${i})"></i>
                             </li>
                            `
    }
    content.appendChild(input)
    input.focus();
}
render(); 

// function addtag(){
    
// }
function removeTag(index){
    tags.splice(index, 1)
    render() 
}

btnremove.addEventListener('click', function(){
    tags = []
    render()
})


input.addEventListener('keydown', (e) =>{
    if(e.key == "Enter"){
        // addtag()
        tags.push(input.value.trim());
        input.value =''
        render()
    }
})

