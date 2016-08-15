# SupportCSS3

```javascript
// 检测一般css3特性的函数
var support_css3 = (function() {
   var div = document.createElement('div'),
      vendors = 'Ms O Moz Webkit'.split(' '),
      len = vendors.length;
 
   return function(prop) {
      if ( prop in div.style ) return true;
 
      prop = prop.replace(/^[a-z]/, function(val) {
         return val.toUpperCase();
      });
 
      while(len--) {
         if ( vendors[len] + prop in div.style ) {
            return true;
         } 
      }
      return false;
   };
})();
```