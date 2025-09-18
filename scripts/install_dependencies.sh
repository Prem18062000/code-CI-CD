#!/bin/bash
set -euo pipefail
echo ">>> install_dependencies.sh started at $(date)"
# update and install node if missing (use sudo because runas is ubuntu)
sudo apt-get update -y
sudo apt-get install -y nodejs npm
# ensure app dir exists and install node modules
cd /home/ubuntu/myapp/app || exit 1
if [ -f package-lock.json ]; then npm ci; else npm install; fi
echo ">>> install_dependencies.sh finished at $(date)"
