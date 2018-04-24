<?php 
	header("Access-Control-Allow-Origin:*");
	/* 在数据库中比对用户信息 */
	$conn = mysql_connect("qdm174285379.my3w.com:3306", "qdm174285379", "su19950708");
	mysql_select_db("qdm174285379_db", $conn);
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	$sql = "SELECT * FROM `invalid` ";
	// id, name, price, img
	// 执行查询SQL语句，返回查询结果集（类似表格）
	$result = mysql_query($sql);
	$arr = array();
	// 判断查询结果
	while ($row = mysql_fetch_object($result)){
		// echo '{"res_code":0, "res_body":'. json_encode($row) .'}';
		
		array_push($arr,$row);
	} 
	echo json_encode($arr);
	// else {
	// 	echo '{"res_code":-1, "res_error":"查询失败", "res_body":{}}';
	// }
	// $arr = array();
	// if ($row = mysql_fetch_object($result)) {
	// 	// array_push($arr,$row);
	// 	echo '{"res_code":0, "res_body":'. json_encode($row) .'}';

	// }
	// echo '{"res_code":0, "res_body":'. json_encode($arr) .'}';
	// 关闭数据库连接
	mysql_close();
 ?>