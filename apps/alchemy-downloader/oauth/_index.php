<?php
	$loc="com.asfmapps.alchemydownloader://oauth_callback"
	$uri=$_SERVER['REQUEST_URI'];	
	$uri=explode("/",$uri); 	
	array_shift($uri);	
	array_shift($uri);	
	$uri=join("/",$uri);
	
	$loc.=$uri; 	

	header("location:$loc",true,301);
?>