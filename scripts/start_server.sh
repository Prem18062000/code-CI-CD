#!/bin/bash
set -euo pipefail
echo ">>> start_server.sh started at $(date)"
cd /home/ubuntu/myapp/app || exit 1
# run as background process and save logs (nohup prevents exit when shell exits)
nohup npm start > /home/ubuntu/myapp/app.log 2>&1 &
echo ">>> start_server.sh finished at $(date)"
