This is the sihong's personal website. 

### Run it

Open docker desktop then

```bash
docker compose up
```

### Add folder/content

1. 在 \_config.yml 里加一段：
```yml
collections:
  travel:
    output: true
    permalink: /:collection/:path/
```

1. 新建文件夹 `/_travel/`，每篇旅行记录放一个 `.md` 文件。

2. 每个文件顶部写 front matter，例如：
```yml
---
title: "东京 2026"
date: 2026-04-15
collection: travel
excerpt: "樱花季、展览和街头记录"
---
正文内容
```

1. 再建一个列表页，比如 `/_pages/travel.html`，像 publications / portfolio 一样把它们列出来。

2. 最后在 \_data/navigation.yml 里加导航项，不然页面存在但菜单里看不到。

### Open link in new tab

- \[(.*?)\]\((.*?)\)
- <a href="$2" target="_blank">$1</a>