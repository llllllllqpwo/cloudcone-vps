"use strict";
/*
* Generated from https://github.com/NewFuture/pac
* see all pac files https://pac.newfuture.cc
*/
var WhiteListHost = {
    "bt.byr.cn": true,
    "buaabt.cn": true,
    "139.com": true,
    "zhizhen.com": true
};
function FindProxyForURL(url, host) {
    if (host.indexOf(".") < 0
        || WhiteListHost[host]
        || /\.edu\.cn$/.test(host)
    ) {/*Plain Host Name or in whitelist*/
        return "DIRECT";
    } else if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host)
    &&(isInNet(host, "127.0.0.0", "255.255.255.0")
        || isInNet(host, "192.168.0.0", "255.255.0.0")
        || isInNet(host, "172.16.0.0", "255.240.0.0")
        || isInNet(host, "10.0.0.0", "255.0.0.0")
        || isInNet(host, "202.113.16.0", "255.255.240.0")
        || isInNet(host, "202.113.224.0", "255.255.240.0")
        || isInNet(host, "222.30.61.0", "255.255.225.0"))
    ) {/*Intranet IP*/
        return "DIRECT";
    }
    return "HTTP 10.193.28.162:7890; DIRECT";
};