var val, names;
var arr = [];


for (let i = 0; i < Infinity; i++) {
    names =prompt("Введите 'add, ... ' чтобы добавить имя 'del, ... ' чтобы удалить имя");
    val=names.split(' ');
    
    if(val[0] === 'add,'){
        arr.push(val[1]);
    }
    
    else if(val[0] === 'del,'){
        arr.splice(arr.indexOf(names[1]), 1);
    }
    
    else if(val[0] === 'stop'){
        break;
    }
    
}
console.log(arr);