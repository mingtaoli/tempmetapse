安装windows11,
安装wsl2，到github上wsl的官方站点下载最新的release
用管理员打开powershell，add-Appxpackage xxx.msibundle文件，这样安装wsl最新版。

https://baijiahao.baidu.com/s?id=1745459075923952029&wfr=spider&for=pc

wsl --list --online查看有哪些wsl release
wsl install -d ubuntu-20.04安装ubuntu LTS
使用windows terminal就可以打开ubuntu，当然也可以使用mobaxterm。
在ubuntu中，如果想设置root密码，请使用sudo passwd root设置。
在ubuntu中，使用su -切换为root用户。
使用apt update和apt dist-upgrade升级ubuntu到最新版本。
编辑/etc/wsl.conf,使用systemd，参看相关文档。
使用apt install docker-compose安装docker-compoese
使用docker-compose启动一个mongo
vscode安装mongoDB for VSCode 是mongodb官方出品的。
在vscode的左侧会出现一个叶子样的图标，就是mongo，可以建立一个连接到mongodb://localhost:27017
执行metapse.mongodb，就会建立相应的数据库，