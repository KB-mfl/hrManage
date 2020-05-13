克隆项目
git clone
可能会遇到github拒绝连接的情况，这个去百度搜素一下问题的解决方法。

切换到自己分支（切记不要在master,dev分支上开发）
    首次需要建立自己的分支（建立加切换到自己分支）
    git checkout -b 自己分支名
    之后只需要切换到自己分支：
    git checkout 自己分支


在web文件里安装，首先要cd web

安装依赖

yarn install


启动项目
yarn start


添加依赖包:
yarn add xxx


提交(在自己分支上提交)：
git add .
git commit -m 'xxx'
git push 