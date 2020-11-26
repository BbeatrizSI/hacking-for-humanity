# first we declare our upstream server, which is our Gunicorn application
upstream api_server {
    # docker will automatically resolve this to the correct address
    # because we use the same name as the service: "api"
    server api:8000;
}

# now we declare our main server
server {

    listen 80;
    server_name localhost;

    location / {
        # everything is passed to Gunicorn
        proxy_pass http://api_server;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_redirect off;
    }
}