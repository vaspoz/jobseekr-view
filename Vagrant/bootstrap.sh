#!/bin/bash

sudo apt-get update -y
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm
sudo apt-get install -y git

# Building
cd /home/vagrant/shared/ && sudo npm install --no-bin-links
sudo npm cache clear
sudo npm install -g gulp-cli

# Run application
cd /home/vagrant/shared/ && npm run serve