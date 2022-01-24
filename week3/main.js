//function doSomething(){
//    console.log('Something Happened!');
//}

function doSomething(event){
    console.log(event.type);
}

addEventListener('click', doSomething);