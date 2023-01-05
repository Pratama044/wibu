const a = document.getElementsByTagName('a');
a[11].style.color = 'red';
a[11].style.fontFamily = 'cursive';





// function slide() {
//   if (document.getElementById('mysidenav')style.display == 'block'){
//     document.getElementById('mysidenav').style.display = 'none';

//   }else{
//     document.getElementById('mysidenav').style.display = 'block';
//   }
// }
// document.getElementById('menu-burger').addEventListener('click', slide);
// function openNav(){
//   if (document.getElementById('mysidenav').style.display== 'block'){
//     document.getElementById('mysidenav').style.display = 'none';
//   }else{
//     document.getElementById('mysidenav').style.display= 'block';
//   }
// }
// function openNav(){
//   if (document.getElementById('menu-footer').style.top== '400px'){
//     document.getElementById('menu-footer').style.top = '0';
//   }else{
//     document.getElementById('menu-footer').style.top= '580px';
//   }
// }
//  function openNav(){
//    if (document.getElementById('mysidenav').style.display== 'block'){
//      document.getElementById('mysidenav').style.display = 'none'; 
//    }else{
//     document.getElementById('mysidenav').style.display= 'block';
//   }
// }

function openNav(){
  if (document.getElementById('mysidenav').style.display== 'block'){
    document.getElementById('mysidenav').style.display= 'none';
  }else{
    document.getElementById('mysidenav').style.display= 'block';
  }
  if (document.getElementById('menu-footer').style.top== '580px'){
    document.getElementById('menu-footer').style.top= '0';
  }else{
    document.getElementById('menu-footer').style.top= '580px';
  }
}

