@Library('pipeline-library-demo')_

pipeline {
     agent any
     tools {nodejs "node15"}
    stages {
        stage('build') {
            steps {
                sh 'Node --version'
            }
        }
        stage('Init') {
            steps {
                GitPull()                
            }
        }
        stage('test'){
            steps{
                echo 'Version : '+"${params.Version}"+"-"+"${currentBuild.number}"
                WriteVersion("${params.Version}"+"-"+"${currentBuild.number}")

                sh 'ls'
               
            }
        }
        stage('zip'){
            steps{
                zip zipFile: 'test.zip', dir: './work'
               
                sh 'ls'
            }
        }
      stage('deploy'){
          steps{
                
                sh 'scp test.zip root@139.59.225.121:/root/test/'
                
             
          }
      }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
