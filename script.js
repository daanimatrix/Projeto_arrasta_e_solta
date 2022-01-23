let areas ={
    a: null,
    b: null,
    c: null
}


// document.querySelector(".neutralArea").addEventListener('click',(e)=>{
//     console.log("clicou!",e.target);
//     // e.target.style.border = '1px solid #ff0000';  para selecionar o item

// });

document.querySelectorAll('.item').forEach(item=>{
    item.addEventListener('dragstart',dragStart);
    item.addEventListener('dragend',dragEnd);
});

document.querySelectorAll('.area').forEach(area=>{
    area.addEventListener('dragover',dragOver);
    area.addEventListener('dragleave',dragLeave);
    area.addEventListener('drop',drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);



//function item
function dragStart(e){
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}

//function area

function dragOver(e){
    e.preventDefault();
        if(e.currentTarget.querySelector('.item') === null){
            e.currentTarget.classList.add('hover');
        }
}

function dragLeave(e){
    e.currentTarget.classList.remove('hover');
}

function drop(e){
    e.currentTarget.classList.remove('hover');
    if(e.currentTarget.querySelector('.item') === null){
        let dragItem = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(dragItem);
        uploadAreas();
    }
}

//function Neutral Area

function dragOverNeutral(e){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeaveNeutral(e){
    e.currentTarget.classList.remove('hover');
}

function dropNeutral(e){    
    e.currentTarget.classList.remove('hover');
    // if(e.currentTarget.querySelector('.neutralArea') === null){
        let dragItem = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(dragItem);
        uploadAreas();
    // }
}

// logic functions

function uploadAreas(){
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');

        if(area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;
        }else{
            area[name]=null;
        }
    });
}
    


