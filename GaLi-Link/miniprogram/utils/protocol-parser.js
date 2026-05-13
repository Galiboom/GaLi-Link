export const parseHealthData = (buffer) => {
  const data = new Uint8Array(buffer);
  
  // 通用示例：假设第2个字节是心率
  const heartRate = data[1] || 0;
  
  return {
    heartRate: heartRate,
    timestamp: new Date().getTime()
  };
};

export const ab2hex = (buffer) => {
  return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
};