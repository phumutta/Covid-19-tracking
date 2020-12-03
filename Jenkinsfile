@Library('pipeline-library-demo')_

pipeline {
    agent any
    stages {
        stage('Demo') {
            steps {
                echo 'Hello, world'
                echo 'Version : 'params.Version
                SayHello ('Dave')
               

                
            }
        }
    }
}