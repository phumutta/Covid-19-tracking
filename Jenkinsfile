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
                zip zipFile: 'test.zip', archive: false, dir: 'src'
               
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
