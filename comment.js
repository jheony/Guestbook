let cnt = 1; //글번호


const modal = document.querySelector('.modal');
const btnWrite = document.querySelector('.btn');
const cbtn = document.querySelector('.close');
const btnSubmit = document.querySelector('.submit');


btnWrite.onclick= function(){
    modal.style.display="block";
}



cbtn.onclick= function(){
    modal.style.display="none";
}

btnSubmit.onclick = function(){
    //데이터 저장(글쓴이, 비밀번호, 내용)
}
