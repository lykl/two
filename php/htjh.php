<?php
    error_reporting(E_ALL ^ E_DEPRECATED);
    $db=mysql_connect("localhost","root","");//连接数据库   (地址 用户名 密码)
    mysql_select_db("data",$db);//选择数据库 数据库名称 连接
    mysql_query("set names utf8");//设置编码格式


    $uname = $_REQUEST["myname"];
    $upassword = $_REQUEST["mypassword"];
    $usex = $_REQUEST["mysex"];
    $uphone=$_REQUEST["myphone"];


    $sql2 = "SELECT * FROM `my_data` WHERE (`my_name`='$uname')";
    $data = mysql_query($sql2);
     

        $result=mysql_fetch_array($data);//取出结果集的第一条数据,转换成数组的格式
       
        if($result){
            echo '{"status":200,"msg":"用户名已存在","res":false}';
            

        }else{
            $sql3="INSERT INTO `my_data`(`my_id`, `my_name`, `my_password`, `my_sex`, `my_phone`) VALUES (NULL, '$uname','$upassword','$usex','$uphone')";
            $count = mysql_query($sql3); // 增加 删除 修改 返回受影响的行数
            if($count==1){
                echo '{"status":200,"msg":"注册成功","res":true}';
            }
        }
        // print_r($result);


?>