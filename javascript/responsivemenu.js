document.getElementById('bar1');
document.getElementById('bar2');
document.getElementById('bar3');
document.getElementById('menu');
document.getElementById('menumain');
 function openmenu(){
if(bar3.style.display!='none'){
    bar3.style.display='none';
    bar1.style.transform='rotate(53deg)'
    bar2.style.transform='rotate(-53deg)'
    bar2.style.margin='-4px 0 0 0';
    menumain.style.right='-28px';
}
else{
    bar3.style.display='block';
    bar1.style.transform='rotate(0deg)'
    bar2.style.transform='rotate(0deg)'
    bar2.style.margin='4px 0 0 0'
    menumain.style.right='-200px';
    
}
}