<?php 
	header("Access-Control-Allow-Origin:*");
	// 获取输入的登录用户名与密码
	$email = $_POST["email"];
	$username = $_POST["username"];
	$phone = $_POST["phone"];
	$password = $_POST["password"];
	/* 在数据库中比对用户信息 */
	$conn = mysql_connect("qdm174285379.my3w.com:3306", "qdm174285379", "su19950708");
	mysql_select_db("qdm174285379_db", $conn);
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	$sql = "SELECT uid, email, firstname, lastname, score, level, createtime FROM `mall_users` WHERE phone='$phone' and password='$password'";
	// 执行查询SQL语句，返回查询结果集（类似表格）
	$result = mysql_query($sql);
	// 判断查询结果
	if ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
		echo '{"res_code":0, "res_error":"", "res_body":'. json_encode($row) .'}';
	} else {
		echo '{"res_code":1, "res_error":"用户名或密码错误", "res_body":{}}';
	}
	
	// 关闭数据库连接
	mysql_close();
 ?>