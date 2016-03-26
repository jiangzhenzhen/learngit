/**
 * Created by swm on 2015/12/21.
 */
function ajax( method , url ,data , success){
    var xhr = null;
    try{
        xhr = new XMLHttpRequest;
    }catch(e){
        xhr = new ActiveXObject(Microsoft.XMLHTTP);
    }

    xhr.open( method , url ,true);
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                var oUl = document.getElementById('oul');
                var html='';
                for (var i = 0; i < data.length; i++) {
                    html += '<li><a href="#">' + data[i].title + '[<span>' + data[i].date +                                            '</span>]</a></li>';
                    oUl.innerHTML = html;
                }

            }else{
                alert("出错了");
            }
        }
    };
}