
const Hexo = require('hexo');
const hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
  return hexo.load();
}).then(function(){
  const tags = hexo.locals.get('tags');
  console.log('Available Tags:');
  tags.forEach(tag => {
    console.log(`- Name: "${tag.name}", Slug: "${tag.slug}"`);
  });
});
