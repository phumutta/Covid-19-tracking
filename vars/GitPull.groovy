def call() {
   sh 'Node --version'
    git 'https://github.com/phumutta/Covid-19-tracking'  
    echo "========Git Pull=========="
    sh 'npm install'
    echo "=========install=========="
                
}
