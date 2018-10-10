<?php
    error_reporting(E_ALL ^ E_DEPRECATED);
    $db=mysql_connect("localhost","root","");//连接数据库   (地址 用户名 密码)
    mysql_select_db("data",$db);//选择数据库 数据库名称 连接
    mysql_query("set names utf8");//设置编码格式

    $uname = $_REQUEST["myname"];
    $upassword = $_REQUEST["mypassword"];

    $sql2 = "SELECT * FROM `my_data` WHERE (`my_name`='$uname')";
    $data1 = mysql_query($sql2);
     
    $sql3 = "SELECT * FROM `my_data` WHERE (`my_password`='$upassword')";
    $data2 = mysql_query($sql3);

    $result1=mysql_fetch_array($data1);//取出结果集的第一条数据,转换成数组的格式
    $result2=mysql_fetch_array($data2);//取出结果集的第一条数据,转换成数组的格式
    
    if($result1&&$result2){
        echo '{"status":200,"msg":"用户存在且密码正确","res":false}';       
    }else{
        echo '{"status":200,"msg":"用户名或密码错误","res":false}';    
    }
   
?>