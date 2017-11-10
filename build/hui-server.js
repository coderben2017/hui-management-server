"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 文章api
app.get('/api/articles', function (req, res) {
    var result = articles;
    res.json(result);
});
app.get('/api/article/:id', function (req, res) {
    res.json(articles.find(function (article) { return article.id == req.params.id; }));
});
// 计划api
app.get('/api/plans', function (req, res) {
    res.json(plans);
});
app.get('/api/plan/:info', function (req, res) {
    var result = plans;
    if (req.params.info) {
        result = result.filter(function (plan) { return plan.title.toLowerCase().indexOf(req.params.info) > -1; });
    }
    res.json(result);
});
var server = app.listen(8000, 'localhost', function () {
    console.log('服务器已启动，正在监听8000端口');
});
/**
 * 数据原型
 */
var Plan = (function () {
    function Plan(id, title, company, author, createTime, uploadTime) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.author = author;
        this.createTime = createTime;
        this.uploadTime = uploadTime;
    }
    return Plan;
}());
exports.Plan = Plan;
var Article = (function () {
    function Article(id, title, author, time, content) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.time = time;
        this.content = content;
    }
    return Article;
}());
exports.Article = Article;
var plans = [
    new Plan(1, '采样计划1', '合作社1', '作者1', new Date('2017-10-12'), null),
    new Plan(2, '采样计划2', '合作社2', '作者2', new Date('2017-10-13'), null),
    new Plan(3, '采样计划3', '合作社3', '作者3', new Date('2017-10-14'), null),
    new Plan(4, '采样计划4', '合作社4', '作者4', new Date('2017-10-15'), null),
    new Plan(5, '采样计划5', '合作社5', '作者5', new Date('2017-10-16'), null),
    new Plan(6, '采样计划6', '合作社6', '作者6', new Date('2017-10-17'), null),
    new Plan(7, '采样计划7', '合作社7', '作者7', new Date('2017-10-18'), null),
    new Plan(8, '采样计划8', '合作社8', '作者8', new Date('2017-10-19'), null),
    new Plan(9, '采样计划9', '合作社9', '作者9', new Date('2017-10-20'), null),
    new Plan(10, '采样计划10', '合作社10', '作者10', new Date('2017-10-21'), null),
    new Plan(11, '采样计划11', '合作社11', '作者11', new Date('2017-10-22'), null),
    new Plan(12, '采样计划12', '合作社12', '作者12', new Date('2017-10-23'), null),
    new Plan(13, '采样计划13', '合作社13', '作者13', new Date('2017-10-24'), null),
    new Plan(14, '采样计划14', '合作社14', '作者14', new Date('2017-10-25'), null),
    new Plan(15, '采样计划15', '合作社15', '作者15', new Date('2017-10-26'), null),
    new Plan(16, '采样计划16', '合作社16', '作者16', new Date('2017-10-27'), null),
    new Plan(17, '采样计划17', '合作社17', '作者17', new Date('2017-10-28'), null),
    new Plan(18, '采样计划18', '合作社18', '作者18', new Date('2017-10-29'), null),
    new Plan(19, '采样计划19', '合作社19', '作者19', new Date('2017-10-30'), null),
    new Plan(20, '采样计划20', '合作社20', '作者20', new Date('2017-10-31'), null),
    new Plan(21, '采样计划21', '合作社21', '作者21', new Date('2017-11-01'), null),
    new Plan(22, '采样计划22', '合作社22', '作者22', new Date('2017-11-02'), null),
];
var articles = [
    new Article(1, 'C语言从入门到精通', 'Gago', new Date(), '### 111'),
    new Article(2, '面向对象技术', 'Gago', new Date(), '### 222'),
    new Article(3, '算法设计与分析', 'Gago', new Date(), '### 333'),
    new Article(4, '腰椎病防治手册', 'Gago', new Date(), '### 444'),
];
//# sourceMappingURL=hui-server.js.map