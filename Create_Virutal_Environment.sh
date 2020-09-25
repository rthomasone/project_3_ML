#Create Project Folder in Non-Privileged User Folder
printf "\n##Create Project Folder in Non-Privileged User Folder\n"
whoami
mkdir /home/ubuntu/myproject
ls -lh /home/ubuntu/myproject


#Change Working Directory
printf "\n##Change Working Directory\n"
cd /home/ubuntu/myproject
pwd


#Create Virtual Environment
printf "\n##Create Virtual Environment\n"
virtualenv --python python3 /home/ubuntu/envs/myprojectenv


#Confirm Virtual Environment Path
printf "\n##Confirm Virtual Environment Path\n"
echo $VIRTUAL_ENV


#Activate Virtual Environment
printf "\n##Activate Virtual Environment\n"
source ~/envs/myprojectenv/bin/activate


#Install Gunicorn & Flask
printf "\n##nstall Gunicorn & Flask\n"
pip install gunicorn flask


#Install Supporting Packages for App
printf "\n##nstall Gunicorn & Flask\n"
pip install json5 numpy pandas sklearn xgboost


#Download Flask App & Supporting Files from GitHub
printf "\n##Download Flask App & Supporting Files from GitHub\n"
git clone https://github.com/rthomasone/project_3_ML.git


#Copy Contents of Website into Parent Folder
printf "\n##Copy Contents of Git Repo into Parent Folder\n"
mv -v project_3_ML/Website/* .


printf "\n##Confirm Contents of Project Directory\n"
pwd
ls -lh


#Confirm App.py Configured for Public Access
printf "\n##Confirm App.py Configured for Public Access\n"
tail app.py 


#Confirm WSGI Entry Point
printf "\n##Confirm WSGI Entry Point\n"
cat ~/myproject/wsgi.py

#Deactive Virtual Environment
printf "\n##Deactive Virtual Environment\n"
deactivate
