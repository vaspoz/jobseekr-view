#!/bin/bash

# Colorful bash
sed -i.bak 's/\#force_color_prompt=yes/force_color_prompt=yes/' /home/vagrant/.bashrc

# Setup environment
sudo apt-get update -y
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

# Use npm global installs without sudo
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'bin-links=false' >> .npmrc
echo 'export PATH=~/.npm-global/bin:$PATH' >> .profile
source ~/.profile

sudo npm install -g npm
sudo apt-get install -y git

# Building
cd /home/vagrant/shared/ && sudo npm install || sudo npm install
sudo npm cache clear

# Run application
