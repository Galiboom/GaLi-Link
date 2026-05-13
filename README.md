GaLi-Link
WeChat-Pulse-Broadcast (微信小程序心率广播)
这是一个基于微信小程序低功耗蓝牙（BLE）技术开发的心率广播插件/应用。它可以让搭载心率传感器的智能设备（如华为手环、小米手环、Apple Watch 或专用心率带）通过蓝牙与小程序连接，并将实时心率数据同步展示或进行二次转发。

📖 项目简介
在运动健身、直播互动或压力监测等场景下，获取实时心率数据至关重要。本项目提供了一套完整的解决方案：

设备发现：自动扫描周边支持标准 BLE 心率服务的设备。

连接管理：稳定连接并订阅心率特征值（Characteristic）。

数据解析：遵循 Bluetooth SIG Standard (0x180D) 协议，实时解析心率数值。

可视化展示：动态图表实时反馈心率波动。

🛠 技术架构
该项目主要利用了微信小程序的蓝牙低功耗（Low Energy）API 接口：

wx.openBluetoothAdapter：初始化蓝牙模块。

wx.startBluetoothDevicesDiscovery：搜索外部心率设备。

wx.createBLEConnection：建立 GATT 连接。

wx.notifyBLECharacteristicValueChange：订阅 0x2A37（Heart Rate Measurement）特征值。

心率数据解析原理
根据标准协议，心率数据的第一个字节为标志位（Flags），随后是心率数值。本项目已处理 uint8 与 uint16 两种格式的自动兼容。
