## To run this web app, use the following commands:

docker build -t alessa:eight-sleep .
(Tells Docker to build the image)

docker run -p 3100:3100 alessa:eight-sleep
(Tells Docker to run image binding port 3100)
