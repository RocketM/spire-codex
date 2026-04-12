# Spire Codex

<p align="center">
  <a href="README.md">English</a> |
  <a href="README_CN.md">中文</a>
</p>

一个通过逆向解析游戏文件构建的 **《杀戮尖塔 2》游戏数据综合数据库与 API**。支持游戏自带的 **14 种语言**。

**在线站点**：[spire-codex.com](https://spire-codex.com)

**Steam App ID**：2868840

## 构建方式

《杀戮尖塔 2》基于 Godot 4 游戏引擎构建，但全部游戏逻辑并不写在 GDScript 中，而是存放在一个 C#/.NET 8 的 DLL（`sts2.dll`）里。整条数据处理流水线如下：

1. **PCK 提取** —— 使用 [GDRE Tools](https://github.com/bruvzg/gdsdecomp) 提取 Godot 的 `.pck` 文件，恢复图片、Spine 动画和本地化数据（约 9,947 个文件）。
2. **DLL 反编译** —— 使用 [ILSpy](https://github.com/icsharpcode/ILSpy) 将 `sts2.dll` 反编译为约 3,300 个可读的 C# 源文件，包含所有游戏模型。
3. **数据解析** —— 使用 22 个基于 Python 正则表达式的解析器从反编译后的 C# 源码中提取结构化数据，并按语言输出 JSON 到 `data/{lang}/` 目录。
4. **描述解析** —— 共享的 `description_resolver.py` 模块会将 SmartFormat 本地化模板解析为可读文本，并保留富文本标记供前端渲染。
5. **Spine 渲染** —— 角色和怪物并不是静态图片，而是 Spine 骨骼动画。项目使用无头 Node.js 渲染器，将待机姿势组装为 512×512 的头像 PNG。
6. **图片资源** —— 从游戏资源中提取卡牌立绘、遗物/药水图标、角色美术、怪物图像等，并作为静态文件提供。
7. **更新日志差异比对** —— 差异工具可比较不同游戏版本之间的 JSON 数据，按类别追踪新增/删除/修改的实体，并提供字段级 diff。

## 本地运行

### 前置要求

- Python 3.10+
- Node.js 20+

### 后端

```bash
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r backend/requirements.txt

cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

后端运行于 **http://localhost:8000**。

### 前端

```bash
cd frontend
npm install
NEXT_PUBLIC_API_URL=http://localhost:8000 npm run dev
```

前端运行于 **http://localhost:3000**。

### Docker

```bash
docker compose up --build
```

会同时启动两个服务（后端在 8000，前端在 3000）。

## 技术栈

- **后端**：Python、FastAPI、Pydantic、slowapi、GZip 压缩
- **前端**：Next.js 16（App Router）、TypeScript、Tailwind CSS、14 语言支持
- **Spine 渲染器**：Node.js、Playwright、@esotericsoftware/spine-webgl（通过无头 Chrome 使用 WebGL）
- **基础设施**：Docker、Forgejo CI、buildah

## 免责声明

本项目仅用于教育目的。游戏数据版权归 Mega Crit Games 所有。不得将本项目用于重新编译或重新分发游戏。
