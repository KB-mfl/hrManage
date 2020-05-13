克隆项目
git clone


切换到自己分支（切记不要在master,dev分支上开发）
    首次需要建立自己的分支（建立加切换到自己分支）
    git checkout -b 自己分支名
    之后只需要切换到自己分支：
    git checkout 自己分支


安装依赖//注意这个是在web文件里安装，首先要cd web
yarn install


启动项目
yarn start


添加依赖包:
yarn add xxx


提交(在自己分支上提交)：
git add .
git commit -m 'xxx'
git push 