function Solve(val) {
    var v=document.getElementById('res');
    v.value +=val;
}
function Result(){
    var num1=document.getElementById('res').value;
    try{
        var num2=eval(num1.rplace('x,*'));
        document.getElementById('res').value=num2;

    }
    catch{
        document.getElementById('res').value='Error';
    }
}
function Clear(){
    var inp=document.getElementById('res');
    inp.value='';

}
document.addEventListener('Keydown',function(event){
    const key=event.key;
    const validKeys='0123456789+-*/.%';
    if (validKeys.includes(Key)){
        Solve(key=== '*'?'x':key );
    }
    elseif(key==='ENTER'){
        Result();
    }
    elseif(key.toLowerCase()==='c'){
        Clear();
    }
});
