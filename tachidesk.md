# 抱怨
可累死我了，在10.1这一整天（下午）都在研究这东西，终于成功了。代价是把cloudcone的梯子都拆了哈哈。熬到晚上两点半真是的，明天肯定起不来啦。
# 流程
参考文章：https://blog.chujiani.top/03-tachidesk/index.htmlhttps://blog.chujiani.top/03-tachidesk/index.html

0. 安装docker
1. 安装tachidesk-docker
2. 导入证书
3.     server {
        listen 443 ssl;
        server_name             此处隐去; 
        ssl_certificate         /etc/nginx/certs/domain.cer;
        ssl_certificate_key     /etc/nginx/certs/private.key;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

        location / {
            proxy_pass http://manga:4567;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
       }

4. docker run -d --name nginx44 -p 443:443 --network nginxnet -v ./ganma.conf:/etc/nginx/conf.d/ganma.conf:ro -v /etc/nginx/certs:/etc/nginx/certs nginx


# 11/7

在临近到期之前突然给我换了个ipv4，还改好几次登陆密码，气死了

~~这次把ganma.conf的路径矫正了一下，不知道能不能正常，上面那个路径里面根本没有文件。真不知道之前怎么成功的~~

好吧之前的是对的，教程没看仔细。需要先cd到配置文件的位置，冒号前面的是宿主位置，冒号后面的才是容器内位置。
