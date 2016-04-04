<?php
	echo "Hello World";
    $fileToDl = $_POST['imageUrl'];
    // $fileToDl = 'https://source.unsplash.com/category/food';

    // $imgContent = file_get_contents($fileToDl);

    // $fp = fopen("/images/image.jpg", "w");
    // fwrite($fp, $imgContent);
    // fclose($fp);

	// $fileToDl = 'https://source.unsplash.com/category/food';
	$save_dir = 'images/';
	$filename = 'photo.jpg';
	$complete_save_location = $save_dir.$filename;
	file_put_contents($complete_save_location, file_get_contents($fileToDl));
?>