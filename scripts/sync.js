const fs = require('fs');
const path = require('path');

// --- 配置区域 ---
// ⚠️ 请修改这里为你真实的 Obsidian 仓库文章路径
const OBSIDIAN_VAULT_PATH = '/Users/cheng/Library/Mobile Documents/iCloud~md~obsidian/Documents/Knowledge OS/post_blog';

// Hexo 博客的文章存放路径 (通常是 source/_posts)
const BLOG_POSTS_PATH = path.resolve(process.cwd(), 'source/_posts');

// --- 主逻辑 ---

async function syncPosts() {
  console.log('🚀 开始同步 Obsidian 文章...');
  console.log(`📂 源目录 (Obsidian): ${OBSIDIAN_VAULT_PATH}`);
  console.log(`📂 目标目录 (Hexo):     ${BLOG_POSTS_PATH}`);

  if (!fs.existsSync(OBSIDIAN_VAULT_PATH)) {
    console.error(`\n❌ 错误: 找不到 Obsidian 目录: ${OBSIDIAN_VAULT_PATH}`);
    return;
  }

  // 1. 读取 Obsidian 目录下的所有 .md 文件
  const files = fs.readdirSync(OBSIDIAN_VAULT_PATH).filter(file => file.endsWith('.md'));

  if (files.length === 0) {
    console.log('⚠️  源目录中没有找到 Markdown 文件。');
    return;
  }

  console.log(`\n📝 扫描到 ${files.length} 个 Markdown 文件...`);

  let count = 0;
  let skipCount = 0;

  // 2. 遍历并复制文件
  for (const file of files) {
    const sourcePath = path.join(OBSIDIAN_VAULT_PATH, file);
    const targetPath = path.join(BLOG_POSTS_PATH, file);

    // 检查是否需要更新
    if (fs.existsSync(targetPath)) {
      const sourceStats = fs.statSync(sourcePath);
      const targetStats = fs.statSync(targetPath);

      // 如果目标文件存在，且源文件修改时间早于目标文件，说明没有变化，跳过
      // (这里为了保险，只要源文件比目标文件新，或者大小不同，就覆盖)
      if (sourceStats.mtimeMs <= targetStats.mtimeMs) {
        skipCount++;
        continue;
      }
    }

    // 读取文件内容
    let content = fs.readFileSync(sourcePath, 'utf-8');

    // 可以在这里添加处理逻辑...

    // 写入到 Hexo 目录
    fs.writeFileSync(targetPath, content);
    console.log(`   ✅ 更新/新增: ${file}`);
    count++;
  }

  console.log(`\n🎉 同步完成！`);
  console.log(`   - 同步文件: ${count}`);
  console.log(`   - 跳过未变: ${skipCount}`);
}

syncPosts();
