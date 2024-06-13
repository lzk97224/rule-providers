module.exports.parse = ({ content, name, url }, { yaml, axios, notify }) => {
  var result = {}

  // 创建XMLHttpRequest对象
  var xhr = new XMLHttpRequest();

  // 配置同步的GET请求
  xhr.open('GET', 'https://raw.githubusercontent.com/lzk97224/rule-providers/main/mixin.yaml', false); // 注意这里的false参数，它指定了请求为同步

  // 设置请求完成后的处理函数
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // 请求成功，处理响应数据
      console.log(xhr.responseText);
      result = yaml.parse(xhr.responseText);
    } else {
      // 请求失败，处理错误
      console.error('Request failed with status:', xhr.status);
    }
  };

  // 发送请求
  xhr.send();
  console.log(result)
  
  return content
}
