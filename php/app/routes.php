<?php
// Routes
$app->get('/new', function($request,$response){

	$dir = system('cd .. && dir');
	return $response->withJson(utf8_decode($dir));

});



$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
