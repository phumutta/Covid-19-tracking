@Library('pipeline-library-demo')_

pipeline {
    agent any
    stages {
        stage('Demo') {
            steps {
                echo 'Hello, world'
                SayHello ('Dave')
                script{
                    def x = System.in.newReader().readLine() as Integer
                    println x
                }

                
            }
        }
    }
}