<?php 
	header("Access-Control-Allow-Origin:*");
	// 获取输入的登录用户名与密码
	$id = $_POST["id"];
	$min = $_POST["min"];
	$seconds = $_POST["seconds"];
	/* 在数据库中比对用户信息 */
	$conn = mysql_connect("qdm174285379.my3w.com:3306", "qdm174285379", "su19950708");
	mysql_select_db("qdm174285379_db", $conn);
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	//查找对应id的数据并插入到rob表中
	$sql = "insert into invalid select * from `delivered` WHERE id='$id'";
	$result = mysql_query($sql);
	if ($result){
		// echo '{"res_code":0, "res_error":"", "res_body":"插入成功"}';
		// 删除订单表中对应的信息
		$sql = "DELETE FROM delivered WHERE id='$id'";
		$result = mysql_query($sql);
		// if($result){
		// 	$sql = "UPDATE rob SET time='$min',seconds='$seconds' WHERE id='$id'";
		// 	$result = mysql_query($sql);
		// 	echo '{"res_code":-1, "res_error":"抢单成功", "res_body":{}}';
		// }
		echo '{"res_code":-1, "res_error":"抢单成功", "res_body":{}}';
	} else {
		echo '{"res_code":1, "res_error":"插入失败", "res_body":{}}';
	}
	
	// 关闭数据库连接
	mysql_close();
 ?>