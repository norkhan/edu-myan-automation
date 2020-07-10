#!/bin/bash

 dir=$(pwd)

 
 chrome="chromedriver"
 geckodriver="geckodriver"

 npmLog=$dir/"npmlog.txt"
 chromeLog=$dir/"chromelog.txt"
  
 chromeDriver=$dir/$chrome
 geckodriver=$dir/$geckodriver

dpkg -s "unzip" &> /dev/null

if [ $? -eq 0 ]; then
    echo "unzip  is installed!"
else
    echo "unzip  is NOT installed!"
	sudo apt-get install unzip
fi

dpkg -s "tar" &> /dev/null

if [ $? -eq 0 ]; then
    echo "tar  is installed!"
else
    echo "tar  is NOT installed!"
	sudo apt-get install tar
fi

dpkg -s "npm" &> /dev/null

if [ $? -eq 0 ]; then
    echo "npm installed & expected version v6.14.4"
	version=$(npm -v)
	echo "current npm version" $version
else
    echo "npm  is NOT installed!"
fi

if which node > 0 
then
	echo "node installed & expected version v8.10.0"
	version=$(node -v)
	echo "current node version " $version
else
	echo "Node is Not installed"
fi
cd $dir
if [ -f $chromeLog ] ; then
	echo "Chrome browser version installed to v80.0.3987.149" 
	version=$(google-chrome --version)
	echo "current chrome vesion" $version
else
	sudo apt-get purge google-chrome-stable
	wget http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_80.0.3987.149-1_amd64.deb
	sudo dpkg -i ./google-chrome-stable_80.0.3987.149-1_amd64.deb
	sudo rm -rf ./google-chrome-stable_80.0.3987.149-1_amd64.deb
	echo "chrome version 80.0.3987.149" >> $chromeLog
fi

if [ -f $chromeDriver ] ; then
	 echo "chromedriver exist"
else
	wget  https://chromedriver.storage.googleapis.com/80.0.3987.106/chromedriver_linux64.zip
	
	unzip $dir/chromedriver_linux64.zip -d $dir/
	rm -rf $dir/chromedriver_linux64.zip
fi


if [ -f $geckodriver ] ; then
	echo "geckodriver exist."
else
	
	wget https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-linux64.tar.gz
	tar -xvf $dir/geckodriver-v0.26.0-linux64.tar.gz
	rm -rf $dir/geckodriver-v0.26.0-linux64.tar.gz
fi

export chromedriver=$chromeDriver
export geckodriver=$geckodriver

if [ -f $npmLog ] ; then
	echo "npm already installed packages"
else
	sudo npm i
	echo "init npm installed" >> $npmLog
fi

if [ ! -z "$1" ]; then
	echo "Automate to testing site."
	npm run dev
else
	sudo npm start
fi 

