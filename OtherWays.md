Kind → easiest and fastest if you already have Docker installed.
Minikube → best learning experience with lots of tutorials and add-ons.

Example with Kind:

kind create cluster --name demo
kubectl get nodes
kubectl create deployment nginx --image=nginx
kubectl get pods

This gives you a full Kubernetes cluster without relying on Docker Desktop's Kubernetes feature.