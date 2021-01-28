# AWS-Example
 Ejemplo AWS ReactJS

 Cuenta AWS: 
 https://aws.amazon.com/free/

AWS CLI: 
https://aws.amazon.com/cli/

ReactJS Framework:
https://reactjs.org/

AWS Config:

    aws configure

Repositorio de App:


Deploy Code:
        
    "deploy":"react-scripts build && aws s3 sync build/ s3://aws-reactjs-example-qwerty --acl public-read"

Deploy CMD: 
    
    npm run-script deploy

Pagina Ejemplo:
http://aws-reactjs-example-qwerty.s3-website-us-east-1.amazonaws.com/