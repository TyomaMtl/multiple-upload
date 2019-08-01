<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Upload test</title>
		<script type="text/javascript" src="main.js" defer></script>
	</head>
	<body>

		<form method="post" enctype="multipart/form-data">

			<label>
				Uploader plusieurs fichiers :
				<input id="file" type="file" name="files[]" multiple>
			</label>

			<ul id="fileList">

			</ul>

			<input type="submit" name="submit">

		</form>

		<ul>
			<?php if(isset($errors)): ?>

				<?php foreach($errors as $error): ?>

					<li><?php echo $error; ?></li>

				<?php endforeach; ?>

			<?php endif; ?>
		</ul>

	</body>
</html>