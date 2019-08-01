<?php

if(isset($_POST['submit']))
{
	$files = $_FILES['files'];
	$errors = [];


	if($files != NULL)
	{
		$path = 'images/';
		$allowedExt = array('png', 'jpg', 'jpeg');

		for ($i=0; count($files['name']) > $i; $i++)
		{
			$fileName = $files['name'][$i];
			$fileType = $files['type'][$i];
			$fileTmpName = $files['tmp_name'][$i];
			$fileError = $files['error'][$i];
			$fileSize = $files['size'][$i];

			$extension = pathinfo($fileName, PATHINFO_EXTENSION);

			if(!in_array($extension, $allowedExt))
			{
				$errors[] = 'Le fichier' . $fileName . ' ne peut pas etre uploadé car son extension n\'est pas valide';
			}
			else
			{
				$destination = $path . $fileName;

				if(!move_uploaded_file($fileTmpName, $destination))
				{
					$errors[] = 'Une erreur est survenu';
				}
			}
		}
	}
}


include('view.php');