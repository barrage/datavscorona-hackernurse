Visit https://www.datavscorona.com/hack.html for docs/instructions

Docker image
```https://hub.docker.com/r/ivanr/hackernurse```

Run with helm
```helm upgrade hackernurse ./helm --install --set ingress.enabled=true --set ingress.annotations."cert-manager\.io/cluster-issuer"=letsencrypt-prod --set ingress.hosts[0].host=www.hackernurse.com --set ingress.hosts[0].paths.path="/" --set ingress.tls[0].hosts[0]=www.hackernurse.com --set ingress.tls[0].secretName=hackernurse-tls --set service.type=NodePort```