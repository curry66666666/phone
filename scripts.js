// 轮播图自动播放和切换功能
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// 初始化轮播图，设置第一张图片为活动状态
function initializeCarousel() {
  images.forEach((img, index) => {
    if (index === 0) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

// 设置轮播图的自动播放
function autoRotateImages() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalImages;
  images[currentIndex].classList.add('active');
}

// 设置轮播图的自动播放时间间隔为3秒
setInterval(autoRotateImages, 3000);

// 手动切换轮播图图片
function switchImage(index) {
  images[currentIndex].classList.remove('active');
  currentIndex = index;
  images[currentIndex].classList.add('active');
}

// 为轮播图添加点击事件监听，以便手动切换图片
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    switchImage(index);
  });
});

// 在页面加载完成后初始化轮播图
document.addEventListener('DOMContentLoaded', initializeCarousel);
document.querySelectorAll('.hot-news-link').forEach(link => {
    link.addEventListener('click', () => {
      console.log('热点资讯链接被点击');
      // 可以在这里添加更多的逻辑
    });
  });

// 在页面加载完成后显示广告弹窗
window.onload = function() {
  // 创建弹窗的 HTML 结构
  var 广告弹窗 = document.createElement('div');
  广告弹窗.id = 'ad-modal';
  广告弹窗.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>这是一则广告！</p>
    </div>
  `;

  // 添加弹窗样式
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
    #ad-modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
      background-color: #fefefe;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 300px;
    }
    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // 将弹窗添加到 body
  document.body.appendChild(广告弹窗);

  // 显示弹窗
  document.getElementById('ad-modal').style.display = 'block';

  // 添加关闭弹窗的事件监听
  var closeBtn = document.querySelector('.close');
  closeBtn.onclick = function() {
    document.getElementById('ad-modal').style.display = 'none';
  };

  // 点击弹窗外部区域关闭弹窗
  window.onclick = function(event) {
    if (event.target == 广告弹窗) {
      document.getElementById('ad-modal').style.display = 'none';
    }
  };
};

// 控制夜间模式的JavaScript代码
document.getElementById('night-mode-toggle').addEventListener('click', function(e) {
  e.preventDefault(); // 阻止链接默认行为
  document.body.classList.toggle('night-mode'); // 切换夜间模式样式
});

// 显示微信二维码弹出层
function showWechatQRCode() {
  var wechatQRCode = document.getElementById('wechat-qrcode');
  wechatQRCode.style.display = 'block';
}

// 隐藏微信二维码弹出层
function hideWechatQRCode() {
  var wechatQRCode = document.getElementById('wechat-qrcode');
  wechatQRCode.style.display = 'none';
}

// 为悬浮球添加点击事件监听，显示微信二维码弹出层
var chatButton = document.getElementById('chat-button');
chatButton.onclick = function() {
  showWechatQRCode();
};

// 为关闭按钮添加点击事件监听，隐藏微信二维码弹出层
var closeQRCode = document.querySelector('.close-qrcode');
closeQRCode.onclick = function() {
  hideWechatQRCode();
};

// 点击弹出层外部区域隐藏弹出层
window.onclick = function(event) {
  if (event.target.id === 'wechat-qrcode') {
    hideWechatQRCode();
  }
};
function toggleNavbar() {
  var menu = document.getElementById('navMenu');
  menu.classList.toggle('show');
}

