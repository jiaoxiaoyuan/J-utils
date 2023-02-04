
### 如需修改 registry 可通过以下四种方式

```
1、在全局配置 .npmrc ，可通过命令 npm config set registry= http://registry.npmjs.org/
2、在当前项目配置，在当前项目中添加配置文件 .npmrc ；
添加
registry = http://registry.npmjs.org/
3、发布包时指定 --registry 选项，npm publish —registry=http://registry.npmjs.org/
4、在当前项目的 package.json 中通过 publishConfig 字段指定

// package.json
{
  ”publicConfig“: {
    "registry": "http://registry.npmjs.org/"
  } 
}

```
