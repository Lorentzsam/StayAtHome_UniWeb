# Stay at Home University | 加利顿大学


一个恶搞的大学官网，为"Stay at Home University 加利顿(家里蹲)大学"打造。

## 特性

- 🎨 现代化、简洁的设计风格
- 📱 完全响应式设计，支持移动端、平板和桌面端
- ⚡ 流畅的动画和交互效果
- 🌐 中英文双语支持
- 🎯 清晰的导航和内容结构

## 文件结构

```
StayAtHome_UniWeb/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # JavaScript 交互脚本
└── README.md       # 说明文档
```

## 功能模块

### 导航栏
- 固定顶部导航
- 移动端响应式菜单
- 平滑滚动到各个章节

### 主要内容区域
1. **首页 Hero 区域** - 展示大学名称和主要信息
2. **快速链接** - 快速访问主要功能
3. **最新动态** - 新闻和公告
4. **关于我们** - 大学介绍和统计数据
5. **学术项目** - 各学科领域介绍
6. **研究亮点** - 研究成果展示
7. **招生信息** - 申请流程和步骤
8. **联系我们** - 联系方式和留言表单

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件即可查看网站
2. 或者使用本地服务器：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js (需要安装 http-server)
   npx http-server
   ```
3. 在浏览器中访问 `http://localhost:8000`

## 自定义

### 修改颜色主题
在 `styles.css` 文件的 `:root` 变量中修改：
```css
:root {
    --primary-color: #8B0000;  /* 主色调 */
    --secondary-color: #1a1a1a; /* 次要颜色 */
    /* ... 其他颜色变量 */
}
```

### 修改内容
直接编辑 `index.html` 文件中的文本内容即可。

### 添加图片
在 HTML 中替换占位符，添加实际的图片：
```html
<img src="path/to/your/image.jpg" alt="描述">
```

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 技术栈

- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## 许可证

本项目仅供学习和参考使用。

## 联系方式

如有问题或建议，欢迎联系。

---

**Stay at Home University | 加利顿大学**  
致力于在家学习的卓越教育
