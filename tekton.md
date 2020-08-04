# Tekton - A CI/CD Solution native to k8s

## Tekton Tasks

With Tekton, each operation in your CI/CD workflow becomes a **Step**, which is executed with a container image you specify. Steps are then organized in **Tasks**. Following YAML specified a Task with one simple **step** which prints a Hello World.

```
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: hello
spec:
  steps:
    - name: hello
      image: ubuntu
      command:
        - echo
      args:
        - "Hello World!"
```
Step executes as a container and task executes as a pod. 

To run a task, a task run needs to be created. A **taskrun** is another K8s object defined via tekton CRD which is used to specify run time information for a Task.

A task run looks like the following

```
apiVersion: tekton.dev/v1beta1
kind: TaskRun
metadata:
  creationTimestamp: null
  generateName: hello-run-
  namespace: default
spec:
  resources: {}
  serviceAccountName: ""
  taskRef:
    name: hello
status:
  podName: ""
```

To create a task tun, run the command :
```
tkn task start hello --dry-run > taskRun-hello.yaml
```

Here, **tkn** is the command line client for tekton. 

To run the task on kubernetes, run the command :
```
kubectl create -f taskRun-hello.yaml
```

To see the logs of the task run, run the command :
```
tkn taskrun logs --last -f 
```


## Tekton Pipelines


