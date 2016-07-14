#!/bin/bash

# Colorful bash
sed -i.bak 's/\#force_color_prompt=yes/force_color_prompt=yes/' /home/vagrant/.bashrc

# Setup environment
sudo apt-get update -y
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm
sudo apt-get install -y git
echo 'bin-links=false' > .npmrc

# Building
cd /home/vagrant/shared/ && sudo npm install
sudo npm cache clear
sudo npm install -g gulp-cli

# Run application
cd /home/vagrant/shared/ && npm run serve