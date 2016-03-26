/**
 * Created by swm on 2015/12/19.
 */
function ajax( method , url ){
    var xhr = null;
    try{
        xhr = new XMLHttpRequest();
    }catch(e){
        xhr = new ActiveXObject(Microsoft.XMLHTTP);
    }

    xhr.open(method , url ,true);
    xhr.send();

    xhr.onreadystatechange = function(){
        var data = JSON.parse( xhr.responseText );

        if(xhr.readyState == 4){
            if(xhr.status == 200){
                //alert(12);
                var html = '';
                var oUl = document.getElementById('ul1');
                for(var i = 0; i< data.length;i++){
                    html += '<li><a href="">' + data[i].title + '</a>[<span>' + data[i].date + '</span>]</li>'
                }
                oUl.innerHTML = html;

            }else{
                alert("没找到");
            }
        }
    }


};