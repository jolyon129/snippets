# git操作

## 撤销修改
**舍弃所有未添加到暂存区的更改: ** `git checkout -- *`
**舍弃暂存区中的文件: ** `git reset HEAD <file>... `
**修改上一次commit中的数据: ** `git commit --amend`

## 删除分支


## git stash
`git stash` 存储
`git pop` 如果不使用任何参数，会恢复最新保存的工作进度，并将恢复的工作进度从存储的工作进度列表中清除。
`git stash apply` 出了不清楚列表其余一样
`git stash clear` 清除所有工作列表


## 远程库
**添加远程库：** ` git remote add [shortname] [url]：`