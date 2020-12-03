pipeline {
     agent any
     tools {nodejs "node15"}
    stages {
        stage('build') {
            steps {
                sh 'Node --version'
            }
        }
        stage('git') {
            steps {
             git 'https://github.com/phumutta/Covid-19-tracking'      
                
            }
        }
        stage('install'){
            steps{
                sh 'npm install'
                sh 'npm install zip'
            }
        }
        stage('test'){
            steps{
                sh 'ls'
                script {
                   def data = readFile(file: 'README.md')
                   println(data)
               }
            }
        }
        stage('zip'){
            steps{
                zip zipFile: 'test.zip', dir: 'src'
               
                sh 'ls'
            }
        }
      stage('deploy'){
          steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'DigitalOcean')])
                sh 'scp test.zip root@139.59.225.121:/test'
                sh 'ssh root@139.59.225.121'
                sh 'cd test'
                sh 'ls'
          }
      }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
