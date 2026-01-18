hexo.extend.helper.register('relative_date', function(date){
  const moment = require('moment');
  return moment(date).fromNow();
});