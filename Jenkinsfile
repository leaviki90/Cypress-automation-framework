pipeline {  //pipeline job
    agent any //koristi bilo kog roba koji je slobodan

    tools {nodejs "node"} //jer cypress radi na js kojeg pokrece node

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git branch: 'main', url: '%Script%'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git branch: 'main', url: '%Script%'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
            }
        }
    }
}