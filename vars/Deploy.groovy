  
  def call() {
    echo "============Deploy=============="
    sh 'scp Build.zip root@139.59.225.121:/root/test/'
                
}

  