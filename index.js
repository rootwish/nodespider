var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var url = 'http://www.6vhao.tv/top.html';
var getData = function (url) {
    request({
        encoding: null,
        url:url
    }, function (err, res, body) {
        if (err) return console.error(err);
        body = iconv.decode(body, 'gb2312').toString();
        var $ = cheerio.load(body, { decodeEntities: false });
        $('table tbody').find('td').each(function (index, ele) {
            var href = $(ele).children('a').last().html();
            //data.push(str);
            console.log(href);
            console.log('*********');
        });
    });
}
getData(url);