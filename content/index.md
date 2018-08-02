---
title: Remark Image Autolinking Bug
---

## Markdown Version (No Link)

![Screenshot of video.](./images/gatsby.png)

```md
![Screenshot of video.](./images/gatsby.png)
```

✅ links to the image

## Markdown Version (Link)

[![Screenshot of video.](./images/gatsby.png)](https://example.org)

```md
[![Screenshot of video.](./images/gatsby.png)](https://gatsbyjs.org)
```

🚫 still links to the image!
