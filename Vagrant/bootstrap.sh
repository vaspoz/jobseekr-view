#!/bin/bash

sudo apt-get update -y
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm
sudo apt-get install -y git
