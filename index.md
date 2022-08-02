<html lang="en">
		<head>
    <meta charset="utf-8" />
    <title>Web Sketchpad</title>

		<script charset="utf-8" type="text/javascript" src="./js/jquery-2.1.0.min.js"></script>
		<script charset="utf-8" type="text/javascript" src="./js/wsp-min.js"></script>
		<script charset="utf-8" type="text/javascript" src="./widgets/jquery.tiny-draggable.js"></script>
		<link rel="stylesheet" type="text/css" href="./widgets/widgets.css" />
		<script charset="utf-8" type="text/javascript" src="./widgets/widgets.js"></script>
		<script charset="utf-8" type="text/javascript" src="./js/sketch-json.js"></script>
		<script charset="utf-8" type="text/javascript" src="./js/wsp-runner.js"></script>
		
    <style type="text/css">
      .sketch_canvas {
          display: inline-block;
      }
    </style>

</head>
<body role="main">
	<div class="sketch_container">
		<div class="sketch_canvas" id="sketchDiv" data-var="sketch" > </div>
    <div style="clear:both;"></div>
      <div class="button_area">
        <div class="util-menu-btn"></div>
        <p><!--Any (short!) desired left-justified text goes here--></p>
        <span class="page_buttons"></span>
        <button class="widget_button">Widgets</button>
      </div>
		<div class="util-menu-btn"></div>
	</div>
</body>
</html>
