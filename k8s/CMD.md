## ☸️ Kubernetes Deployment

### Prerequisites
- Active Kubernetes cluster (`kubectl` configured)
- Docker image pushed to a registry

### Deploy

```bash
# Apply all Kubernetes configurations
kubectl apply -f k8s/

# Or apply individually
kubectl apply -f k8s/server-deployment.yml
kubectl apply -f k8s/main-server-service.yml
kubectl apply -f k8s/ingress.yml
```

### Check Deployment Status

```bash
# View deployments
kubectl get deployments

# View services
kubectl get services

# View ingress
kubectl get ingress

# Check pod logs
kubectl logs -f <pod-name>
```

### Configuration Files

- **server-deployment.yml** - Kubernetes deployment configuration for the Express server
- **main-server-service.yml** - Service to expose the deployment
- **ingress.yml** - Ingress rules for external access