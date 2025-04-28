let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#656d4a'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的 HTML 視訊元素
}

function draw() {
  background('#656d4a'); // 確保背景顏色持續更新

  // 翻轉畫布以水平翻轉影像
  push(); // 儲存當前繪圖狀態
  translate(width, 0); // 將原點移到畫布右上角
  scale(-1, 1); // 水平翻轉畫布

  // 繪製攝影機影像
  image(
    capture,
    (width - capture.width) / 2, // 計算影像水平居中的位置
    (height - capture.height) / 2, // 計算影像垂直居中的位置
    capture.width,
    capture.height
  );

  pop(); // 恢復繪圖狀態
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新影像大小
}
