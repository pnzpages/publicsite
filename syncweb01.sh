#!/bin/bash
bundle exec jekyll build
rsync -avz /political.nz/website/political.nz/_site/  root@10.21.60.25:/var/www/html/
