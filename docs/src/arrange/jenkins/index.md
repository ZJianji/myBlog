# jenkins自动化部署web项目 :100:

## jenkins安装

***1、下载jenkins包***
```md
wget https://pkg.jenkins.io/debian-stable/binary/jenkins_2.387.3_all.deb
```

***2、安装Java***
```md
sudo apt update
sudo apt install openjdk-11-jdk
JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"
systemctl daemon-reload
```

***3、安装jenkins包***
```md
sudo dpkg -i jenkins_2.387.3_all.deb
```

***4、安装过程中可能会缺少依赖项，使用以下命令安装所需依赖项***
```md
sudo apt-get install -f
```

***5、启动 Jenkins***

```md
sudo systemctl start jenkins
```


***6、访问 Jenkins***

::: tip
打开浏览器并访问 http://your_server_ip:8080，按照提示完成初始设置。
:::

***7、安装插件***

::: tip
- NodeJS
- Git
- SSH
- Publish Over SSH
- Localization: Chinese (Simplified)  jenkins的中文包
:::

![alt text](image.png)

## SSH密钥配置

***1、生成密钥***

> 在服务器上执行，连续按三个enter键

```md
ssh-keygen -t rsa -b 4096 -C "邮箱"
```

> 用Xftp软件把密钥和私钥复制到服务器，路径：/var/lib/jenkins/.ssh

![alt text](image-5.png)

***2、把公钥拷贝到代码github仓库***

> 查看公钥

```md
cat ~/.ssh/id_rsa.pub
```

> 拷贝公钥至github仓库

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)


***3、 配置Publish over SSH***
![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-9.png)

![alt text](image-10.png)

## 全局安全配置
 Git Host Key Verification Configuration下选择 “Noverification”

![alt text](image-11.png)

## 凭据配置

> 系统管理-->凭据管理

![alt text](image-14.png)

> 添加凭据

![alt text](image-15.png)

![alt text](image-22.png)

![alt text](image-16.png)

## 新建Jenkins任务

> 新建任务-入口

![alt text](image-13.png)


> 配置-描述（任意填写）

![alt text](image-12.png)


> 配置-Git

![alt text](image-17.png)

![alt text](image-18.png)


> 配置-构建环境

![alt text](image-19.png)


> 配置-Build Steps

```md
pwd
#ls
#node -v
#npm -v
#git --version
#java -version
#echo，构建的版本号:’${BUILD NUMBER}
#echo /var/www/mywebsite
npm run docs:build
```

![alt text](image-20.png)


> 配置-SSH Publishers

![alt text](image-21.png)

## 服务器安装node

> 安装nvm

```md
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

> 安装对应的node版本

```md
nvm install 20.12.1
```
> 使用node

```md
nvm use 20.12.1
```

> 进入到/var/lib/jenkins/workspace/blog
```md
cd /var/lib/jenkins/workspace/blog
```

> 打包项目,是否打包成功
```md
npm run docs:dev
```
