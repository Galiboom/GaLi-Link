# GaLi-Link 💓 (WeChat-Pulse-Broadcast)

> **GaLi-Link** 是一款基于微信小程序低功耗蓝牙 (BLE) 技术的心率实时监测与广播工具。

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-WeChat-brightgreen.svg)](https://mp.weixin.qq.com/cgi-bin/wx)
[![Stars](https://img.shields.io/github/stars/Galiboom/GaLi-Link)](https://github.com/Galiboom/GaLi-Link/stargazers)

## 🌟 项目亮点

* **全标准协议支持**：完美支持 Bluetooth SIG (0x180D) 标准心率服务，兼容 Polar、Garmin、华为、小米等市面上大部分心率带和开启了广播模式的手环。
* **低功耗设计**：采用高效的 BLE 扫描算法，减少手机和穿戴设备的电量消耗。
* **零延迟展示**：实时解析心率数据，支持心率波动的动态可视化图表展示。
* **兼容性处理**：自动处理 `uint8` 和 `uint16` 格式的数据流，确保障不同设备的心率读数准确无误。

## 📂 目录结构

```text
GaLi-Link/
├── GaLi-Link/         # 小程序源代码
│   ├── pages/         # 页面文件夹 (设备搜索、心率展示)
│   ├── utils/         # 工具类 (数据解析逻辑、蓝牙封装)
│   ├── app.js         # 全局入口
│   └── app.json       # 页面配置
├── README.md          # 项目说明
└── .gitignore         # 忽略文件
