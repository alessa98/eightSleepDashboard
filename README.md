## To run the web app:

Make sure docker hub is running, then in your terminal:

$ docker build -t alessa:eight-sleep .
(build image)

$ docker run -p 3100:3100 alessa:eight-sleep
(bind to port 3100)
